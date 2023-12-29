import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
const Projects = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: "url('/black-pearl.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              {/* <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3> */}
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
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: "url('/weather-app.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <ul className="d-flex list-unstyled mt-auto">
                <a href="https://github.com/varunjatav/weather-app"
                 className="text-decoration-none">
                <li className="d-flex align-items-center text-white me-3">
                  <FaGithub />
                  <small>Github</small>
                </li>
                </a>
                <a href="https://658ea8986ca12d9c5896be81--incredible-haupia-446af4.netlify.app/"
                 className="text-decoration-none">
                <li className="d-flex align-items-center text-white">
                  <BiLogoNetlify />
                  <small>Deploy</small>
                </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Another longer title belongs here
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
