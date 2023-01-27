import ReactLoading from 'react-loading';
import axios from "axios"
import React, { useEffect, useState } from 'react';

function GitHub(){
    const [isLodading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
       getData(); 
    }, [])

    
    const getData = () =>{
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => {
            console.log(res.data.items);
            setData(res.data.items)
            setIsLoading(false)
         })
    }

    // when submit call loading and get data
    const handleSubmit =(event)=>{
        event.preventDefault();
        setIsLoading(true);
        getData();
    }

    const listUsers = data.map(user => 
        <div className='media d-flex m-4' key={user.id}>
            <a href={user.html_url} className="mr-3 ">
                <img src={user.avatar_url} alt="Generic"  className='mr-3 ' height={64}/>
            </a>

            <div className="media-body">
                <h5>Login: {user.login}</h5>
                <p>ID: {user.id}</p>
            </div>
        </div>
)



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" onChange={event => setSearchTerm(event.target.value)} className="m-4"/>
                <button className='btn btn-primary m-4' type='submit'>Submit</button>
            </form>

            <h3>GitHub Users Results</h3>
            { isLodading && <ReactLoading type='spinningBubbles' color='red' />}
            <p>{listUsers}</p>
        </div>
    )
}



export default GitHub;