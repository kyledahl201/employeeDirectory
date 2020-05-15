import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      copyEmployees: []

    }

  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
      .then ((results) => {
        console.log(results.data)
        this.setState({ employees: results.data.results, copyEmployees: results.data.results })
      })

  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.copyEmployees.map(function(emp){
            return(   <tr>

              <td>{emp.name.first}</td>
              <td>{emp.name.last}</td>
              <td>{emp.cell}</td>
              <td>{emp.email}</td>
            </tr>)
          })}
          <tr>

            <td> </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

        </tbody>
      </table>

    )

  }



}

export default App;
