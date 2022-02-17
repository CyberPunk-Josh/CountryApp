import React, {Fragment} from 'react';
import { CountryForm } from './components/CountryForm';
import { Nav } from './components/Nav';


export const CountryApp = () => {
  return (
    <Fragment>
        <Nav/>
        <CountryForm/>
    </Fragment>
  )
}
