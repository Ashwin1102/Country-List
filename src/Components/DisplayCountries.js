import React from 'react';
import { useQuery } from '@apollo/client';
import '../static/css/style.css';
import { GET_COUNTRIES } from '../queries/countryQueries.js';

export default function DisplayCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      {data.countries.map(({ name, native, emoji, currency, languages }) => (
        <div key={name} className="countryCard">
          <h3 className="countryName">Country Name: {name}</h3>
          <p>Native Country Name: {native}</p>
          <p>Emoji: {emoji}</p>
          <p>Currency: {currency}</p>
          <h4>Languages:</h4>
          <ul className="languageList">
            {languages.map(({ code, name }) => (
              <li key={code} className="languageItem">
                Code: {code}, Name: {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
