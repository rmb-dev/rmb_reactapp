import React, { Component, useState, useEffect } from 'react';
import './App.css';


const API = 'https://icanhazdadjoke.com';

function useDad() {
  const [data, setData] = useState({});
  async function fetchJoke() {
    const res = await fetch(API, {
    headers: {
             Accept:'application/json'
    }
    });
    const data = await res.json();
    setData(data);
    }
  useEffect(() => {
    fetchJoke();
    },[] )
  return [data, fetchJoke];
}

const Joke = () => {
  const [data, refetch] = useDad();
  
  console.log(data)
  return (
    <div>
     <p>{data.joke}</p>
      <button onClick={refetch}>Another</button> 
    </div>
    )
}


export default useDad;
