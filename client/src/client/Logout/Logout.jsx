import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Logout = () => {

// TO FETCH LOGOUT FUNCTIONALITY FROM SERVER
// CAN USE -> ASYNC AWAIT , PROMISES ,  AXIOS 
// USING PROMISES

const history = useHistory();

useEffect(() => {
  fetch('/logout' , {

    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"

  }).then( (res) => {
                history.push('/signup' , { replaced:true});
                if(!res.status === 200){
                    const error = new Error(res.error);
                    throw error;
                    
                  }
  }).catch( (err) => {
        console.log(err);
  });


});



  return (
    <>
        <h1>Logout Page From client Side </h1>
    </>
  )
}

export default Logout