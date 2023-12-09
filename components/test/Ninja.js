import axios from 'axios';
import React from 'react'

export const getData = async ()=>{
    const response = await axios.get('http://127.0.0.1:4000/api/movies')
   //  const data = await response.json()
   console.log(`this is data from server : ${response}`)
    return {
     props : {homePageData:data}
    }
    
  }

 
  
  const Ninja = () => {
    return (
      <div>ninja</div>
    )
  }
  
  export default Ninja