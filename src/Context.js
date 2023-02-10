import React, { useState,useEffect,useContext } from 'react';
import { useCallback } from 'react';


const AppContext = React.createContext();

const AppProvider = ({children}) => {
const KEY = 'F0krHXsfEQaHJ6pBFFlHaT9JjCNItua-zx4J2wk_iu0';
// const SECRET_KEY = 'tCHx9zQ7DPOw2dppGDhixe1SnzNCSyaKEyH3iDpT1Fw';


    const [loading,setLoading]= useState(true);
    const [searchterm,setSearchTerm]= useState('random');
    const [imageData,setimageData]=useState([]);
    const [totalPage,setTotalPage]=useState(0);
    const [pageNumber,setPageNumber] = useState('1');

    const fetchImages =useCallback( async ()=>{
        setLoading(true);
        try{
            const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${searchterm}&client_id=${KEY}`);
            const data = await response.json();
            if(data){
                setimageData(data.results);
                setTotalPage(data.total_pages);
                setLoading(false);
            }
        }catch(e){
            console.log(e);
        }
    });

    useEffect(   ()=>{
        fetchImages();
    }
    ,[searchterm,pageNumber]);

  return (
    <AppContext.Provider value={{loading,setSearchTerm,imageData,totalPage,setPageNumber,pageNumber}}>
                {children}
         </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }

