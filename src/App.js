import React, { useEffect, useState } from 'react';

import { Button, Input, Card } from './components';
import { Wrapper, Controls, Total } from './styled';
import { saveToken, fetchToken, fetchItems, fetchFilteredItems } from './scripts/fetchScripts';

//Подключаем config для использования в запросах к удаленному серверу
import config from './config/config';

const useInput = initialText => {
  const [value, setValue] = useState(initialText);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
};

function App() {
  const [token, setToken] = useState('');
  const [items, setItems] = useState(null);
  const [total, setTotal] = useState('');

  const inputProps = useInput('');

  
  //useEffect используем для поочередного вызова получения токена, а затем items
  useEffect(() => {
    async function fetchData() {
      let tokenData = token;
      if(!tokenData) {
        tokenData = await fetchToken(config.sso_host, config.client_id, config.client_secret);
        //Хотелось бы использовать локальное хранилище для доступа к данным токена, но, видимо, нужно через наш state -> token.
        //Для изменения источника данных можно будет заменить token на localStorage.token
        saveToken(tokenData);
        setToken(tokenData);
      }
      let itemsData = await fetchItems(15, config.un_host, tokenData);
      setItems(itemsData);
      setTotal(itemsData.length);
    }
    fetchData();
  }, [])// eslint-disable-line

  async function getFilteredItems(text, value) {
    let response = await fetchFilteredItems(text, value, config.un_host, token);
    if(response) {
      setItems(response);
      setTotal(response.length);
    }
  }

  return (
    <Wrapper>
      <Controls>
        <Input placeholder='Поиск по торговому наименованию' {...inputProps} />
        <Button onClick={() => {getFilteredItems(inputProps.value, 15)} }>Найти</Button>
      </Controls>
      {!!total && <Total>Найдено: {total} шт.</Total>}
      {items && items.map(item => <Card key={item.id} item={item} />)}
    </Wrapper>
  );
}

export default App;
