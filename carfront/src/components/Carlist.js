import React, {Component} from 'react'

class Carlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            //We need a state for the cars that are fetched from the REST API.
            cars: []
        }
    }
  
    componentDidMount(){
        fetch('http://localhost:8081/api/cars')
        .then((response) => {
            response.json()
        })
        .then((responseData) =>{
            this.setState({
                cars: responseData._embeeded.cars
            })
        })
    }

    render() {
        const tableRows = this.state.cars.map((car, index)=>
            <tr key={index}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.color}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            </tr>
        );
      return (
        <div>
            <tbody>{tableRows}</tbody>
        </div>
      );
    }
}

export default Carlist;

