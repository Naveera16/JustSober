import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Logopng from "../images/logo.png";
import LogoTextpng from "../images/logo-text.png";

const Navheader = () => {
  const [OldLogo, setOldLogo] = useState(null);

  useEffect(()=>{
    const GetLogo=async()=>{
  try {
  const Response = await fetch("http://localhost:5000/logo")
  const fetchData = await Response.json()
  console.log(fetchData.data)
  if (Response.ok) {
    setOldLogo(fetchData.data[0].Logo)
    
  }
  
  } catch (error) {
    console.log(error)
  }  }
    GetLogo()
  })
  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
        {/* <img className="logo-abbr" src={Logopng} alt="Logo Abbr" />
        <img className="logo-compact" src={LogoTextpng} alt="Logo Compact" /> */}
        <img className="brand-title" src={OldLogo} alt="Brand Title" />
      </Link>

      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default Navheader;
