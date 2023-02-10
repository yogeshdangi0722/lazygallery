import React, { useState } from 'react';
import { useGlobalContext } from '../Context';

const Paginate = () => {
    const {totalPage,pageNumber,setPageNumber} = useGlobalContext();
    

    const [currentPage,setCurrentPage] = useState(1);
    function getPage(val){
      setPageNumber(val);
    }
    
    function nextPage(){
        if(currentPage<totalPage-5){
          setCurrentPage(+currentPage+5);
          getPage(+currentPage+5)
        }
    }

    function prevPage(){
        console.log(currentPage);
        if(currentPage>=6){
          setCurrentPage(+currentPage-5);
          getPage(+currentPage-5);
        }
    }

    

    
  return (
    <>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <button class="page-link" href='javascript:void(0)'  onClick={prevPage}>Previous</button>
    </li>
    <li class="page-item"><button class="page-link" href='javascript:void(0)' onClick={()=>{getPage(currentPage)}}>{currentPage}</button></li>
    <li class="page-item"><button class="page-link" href='javascript:void(0)' onClick={()=>{getPage(+currentPage+1)}}>{+currentPage+1}</button></li>
    <li class="page-item"><button class="page-link" href='javascript:void(0)' onClick={()=>{getPage(+currentPage+2)}}>{+currentPage+2}</button></li>
    <li class="page-item"><button class="page-link" href='javascript:void(0)' onClick={()=>{getPage(+currentPage+3)}}>{+currentPage+3}</button></li>
    <li class="page-item"><button class="page-link" href='javascript:void(0)' onClick={()=>{getPage(+currentPage+4)}}>{+currentPage+4}</button></li>

    <li class="page-item">
      <button class="page-link" href='javascript:void(0)' onClick={nextPage}>Next</button>
    </li>
  </ul>
  </nav>
  <div>
  <h4>Showing {pageNumber} of {totalPage} </h4>
  </div>

  </>

  )
}

export default Paginate