import React, { useState } from 'react';
import './App.css';
// 使用第三方table组件
// import ReactTable from "react-table";
// import 'react-table/react-table.css';

function GithubApp(){
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');

    const fetchData = () => {
        // REST API call comes here
        const url = `https://api.github.com/search/repositories?q=${keyword}`;
        fetch(url)
        .then(response => response.json()) 
        .then(responseData => {
            setData(responseData.items); 
        }); 
    }
        
    const handleChange = (e) => {
        setKeyword(e.target.value);
    } 

   const tableRows = data.map((item, index) => 
        <tr key={index}>
            <td>{item.full_name}</td>
            <td><a href={item.html_url}>{item.html_url}</a></td>
        </tr>
    ); 

    const columns = [
        {
            Header: 'Name',  // Header of the column  
            accessor: 'full_name' // Value accessor
        },
        {
            Header: 'URL',
            accessor: 'html_url',
        },
        {
            Header: 'Owner',
            accessor: 'owner.login',
        }
    ]

    return(
            <div className="App">
                <input type="text" onChange={handleChange} />
                <button onClick={fetchData} value={keyword} >fetch</button>
                <table>
                    <tbody>{tableRows}</tbody>
                </table>

                {/* Add the React Table component to our return statement */}
                {/* <ReactTable data={data} columns={columns}/> */}
            </div>
        )
    };

export default GithubApp;