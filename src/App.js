import React from 'react';
import SearchBar from './SearchBar';
import API from './utils/API';
import Card from './Card'
import './App.scss'

class App extends React.Component {
  state = {
    result: {},
    search: "", 
    err: null
  };

  searchStock = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => this.setState({ err }));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStock(this.state.search);
    this.setState({ err: null})
  };
    
    render() {
        return (
            <div className="app" style={{ marginTop: '10px' }}>
                <SearchBar 
                  onSubmit={this.searchStock} 
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
                <Card err={this.state.err} stockInfo={this.state.result}/>
               
            </div>
        )
    }
}

export default App