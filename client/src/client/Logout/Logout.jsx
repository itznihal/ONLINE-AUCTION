import React, { useEffect  , useContext } from 'react'
import { useHistory } from 'react-router-dom';
import  {UserContext} from '../../App';


const Logout = () => {

  const {state, dispatch} = useContext(UserContext);

// CLICKED ON LOGOUT -> CALL FUNCTION WHICH DELETES CURRENT COOKIES -> IF COOKIES NOT EXPIRED
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
    dispatch({type:"USER" , payload:false});

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