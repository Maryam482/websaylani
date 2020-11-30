import Axios from 'axios';
import React,{useState,useEffect} from 'react';

function Api1() {
    const[Post, setPost] = useState([])
    useEffect(()=>{
        Axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            const arr = res.data.slice(0,10)
            setPost(arr)
        });
    },[])
    console.log(Post)
    const mypost = Post.length >=0 ? (<div>
        {
            Post.map(item =>(
               <> <h1>{item.title}</h1>
                <p>{item.body}</p>
                </>
            ))
        }
    </div>
):(<p>Loading</p>)
   
    return (
    // <div>
    //     {
    //         Post.map(item =>(
    //            <> <h1>{item.title}</h1>
    //             <p>{item.body}</p>
    //             </>
    //         ))
    //     }
    // </div>
    <div>{mypost}</div>

    )
}

export default Api1
