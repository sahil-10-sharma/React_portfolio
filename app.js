import React from "react";
import Pages from "./pages/index";
import { useEffect } from "react";
require ('/styles/layout.css');
import axios from "axios";
import Head from 'next/head'
require ('/public/Images/effect-js.min.css');



export default function App({ Component, pageProps }) {
  const [skill, setSkill] = React.useState(null);

  useEffect(() => {
    getSkill();
    
    // getPost();
  }, []);


  const getSkill = async () => {
    const response = await axios.get(Url);
    setSkill(response.data);
  };

if(!skill)
return "no post"
  
  return ( 
 
    <Pages {...pageProps}/>
  
  )



}



export default App;
