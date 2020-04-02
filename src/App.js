import React from 'react';
import EmployeeTable from "./components/EmployeeTable";
import Navbar from "./components/Navbar";
import Form from "./components/Form/index";
import API from './utils/API';
import './App.css';

class App extends React.Component { 
  state = { 
    results: []
  };


  componentDidMount() { 
    API.getMany(10)
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  }

  render() { 
    // const filtered = this.state.results.filter(result);
    // console.log(filtered);
    console.log(this.state.name);
    console.log(this.state.results)
    return ( 
        <div>
          <Navbar />
          <Form
          name = {this.state.name} />
          <EmployeeTable 
          results = {this.state.results}/>

          {console.log(Form.name)}          
        </div>

    )
  }
}

// function App() {
//   return  <EmployeeTable />;
// }

export default App;
