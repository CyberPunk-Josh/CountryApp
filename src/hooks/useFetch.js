export const getCountryInfo = async (name) => {

    const url = `https://restcountries.com/v3/name/${name}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;

};
