const Skills = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col d-flex flex-column text-center" >
        <img src="/html.png" alt="html" width="200px" height="200px"  className="m-auto"/>
        <h1>HTML</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/css.png" alt="css" width="200px" height="200px" className="m-auto" />
        <h1>CSS</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/javascript.png" alt="javascript" width="200px" height="200px" className="m-auto"/>
        <h1>Javascript</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/react.png" alt="react" width="200px" height="200px" className="m-auto"/>
        <h1>React</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/redux.png" alt="redux" width="200px" height="200px" className="m-auto"/>
        <h1>Redux</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/bootstrap.png" alt="bootstrap" width="200px" height="200px" className="m-auto"/>
        <h1>Bootstrap</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/tailwind.png" alt="tailwind" width="200px" height="200px" className="m-auto"/>
        <h1>Tailwind</h1>
      </div>

      <div  className="col d-flex flex-column text-center">
        <img src="/npm.png" alt="npm" width="200px" height="200px" className="m-auto"/>
        <h1>NPM</h1>
      </div>
    </div>
  );
};

export default Skills;
