import React, {useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: 'John', lastName: 'Johnson'});
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Johnson');
    //setFirstName('Jim');
    //setLastName('Palmer');
    
    // Called after every render
    useEffect(() => {
        console.log('Counter value is now ' + count)
        console.log("Now the name:" + name.lastName + " " + name.firstName)
    });
    
    return (
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick = {() => setName({firstName: 'Jim', lastName: 'Palmer'})}></button>
        </div>
    );
}

export default Counter;