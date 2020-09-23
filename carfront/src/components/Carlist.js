import React, {component} from 'react'

class Carlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            //We need a state for the cars that are fetched from the REST API.
            cars: []
        }
    }
  
    render() {
      return (
        <div></div>
      );
    }
}

export default Carlist;

