import React, {useState, useEffect} from 'react';

function GithubUser({login}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, [login]);

    if(data) {
        return (
        <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} width={100} alt="cannot display"/>
        </div>
        )
    }
    return null;
}

export default GithubUser;