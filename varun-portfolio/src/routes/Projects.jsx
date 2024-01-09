import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
const Projects = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col" style={{ height: "500px" }}>
          <div className="card card-cover h-100 rounded-4 ">
            <div
              className=" overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/black-pearl.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "350px",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <ul className="d-flex list-unstyled mt-auto">
                  <a
                    href="https://github.com/nikhildeora/black-pearl"
                    className="text-decoration-none"
                  >
                    <li className="d-flex align-items-center text-white me-3 gap-2">
                      <FaGithub />
                      <small>Github</small>
                    </li>
                  </a>
                  <a
                    href="https://startling-tulumba-8a76b2.netlify.app/"
                    className="text-decoration-none"
                  >
                    <li className="d-flex align-items-center text-white gap-2">
                      <BiLogoNetlify />
                      <small>Deploy</small>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-4  p-3">
              <div className="border border-dark p-1 rounded fw-bold p-2">
                Javascript
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                HTML 5
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                CSS 3
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                React
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                Firebase-Auth
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{ height: "500px" }}>
          <div className="card card-cover h-100 rounded-4 ">
            <div
              className="overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/weather-app.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "350px",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <ul className="d-flex list-unstyled mt-auto">
                  <a
                    href="https://github.com/varunjatav/weather-app"
                    className="text-decoration-none"
                  >
                    <li className="d-flex align-items-center text-white me-3 gap-2">
                      <FaGithub />
                      <small>Github</small>
                    </li>
                  </a>
                  <a
                    href="https://658ea8986ca12d9c5896be81--incredible-haupia-446af4.netlify.app/"
                    className="text-decoration-none"
                  >
                    <li className="d-flex align-items-center text-white gap-2">
                      <BiLogoNetlify />
                      <small>Deploy</small>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-4  p-3">
             
              <div className="border border-dark p-1 rounded fw-bold p-2">
                HTML 5
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                CSS 3
              </div>
              <div className="border border-dark p-1 rounded fw-bold p-2">
                React JS
              </div>
             
            </div>
          </div>
        </div>

        {/* <div className="col" style={{height: "400px"}}>
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              background: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('/e-commerce.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              
              <ul className="d-flex list-unstyled mt-auto">
                <a href="https://github.com/varunjatav/e-coomerce/tree/main/E-commerce"
                 className="text-decoration-none">
                <li className="d-flex align-items-center text-white me-3">
                  <FaGithub />
                  <small>Github</small>
                </li>
                </a>
                <a href="https://6597ed488b3284009787de86--magnificent-faloodeh-17d228.netlify.app/" 
                 className="text-decoration-none">
                <li className="d-flex align-items-center text-white">
                  <BiLogoNetlify />
                  <small>Deploy</small>
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
