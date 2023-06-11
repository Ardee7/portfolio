import React from "react";

function Section(props) {
  return (
    <div className="container" style={{ backgroundColor: props.bgColor }}>
      {props.children}
    </div>
  );
}

export default Section;
