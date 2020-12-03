import Axios from 'axios'
import {useState, useEffect} from 'react'

function UserList() {

const [joke,setJoke] = useState([])

useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
        (response) => {
            setJoke(response.data)
        })
  });
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    width: "50%"

  };

  return (
     
    <div  >
        {
            joke.map(jok => 
            <h1 style={mystyle} >{jok.name}</h1>
            )
        }
    </div>

  );
}

export default UserList;
