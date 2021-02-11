//Функция по сохранению токена в локальном хранилище браузера
function saveToken(tokenData) {
    localStorage.setItem('token', JSON.stringify(tokenData));
}

//Функция получения токена
async function fetchToken(sso_host, client_id, client_secret) {
return fetch(`${sso_host}/oauth/token`,{
    method: 'POST',
    body: JSON.stringify({
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret
    }),
    headers: {
    'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.catch(err => console.log(err))
}

//Функция получения items 
async function fetchItems(value, un_host, tokenData) {
return fetch(`${un_host}/skus?perPage=${value}`,{
    method: 'GET',
    headers:{
    'Authorization' : 'Bearer ' + tokenData.access_token
    }
})
.then(res => res.json())
.then((res) => res.data)
.catch(err => console.log(err))
}

//Функция получения результата с фильтром по наименованию
async function fetchFilteredItems(name, value, un_host, tokenData) {
    return fetch(`${un_host}/skus?perPage=${value}&trade_name[text][]=${name}`, {
        method: 'GET',
        headers:{
        'Authorization' : 'Bearer ' + tokenData.access_token
        }
    })
    .then(res => res.json())
    .then((res) => res.data)
    .catch(err => console.log(err))
}

//Функция получения адреса производителя
async function getAddress(address_id, company_host) {
    return fetch(`${company_host}/address/${address_id}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then((res) => res.data)
    .catch(err => console.log(err))
}

//Функция получения страны производителя
async function getCountry(country_id, directory_host) {
    return fetch(`${directory_host}/country/${country_id}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then((res) => res.data)
    .catch(err => console.log(err))
}

export { saveToken, fetchToken, fetchItems, fetchFilteredItems, getAddress, getCountry };