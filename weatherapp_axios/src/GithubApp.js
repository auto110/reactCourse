import React, { Component } from 'react';
import './App.css';

class GithubApp extends Component{
    constructor(){
        const [data, setData] = useState([]);
        const [keyword, setKeyword] = useState('');
    }

    fetchData = () => {
        // REST API call comes here
    }
        
    handleChange = (e) => {
        setKeyword(e.target.value);
    } 

    render(){
        return(
            <div className="App">
                <input type="text" onChange={handleChange} />
                <button onClick={fetchData} value={keyword} >fetch</button>
            </div>
        )
    };
}