"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

//LIB
import Link from "next/link";
import SearchSuggest from "./SerachSuggest";

const Navbar = ({ cities, dropdown_cities }) => {
  const [cityname, setCityname] = useState("");
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if(window.scrollY >= 90){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  useEffect(() =>{
    if(window){
      window.addEventListener('scroll', changebackground);
    }
  },[])

  const filteredprojects = (value) => {
    return dropdown_cities.filter((city) => {
      return value.includes(city.name);
    });
  };
  

  return (
    <div className={navbar ? 'navbar-transparent active': 'navbar-transparent'}>
     <nav className="navbar navbar-expand-sm py-3 py-md-2  mb-3 sticky-top">
      <div className="container-fluid justify-content-start">
        <Link href="/" className="logo">
          <span className=" fw-bold" >Homebaba.ae</span>
        </Link>
        <div className="input-group input-group-search me-2 me-md-0">
          {/* <SearchBar changeCity={setCityname} cities={cities} /> */}
          <SearchSuggest cities={cities} />
          {/* <Link
            href={"/off-plan-properties/" + cityname.toLowerCase()}
            className="d-none d-md-inline"
          >
            <button
              className="input-group-text btn bg-light2 bg-lh mybtn d-block py-search"
              type="button"
              aria-label="Search Button"
            >
              <svg
                aria-hidden="true"
                className="svg"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
              >
                <path
                  d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z"
                  fill="#000000"
                ></path>
              </svg>
            </button>
          </Link> */}
        </div>
        <button
          className="navbar-toggler d-lg-none ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            loading="lazy"
            src="https://img.icons8.com/material-two-tone/24/000000/menu.png"
            width="24px"
            height="24px"
            alt="Navbar toggler icon"
          />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 align-items-center align-items-md-center">
            <li className="nav-item dropdown dropdown-fullwidth">
              <button
                className="nav-link dropdown-toggle align-items-center d-flex shadow-lg fw-500 text-dark me-3 px-2"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Cities
                <img
                  src="/dropdown.svg"
                  alt="dropdown icon"
                  className="img-fluid dropdown-nav-icon ms-1"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-end border-0 show"
                data-bs-popper="static"
              >
                <div className="container">
                    <div className="row row-cols-md-2 row-cols-2">
                      {cities &&
                        cities.map((city) => (
                          <div className="col" key={city.id}>
                            <Link
                              className="dropdown-item"
                              href={`/off-plan-properties/${city.slug}`}
                            >
                              {city.name}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                
              </div>
            </li>
            {/* <li className="nav-item">
              <Link
                href={"/off-plan-properties/calgary/"}
                className="nav-link"
              >
                Calgary's Top Preconstruction
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                href={"/off-plan-properties/builders/"}
                className="nav-link"
              >
                Builders
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#mycontact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item d-flex flex-column">
              <Link
                href="tel:5878872572"
                className="btn my-2 my-sm-0 ms-md-3 d-flex text-dark gap-1"
              >
                <img
                  src="/COA-agent-pic.jpg"
                  alt="agent pic"
                  className="img-fluid img-call-height"
                />
                <span
                  className="d-flex flex-column justify-content-start utility__phone-msg"
                  id="utility__phone-msg"
                >
                  <b id="utility__phone-number text-dark">(587) 887-2572</b>
                  <span className="d-block travel__expert fs-vsmall">
                    Speak to a home expert
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
