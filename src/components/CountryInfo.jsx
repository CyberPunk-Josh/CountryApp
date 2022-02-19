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
        flag,
        language
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
                    <div className="col-md-6 row align-items-center justify-content-center">
                        <div className="col-md-6 mb-3">
                            <h6 className="font-weight-bold">Official Name:</h6>
                            <p>{name}</p>
                            <h6 className="font-weight-bold">Capital:</h6>
                            <p>{capital}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h6 className="font-weight-bold">Region: </h6>
                            <p>{region}</p>
                            <h6 className="font-weight-bold">Subregion: </h6>
                            <p>{subregion}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h6 className="font-weight-bold">Area: </h6>
                            <p>{area}</p>
                            <h6 className="font-weight-bold">Population: </h6>
                            <p>{population}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h6 className="font-weight-bold">Continent: </h6>
                            <p>{continent}</p>
                            <h6 className="font-weight-bold">Language: </h6>
                            <p>{language}</p>
                        </div>
                    </div>
                    <div className="col-md-6 row align-items-center justify-content-center">
                        <div className='col'>
                            <img src={flag} alt={name} style={{ width: '30rem', height: 'auto', border: '1px solid black'}}/>
                        </div>
                        <div className='col text-center mt-3'>
                            <a href={map} className='btn btn-primary text-white'>More Info</a>
                        </div>
                    </div>
                </div>
            )
            :
            <p>Start Searching a Country</p>
        }
    </div>
  )
}
