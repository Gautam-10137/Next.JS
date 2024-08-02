"use client"
import { useEffect, useState } from "react";

export default function Page(){
   const [products,setProducts]=useState([]);
   useEffect(()=>{
      const fetchData=async()=>{
        const res= await fetch('https://dummyjson.com/products');
        const data= await res.json();
        console.log(data);
        setProducts(data.products);
      }
      fetchData();
   },[]);

   return(
    <div>
      <h1>Items:</h1>
      {products.length>0 && products.map((item,idx)=>(
               <h2 id={idx}> {item.title}</h2>          
      )
      )}

    </div>
   )
}