import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {

  const baseURL ='https://www.instagram.com/';
  const instagramAccont = 'matheus_mprado'
  const profileURL = `${baseURL}${instagramAccont}`;

  const [instagramData,setInstagramData] = useState([]);

  async function getInstagram(){
    await axios.get(`${profileURL}/channel/?__a=1`)
  .then(response => console.log(response.data) )
  .catch(err => console.log(err))
  }

  useEffect(()=>{
    getInstagram()
  },[])

  return (
    <>
      <h1>teste</h1>
    </>
  )
}
