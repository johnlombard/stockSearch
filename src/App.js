import React from 'react';
import SearchBar from './SearchBar';
import API from './utils/API';
import Card from './Card'

// If 404 is returned display Please enter valid ticker
// loader
// colors of green and red negative
// css

class App extends React.Component {
  state = {
    result: {},
    search: ""
  };

  searchStock = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
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
  };
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar 
                  onSubmit={this.searchStock} 
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
                <Card stockInfo={this.state.result}/>
               
            </div>
        )
    }
}

export default App