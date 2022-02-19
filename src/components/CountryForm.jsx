import React, {useState, Fragment} from 'react';
import { Form, Button } from 'react-bootstrap';
import {getCountryInfo} from '../hooks/useFetch';
import { CountryInfo } from './CountryInfo';

import {Alert} from 'react-bootstrap';

export const CountryForm = () => {

  const [name, setName] = useState('');
  const [country, setCountry] = useState({
    name: null,
    capital: null,
    region: null,
    subregion: null,
    area: null,
    map: null,
    population: null,
    continent: null,
    flag: null,
    language: null,
  });
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let inputValue = name.length;
    if(inputValue < 3){
      setError(true);
      setCountry({});
      setTimeout(() =>{
        setError(false);
      }, 3000)
    } else {
      getCountryInfo(name)
      .then(info => {
        setCountry({
          name: info[0].name.official,
          capital: info[0].capital[0],
          region: info[0].region,
          subregion: info[0].subregion,
          area: info[0].area,
          map: info[0].maps.googleMaps,
          population: info[0].population,
          continent: info[0].continents[0],
          flag: info[0].flags[0],
          language: Object.values(info[0].languages)[0]
        });
      });
    };
  };

  return (
    <Fragment>
      <section className="country-form px-5">
          <h2 className="text-center mt-3">Search Information About Your Favorite Country</h2>
          {
            error
              &&
            <Alert variant='danger'>
              <Alert.Heading className="text-center">Introduce a Valid Country Name</Alert.Heading>
            </Alert>
          }
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mt-3">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
              type="text" 
              name='countryName'
              placeholder="Your Country Name"  
              onChange={handleInputChange}
              style={{ width: '50%'}}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>Search</Button>
          </Form>
      </section>
      <CountryInfo
        country={country}
      />
    </Fragment>
  )
}