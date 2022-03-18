import getData from "./app.js";
import axios from "axios"; 

//fetch("https://jsonplaceholder.typicode.com/users")
//.then((data) => data.json())
//.then((users) => console.log(users))


async function Data(){
    const {data : userId} = await ( axios("https://jsonplaceholder.typicode.com/users/1"));
    console.log(userId)
}

Data()