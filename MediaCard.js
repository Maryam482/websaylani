import React from 'react';

const MediaCard = ({title, body, imageUrl}) => {
return(
  <div style ={ {width:'500px', margin:'5px auto', border:'2px' , textAlign:"center"}}>
      <h1 >{title}</h1>
  <img src={imageUrl}/>
  <p>{body}</p>
  </div>
    
)
}
export default MediaCard;