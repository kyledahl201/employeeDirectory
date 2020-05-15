import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends React.Component{



constructor(props)
{super(props)
  this.state = {
    employees: [],
    copyEmployees: []

  }

}

componentDidMount(){
  axios.get("https://randomuser.me/api/?results=200&nat=us")
  .then(function(results){
    console.log(results.data)
    this.setState({employees: results.data, copyEmployees: results.data})
  })

}

render(){
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

  )

}



}

export default App;
