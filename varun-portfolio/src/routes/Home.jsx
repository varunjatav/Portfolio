import React from "react";

const Home = () => {
  return (
    <main>
      <h1 className="visually-hidden">Heroes examples</h1>

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="public/personal_photo.jpg"
          alt=""
          width="250px"
          height="250px"
          style={{ borderRadius: "100%" }}
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Varun Jatav
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
           Frontend Web Developer
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Download Resume
            </button>
           
          </div>
        </div>
      </div>

      <div className="b-example-divider mb-0"></div>
    </main>
  );
};

export default Home;


