import axios from "axios"; 

async function getData(){
    const {data : userId} = await ( axios("https://jsonplaceholder.typicode.com/users/1"));
    console.log(userId)
}

export default getData;