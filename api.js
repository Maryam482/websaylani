import Axios from 'axios';
import React,{useState, useEffect} from 'react';

function Api() {
    const [recipes, setRecipes]  = useState([])
    //useEffect(callback func, variable)
    useEffect(()=>{
     console.log('i am in useEffect');
     Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
     console.log(res)
     setRecipes(res.data.meals[0])
     });
     },[])
    console.log(recipes)
    return (
        <div>
       <h1>{recipes.strCategory}</h1>
       <p>{recipes.strMeal}</p>
       <h6>{recipes.idMeal}</h6>
        </div>
    )
}

export default Api
