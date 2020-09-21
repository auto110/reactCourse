import React from "react"

const MyList = () => {
    const data = [1, 2, 3, 4, 5];

    const rows = data.map(
        (number, index)=> <li key={index}> Listitem {number}</li>
    );

    return (
        <div>
            <ul>{rows}</ul>
        </div>
    );
};

export default MyList;