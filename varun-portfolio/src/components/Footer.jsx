import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><FaTwitter/></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><IoLogoInstagram/></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebook /></a></li>
    </ul>
  </footer>
  );
};

export default Footer;
