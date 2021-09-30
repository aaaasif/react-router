import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends, setfriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setfriends(data));
    }, [])
    return (
        <div>
            <h1>I have {friends.length} friends.</h1>
        </div>
    );
};

export default Friends;