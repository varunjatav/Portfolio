const Contact = () => {
  return (
    <form>
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
        />
        <label className="form-check-label" for="exampleCheck1">
          Web design.
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
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
        />
      </div>
      <h6>Approximat Budget.</h6>
      <div className="mb-3 mt-3 ">
        <select name="budget" id="budget" className="form-control">
          <option value="prefer not to say">Prefer not to say.</option>
          <option value="Under 1000">Under ₹ 1000 </option>
          <option value="1000-3000">₹ 1000 - ₹ 3000 </option>
          <option value="3000-5000"> ₹ 3000 - ₹ 5000 </option>
          <option value="5000-10000"> ₹ 5000 - ₹ 10000 </option>
          <option value="Above 10000">Above ₹ 10000 </option>
        </select>
      </div>

      <h6>Project Information or Enquiry.</h6>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Please provide as much information about your project as you can.</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
