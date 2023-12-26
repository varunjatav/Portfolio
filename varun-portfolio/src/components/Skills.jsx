const Skills = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <img src="/html.png" alt="html" width="200px" height="200px"  className="m-auto"/>
      </div>

      <div className="col">
        <img src="/css.png" alt="css" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/javascript.png" alt="javascript" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/react.png" alt="react" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/redux.png" alt="redux" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/bootstrap.png" alt="bootstrap" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/tailwind.png" alt="tailwind" width="200px" height="200px" />
      </div>

      <div className="col">
        <img src="/npm.png" alt="npm" width="200px" height="200px" />
      </div>
    </div>
  );
};

export default Skills;
