import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Discover your perfect home with NestQuest. Whether you're buying,
              selling, or renting, our dedicated team of experts is here to
              guide you through every step of the process. Explore our extensive
              listings and find your dream property today!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="service">
            <p>Our Services</p>
            <ul>
              <li>
                Buying: Find your ideal home with our comprehensive listings and
                expert guidance.
              </li>
              <li>
                Selling: Get the best value for your property with our marketing
                strategies and market insights.
              </li>
              <li>
                Renting: Explore a wide range of rental properties that fit your
                lifestyle and budget.
              </li>
              <li style={{ paddingBottom: "20px" }}>
                Property Management: Professional management services to keep
                your investment property in top condition.
              </li>
            </ul>
          </div>

          <div className="feat">
            <h2>Find Best Related Properties</h2>
            <div className="pic">
              <div className="i">
                <img
                  src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601&w=929&h=523&vtcrop=y"
                  alt=""
                />
              </div>
              <div className="i">
                <img
                  src="https://i2.au.reastatic.net/800x600/42f1978c99dabd901ba214ef7403b7bdb1f0a000f252bfaa308fbfcd68ad00c5/main.jpg"
                  alt=""
                />
              </div>
              <div className="i">
                <img
                  src="https://propertyaffaire.com/dlfcrestgurgaon/images/gallery/sample-flats/area-3898-sqft/sample-flat-3898-im-01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="info1">
            <div className="img1">
              <img
                src="https://img.freepik.com/free-vector/realtor-assistance-illustration_52683-46786.jpg?t=st=1717655642~exp=1717659242~hmac=42b9ea0512922d814c5084584101c9c8106c51dacc380a2aa8e23492fd4d0f05&w=996"
                alt=""
              />
            </div>
            <div className="para">
              <p className="next">About NestQuest</p>
              <p>
                At NestQuest, we are passionate about helping you find the
                perfect place to call home. With years of experience in the real
                estate market, our knowledgeable agents are committed to
                providing exceptional service and personalized solutions. We
                believe in building lasting relationships with our clients based
                on trust, integrity, and results.
              </p>
            </div>
          </div>

          <h1>About us</h1>
        </div>

        <div class="foot" style={{ backgroundColor: "#DEDFDE", overflow: "hidden" }}>
          <footer class="py-5">
            <div class="container">
              <div class="row">
                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">
                        Email address
                      </label>
                      <input
                        id="newsletter1"
                        type="text"
                        class="form-control"
                        placeholder="Email address"
                      />
                      <button class="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2024 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg class="bi" width="24" height="24">
                        <use xlink:href="#twitter" />
                      </svg>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg class="bi" width="24" height="24">
                        <use xlink:href="#instagram" />
                      </svg>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg class="bi" width="24" height="24">
                        <use xlink:href="#facebook" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;
