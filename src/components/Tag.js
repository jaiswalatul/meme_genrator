import React, { useEffect, useState } from 'react';
import axios from'axios';
import Spinner from './Spinner'
import Usegif from '../hoooks/Usegif';


//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

 const Tag = () => {
 
     const [tag,settag]=useState('car');
    

    // const [gif,setgif]=useState('');
    // const [loading,setloading]=useState('false');

    // async function fetchdata(){
    //     setloading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${'JQbczbDYJiPjeJleoWzeC2OaigxvInIb'}&tag=${tag}`;
    //     const {data}=await axios.get(url);
    //     //console.log(output);
    //     const imagesource=data.data.images.downsized_large.url;
    //     setgif(imagesource);
    //     setloading(false);

    // }

    //const {gif,loading,fetchdata}=Usegif(tag);

//    useEffect( ()=>{
//        fetchdata(tag);
//    },[] )

const {gif,loading,fetchdata}=Usegif(tag);

   function changehandler(e){
       settag(e.target.value)
   }

    function clickhandler(){
         fetchdata(tag);
    }



  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col
     items-center gap-y-5 mt-15px  '>
       <h1 className='mt-[15px] text-2xl underline uppercase font-bold ' >Random {tag} Gif</h1>

       {
        loading?(<Spinner/>):(<img src={gif} width={450}/>)
       }
    
      <input
      className='w-10/12 text-xl py-2 rounded-lg mb-[3px]'
      onChange={changehandler}
      value={tag}
      />

        
        <button onClick={clickhandler}
        className=' w-10/12 bg-yellow-500  text-xl py-2 rounded-lg mb-[20px] '
        > 
            Generate
        </button>
    </div>
  )
}

export default Tag;
