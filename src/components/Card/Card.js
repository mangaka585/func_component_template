import React, { useEffect, useState  } from 'react';
import { CardWrapper, Title, Subtitle, AddressInfo } from './styled';
import { getAddress, getCountry } from '../../scripts/fetchScripts';
import config from '../../config/config';

const Card = ({ item }) => {
  const {
    trade_name,
    normalized_data: { manufacturer },
    address_id
  } = item;

  const [country, setCountry] = useState('Страна-производитель');
  const [address, setAddress] = useState('адрес');

  useEffect(() => {
    async function getAddressInfo(addressId){
      let responseAddress = await getAddress(addressId, config.company_host);
      let responseCountry = await getCountry(responseAddress.country_id, config.directory_host);
      setAddress(responseAddress.title);
      setCountry(responseCountry.name); 
    }
    getAddressInfo(address_id);
  }, []) //eslint-disable-line

  return (
    <CardWrapper>
      <Title>{trade_name.toUpperCase()}</Title>
      <Subtitle>{manufacturer}</Subtitle>
      <AddressInfo>{country}, {address}</AddressInfo>
    </CardWrapper>
  );
};

export default Card;
