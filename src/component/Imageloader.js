import { useGlobalContext } from "../Context.js";
import Paginate from "./Paginate.js";

import Image from "./Image.js";
 
const Imageloader = ()=>{
  const {imageData} = useGlobalContext();

 

    return(
      <div class="container-fluid">
    <div class="px-lg-5">
  
      <div class="row">
        
       {
        imageData.map((val)=>{
          return  <Image imageProp={val} key={val.id} />
               
        })

       }
        
  
      </div>
      <div class="py-5 text-right">
              <Paginate />
     
      </div>
    </div>
  </div>
  
   );
  }
  
  export default Imageloader;