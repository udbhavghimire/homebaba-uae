"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = ({ cities }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <footer className="footer mt-5 shadow-lg">
      <div className="container footer-top ">
        <div className=" newsletetrbg">
         <div className="d-md-block d-none">
         <img src="/arrow1.png" className="img-fluid arrow" alt="" />
         <img src="/newsletter-img.png" className="img-fluid nesletter-img" alt="" />
         </div>
         
        <div className="text-center pt-5 ">
          <p className="fs-2 fw-bold">Get Exclusive Preconstruction Updates.</p>
          <p className="textt">
            Be the First to Know! Subscribe to Our Newsletter and Receive Timely
            Updates on Exclusive Preconstruction Sales – Your Gateway to Prime
            Real Estate Opportunities. Stay Informed, Stay Ahead!
          </p>

          <form action="">
            <div className="d-flex textt py-5 ">
              <input
                type="text"
                name="email"
                className="fields mx-2"
                placeholder="email"
              />
              <a
                href=""
                className="btn btn-dark d-flex fw-bold align-items-center"
              >
                Sign Up{" "}
              </a>
            </div>
          </form>
        </div>
        </div>
        <div className="  pt-5 mt-md-5 pt-md-5 ">
          <div className=" footer-links ">
            <h3 className="text-center fw-bold py-4 ">
              {" "}
              Off Plan Properties in UAE
            </h3>
            <div className="footer-listcontainer text-center">
              <ul className="two-column-list text-center">
                <div className="text-center justify-content-center">
                  {/* {cities &&
                  cities.map((city) => (
                    <li key={city.id}>
                      <Link href={`/${city.slug}`}>
                        <span>New construction in {city.name}</span>
                      </Link>
                    </li>
                  ))} */}
                  <div className="row row-cols-md-3">
                    <div className="col">
                      <p>Off Plan Properties in Dubai</p>
                      <p>Off Plan Properties in Abu Dhabi</p>
                      <p>Off Plan Properties in Sharjah</p>
                    </div>
                    <div className="col">
                      <p>Off Plan Properties in Ajman</p>
                      <p>Off Plan Properties in Ras Al Khaimah</p>
                      <p>Off Plan Properties in Umm Al Quwain</p>
                    </div>
                    <div className="col">
                      <p>Off Plan Properties in Al Ain</p>
                      <p>Off Plan Properties in Fujairah</p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 pt-5 ">
        <div className="text-center d-flex justify-content-around align-items-center ">
          <div className="row justify-content-center d-flex justify-content-around align-items-center pt-5">
            <div className="col-lg-6 texttt">
              <a href="/" className="flogo fs-2 fw-bold text-dark text-decoration-none">
                <span>Homebaba.ae</span>
              </a>
              <p></p>
              <p className="">
                Homebaba.ae, your premier destination for off plan properties
                 in UAE. Discover your dream home before it's even built.
                Explore our curated listings and find the perfect
                off-plan properties for your future.
              </p>
              <div className="social-links d-flex justify-content-center mt-4 texttt ">
                <a href="#" className="me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 mt-4 pt-5 pt-lg-0 mt-lg-0 footer-contact">
              <h4>Contact Us</h4>
              <p>4 Robert speck parkway,</p>
              <p>Mississauga, ONTARIO</p>
              <p>Canada</p>
              <p className="mt-2">
                <strong>Phone:</strong> <span>647 527 4970</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@homebaba.ca</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-start text-center py-5">
        <p>
          ©2024 <span>Copyright</span>{" "}
          <strong className="px-1">Homebaba.ae</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;