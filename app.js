import axios from "axios"; 

async function getData(idNumber){
    const {data : userId} = await ( axios("https://jsonplaceholder.typicode.com/users/"+ idNumber));
    console.log(userId)
    const {data : userPost} = await(axios("https://jsonplaceholder.typicode.com/posts/"+ idNumber));
    console.log(userPost)
}

export default getData;
