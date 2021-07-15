import React from "react";

function Image(props) {
  const { title, explanation, date , url } = props.data;

  if (!url) return <h3> Loading... </h3>;
 
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent: 'center', width: "100%", padding: '1vh 2vw' }}>
    <div style={{width: '25%', padding:'25px'}}>
     <img style={{width:'100%'}} src={url} alt="of the day"/>
     </div>   

   <div style={{width: '50%', padding:'25px'}}>
     <h2>{title}</h2>
     <h3>{date}</h3>
     <p>{explanation}</p>
   </div>
   </div>
  );
}

export default Image;
