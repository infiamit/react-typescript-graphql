import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://portfolio-backendv2.herokuapp.com/public-graphql',
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      {
        projects{
          _id
          projectTitle
          projectUrl
          projectDescription
        }
      }
    `
  })
  .then(result => console.log('result', result));
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}
export default App;