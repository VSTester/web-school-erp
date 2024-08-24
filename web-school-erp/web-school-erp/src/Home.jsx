import { useState } from 'react'

function Home(type){


if(type==="Student"){
    return(

     
        <div>
            Student 
        </div>
      
    );
}else{
    return(
     
        <div>
            Teacher 
        </div>
      
    );
}
}

export default  Home;