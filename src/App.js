import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

function App() {

  const GET_BEASTS = gql`
  query {
    beasts {
      id
      commonName
      legs
      binomial
    }
  }`;

  const { loading, error, data } = useQuery(GET_BEASTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stacking Vercel, a GraphQL Apollo Server and React</h1>
        <p>A table of animals eaten by an old woman:</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Legs</th>
              <th>Binomial</th>
            </tr>
          </thead>
          <tbody>
            {data.beasts.map(beast => 
            <tr key={beast.id}>
              <td>{beast.commonName}</td>
              <td>{beast.legs}</td>
              <td>{beast.binomial}</td>
            </tr>
            )}
          </tbody>
        </table>
        <small>
          <p>This is a demo page to accompany the tutorial <br/>
            <a className="App-link"
              href="https://www.preciouschicken.com/blog/posts/vercel-apollo-server-react">
              preciouschicken.com/blog/posts/vercel-apollo-server-react
            </a></p>
          <p>Consult your own physicican before eating any of the animals on this table.</p>
        </small>
      </header>
    </div>
  );
}

export default App;
