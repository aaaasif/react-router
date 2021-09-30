import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [user, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h1>I have {user.length} friends.</h1>
        </div>
    );
};

export default Friends;