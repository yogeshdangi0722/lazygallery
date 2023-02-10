import React from 'react';
import { useGlobalContext } from '../Context';

const Searchbar = () => {

    const backProp= {
        backgroundImage: `url('https://mdbootstrap.com/img/new/standard/city/041.jpg')`,
        backgroundSize: "cover",
        height: '80vh',
        backgroundRepeat:'no-repeat',
        marginBottom:'15px',
      }

const {setSearchTerm} = useGlobalContext();

      

  return (
    <div class="bg-image mw-100 d-flex justify-content-center align-items-center" 
            style={backProp}>
           <input class="form-control w-75" type="text" placeholder="Search Here" onChange={(e)=>{setSearchTerm(e.target.value)}} />
    </div>
    )
}

export default Searchbar