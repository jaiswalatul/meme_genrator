import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Usegif = (tag) => {
const random_url= `https://api.giphy.com/v1/gifs/random?api_key=${'JQbczbDYJiPjeJleoWzeC2OaigxvInIb'}`;
const tagmeme_url= `https://api.giphy.com/v1/gifs/random?api_key=${'JQbczbDYJiPjeJleoWzeC2OaigxvInIb'}&tag=${tag}`;

   
    const [gif,setgif]=useState('');
    const [loading,setloading]=useState('false');

    async function fetchdata(tag){
        setloading(true);
        //const url=`https://api.giphy.com/v1/gifs/random?api_key=${'JQbczbDYJiPjeJleoWzeC2OaigxvInIb'}`;
        const {data}=await axios.get(tag? (tagmeme_url) :(random_url));
        //console.log(output);
        const imagesource=data.data.images.downsized_large.url;
        setgif(imagesource);
        setloading(false);

    }

   useEffect( ()=>{
       fetchdata('car');
   },[] )




  return {gif,loading,fetchdata}
 
}

  

export default Usegif;
