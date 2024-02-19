import CondoCard from "@/components/CondoCard";
import Link from "next/link";
import PreconSchema from "@/components/PreconSchema";
import BottomContactForm from "@/components/BottomContactForm";

async function getData(city) {
  const res = await fetch(
    "https://api.homebaba.ae/api/preconstructions-city/" + city + "?page_size=10",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getCities() {
  const res = await fetch("https://api.homebaba.ae/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCitiesandProjects() {
  const res = await fetch("https://api.homebaba.ae/api/all-precons", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home(props) {
  const data = await getData("dubai");
  let cities = await getCities();
  
  const filteredprojects = (value) => {
    return dropdown_cities.filter((city) => {
      return value.includes(city.name);
    });
  };

  return (
    <>
     <div>
      <div id="hero">
       
        <div className="container">
          <div className=" hero-container">
            <div>
              <h1 className="main-titlee pb-0  mb-0 mt-2 mt-md-0 ">
                UAE's leading Off Plan Property Platform
              </h1>
              <p className="titlee text-center fw-medium mt-0 pt-4 text-white">
                Find 100+ off plan properties in United Arab Emirates
              </p>
              <div className="text-center pt-5">
                <p className="fs-3 fw-normal fw-bold text-white text-center mb-0">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" mx-md-5 mx-2">
      <div className="pt-md-5 mt-md-5">
          <div className="d-flex pt-5 justify-content-center align-items-center text-center">
            <div className="d-flex flex-column mb-3 ">
              {" "}
              <h2 className="fw-mine  accent-line fs-2  ">
                Explore Properties by City
              </h2>
              <p className="">
                Uncover Real Estate Marvels in Your Favorite Cities with our
                Exclusive Listings.
              </p>
            </div>
            
          </div>
          <div className="row row-cols-md-4 row-cols-sm-2 row-cols-2 gx-4">
           <Link href ={"/off-plan-properties/dubai"} className="text-decoration-none"> <div className="col ">
              <img
                src="cities/dubai.webp"
                alt="Dubai"
                className="img-fluid rounded-mine cityimghei"
              />
              <div class="img-text">
                <p class="img-text">Dubai</p>
              </div>
            </div></Link>
            
            <Link  href ={"/off-plan-properties/ajman"} className="text-decoration-none"><div className="col ">
              {" "}
              <img
                src="cities/ajamn.webp"
                alt="Ajman"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Ajman</p>
              </div>
            </div></Link>
           <Link href ={"/off-plan-properties/abu-dhabi"} className="text-decoration-none"> <div className="col ">
              <img
                src="cities/abu-dhabi.webp"
                alt="Abu Dhabi"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Abu Dhabi</p>
              </div>
            </div>
            </Link>
            <Link href ={"/off-plan-properties/sharjah"} className="text-decoration-none"><div className="col ">
              {" "}
              <img
                src="cities/sharjah.webp"
                alt="Sharjah"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Sharjah</p>
              </div>
              
            </div></Link>
           <Link href ={"/off-plan-properties/ras-al-kjaimah"} className="text-decoration-none"> <div className="col ">
              {" "}
              <img
                src="cities/ras-al-khaimah.webp"
                alt="Ras Al Khaimah"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Ras Al Khaimah</p>
              </div
              >
            </div></Link>
            <Link href ={"/off-plan-properties/umm-al-quwain"} className="text-decoration-none"><div className="col ">
              {" "}
              <img
                src="cities/umm-al-quwain.webp"
                alt="Umm Al Quwain"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Umm Al Quwain</p>
              </div>
              
            </div></Link>
           <Link href ={"/off-plan-properties/al-ain"} className="text-decoration-none"> <div className="col ">
              {" "}
              <img
                src="cities/al-ain.webp"
                alt="al-ain.webp"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Al Ain</p>
              </div
              >
            </div></Link>
            <Link href ={"/off-plan-properties/fujairah"} className="text-decoration-none"><div className="col ">
              {" "}
              <img
                src="cities/fujairah.webp"
                alt="al-ain.webp"
                className="img-fluid rounded-mine cityimghei"
              />{" "}
              <div class="img-text">
                <p class="img-text">Fujairah</p>
              </div>
              
            </div></Link>
          </div>
        </div>

     <section className="pt-md-5">
     <div className="d-flex pt-5 mt-5 justify-content-center align-items-center text-center">
          <div className="d-flex flex-column mb-3 ">
            {" "}
            <h2 className="fw-mine   accent-line fs-2 ">
              Check out Off-Plan Properties in Dubai
            </h2>
            <p className="">
              Check out our recent properties for the best deal on homes, appartments
              and commercial spaces.
            </p>
          </div>
          
        </div>
       
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 gy-4 gx-3 gx-lg-3">
            {data.preconstructions &&
              data.preconstructions.slice(0, 8).map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <CondoCard {...item} />
                </div>
              ))}
          </div>
     </section>

        {/* cities */}

       
        <div className="py-md-5 mt-md-5 ">
          <section className="clients section-bg mb-5">
            <div className="container">
              <div
                className="row d-flex justify-content-between align-items-center"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className=" text-center pb-4 ">
                  <h1 className="pt-5 mt-4 pb-2  fw-bold fs-1 mb-0">
                    Trusted Homes from Credible Builders
                  </h1>
                  <p className="">
                    Building Dreams: Your Trusted Destination for Quality Homes
                    from Credible Builders
                  </p>
                </div>
                <div className="row row-cols-3 row-cols-lg-4 d-flex justify-content-center align-items-center">
                  <div className="col  ">
                    <img
                      src="/builders/OP_logo-01.webp"
                      alt="EMAAR"
                      className=" clientshei img-fluid  rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/43.png"
                      alt="Al Habtoor City"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/OP_logo-03.webp"
                      alt="Damac"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/OP_logo-08.webp"
                      alt="Dubai Properties"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    <img
                      src="/builders/OP_logo-04.webp"
                      alt="Nshama"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/OP_logo-09.png"
                      alt="Azizi"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/OP_logo-16.webp"
                      alt="Meraas"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                  
                  <div className="col  ">
                    {" "}
                    <img
                      src="/builders/17.webp"
                      alt="Dubai South"
                      className=" clientshei img-fluid rounded-mine "
                    />
                  </div>
                 
                </div>
              </div>
            </div>

          
          </section>

          <div className="py-5 my-5" id="mycontact">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <img
                  src="/contact-bottom-2.png"
                  alt="dce"
                  className="img-fluid w-25 w-smm-50 mb-3"
                />
              </div>
              <h2 className="fw-mine text-center px-md-4 fs-4">
                Contact homebaba.ca  Today
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <BottomContactForm
                    proj_name="All"
                    city="Preconstruction Homes Page"
                  ></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
