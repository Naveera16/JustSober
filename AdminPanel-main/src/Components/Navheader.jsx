import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Logopng from "../images/justsober.png";
import LogoTextpng from "../images/logo-text.png";

const Navheader = () => {
  const [OldLogo, setOldLogo] = useState(null);

  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
        {/* <img className="logo-abbr" src={Logopng} alt="Logo Abbr" />
        <img className="logo-compact" src={LogoTextpng} alt="Logo Compact" /> */}
        <img className="brand-title" src={Logopng} alt="Brand Title" />
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
