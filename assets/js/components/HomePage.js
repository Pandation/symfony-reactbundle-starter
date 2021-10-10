import React from "react";

const HomePage = (props) => {
  console.log(JSON.stringify(props));

  return (
    <div>
      <h1>Hello you!</h1>
      <p>
        Start to create your components in "./assets/js/components", register
        them in the registration file (you can create multiple files if you
        want, just add them in the ./assets/js/entryPoint.js) then use the
        react-component() extension in your templates like in this exemple.
      </p>
    </div>
  );
};

export default HomePage;
