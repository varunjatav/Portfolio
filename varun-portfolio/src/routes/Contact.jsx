import { useRef } from "react";
import emailjs from '@emailjs/browser'


const Contact = () => {
  const nameElement = useRef("");
  const emailElement = useRef("");
  const phoneElement = useRef("");
  const serviceElement = useRef("");
  const siteElement = useRef("");
  const timeElement = useRef("");
  const budgetElement = useRef("");
  const informationElement = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const phone = phoneElement.current.value;
    const service = serviceElement.current.value;
    const site = siteElement.current.value;
    const time = timeElement.current.value;
    const budget = budgetElement.current.value;
    const information = informationElement.current.value;

    const formData = {
      name,
      email,
      phone,
      service,
      site,
      time,
      budget,
      information,
    };

    emailjs.sendForm("service_yldfh7j", "template_0oswapi", formData ,"wRvzwkTevv6UTnjLk" ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    nameElement.current.value = "";
    emailElement.current.value = "";
    phoneElement.current.value = "";
    serviceElement.current.value = "";
    siteElement.current.value = "";
    timeElement.current.value = "";
    budgetElement.current.value = "";
    informationElement.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} id="myForm">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name here..."
          ref={nameElement}
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email here..."
          ref={emailElement}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your phone number here..."
          ref={phoneElement}
          name="phone"
        />
      </div>
      <div className="mb-3">
        <h5>About Your Project</h5>
        <p>Enter as much information about your project as you can.</p>
      </div>
      <h6>Service Required.</h6>
      <div className="mb-3 mt-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          value="web-design"
          ref={serviceElement}
          name="service"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Web design.
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          ref={serviceElement}
          value="web-development"
          name="service"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Web developement.
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Current Site (if you have one)
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your Website.."
          ref={siteElement}
          name="site"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          When will you need the work completed by?
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Please provide days weeks or months.."
          ref={timeElement}
          name="time"
        />
      </div>
      <h6>Approximat Budget.</h6>
      <div className="mb-3 mt-3 ">
        <select
          name="budget"
          id="budget"
          className="form-control"
          ref={budgetElement}
        >
          <option value="prefer not to say">Prefer not to say.</option>
          <option value="Under 1000">Under ₹ 1000 </option>
          <option value="1000-3000">₹ 1000 - ₹ 3000 </option>
          <option value="3000-5000"> ₹ 3000 - ₹ 5000 </option>
          <option value="5000-10000"> ₹ 5000 - ₹ 10000 </option>
          <option value="Above 10000">Above ₹ 10000 </option>
        </select>
      </div>

      <h6>Project Information or Enquiry.</h6>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          ref={informationElement}
          name="information"
        ></textarea>
        <label htmlFor="floatingTextarea">
          Please provide as much information about your project as you can.
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
