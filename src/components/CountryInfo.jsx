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
        map,
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
                <img src={flag} alt={name} />
            )
            :
            <p>Start Searching a Country</p>
        }
    </div>
  )
}
