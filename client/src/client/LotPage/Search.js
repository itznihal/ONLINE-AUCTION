import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Search = () => {
    let history = useHistory();


    const [keyword , setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();

        if(keyword.trim()){
            console.log(keyword)
          history.push(`/lot/${keyword}`);
        }else{
            console.log(`keyword is not define`);
          history.push("/lot");
        }
      
      };
      

  return (
   <>

<form className='searchBox' onSubmit={searchSubmitHandler}>
            <i className="fa fa-search"></i>
             <input 
             type="text" 
             className="form-control" 
             placeholder="Looking for an Auction ? Search Now"
               onChange={(e) => setKeyword(e.target.value)}
             /> 
             <button className="btn btn-primary" type='submit'   >Search</button>
        </form>   </>
  );
};

export default Search