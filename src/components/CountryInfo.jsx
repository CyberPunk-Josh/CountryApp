import React, {useEffect, useState} from 'react';

export const CountryInfo = ({country}) => {

    const [data, setData] = useState(false);

    const
     {
        name,
        capital,
        region,
        subregion,
        area,
        population,
        continent,
        flag
    } = country;

    useEffect(() => {
        if(country.name != null){
            setData(true);
        };
    }, [country]);

  return (
    <div className="px-5 mt-3">
        {
            data ? 
            (
                <div className="mb-5 px-5 row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <p>Official Name: {name}</p>
                        <p>Capital: {capital}</p>
                        <p>Region: {region}</p>
                        <p>Subregion: {subregion}</p>
                        <p>Area: {area}</p>
                        <p>Population: {population}</p>
                        <p>Continent: {continent}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={flag} alt={name} style={{ width: '20rem', height: 'auto', border: '1px solid black'}}/>
                    </div>
                </div>
            )
            :
            <p>Start Searching a Country</p>
        }
    </div>
  )
}
