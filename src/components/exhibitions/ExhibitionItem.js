import React from "react";
import "../../styles/pages/ExhibitionPage.css";
const ExhibitionItem = (props) => {
  const { title, subtitle, description, image } = props;
  return (
    <div className="exhibition">
      <div className="exh-info">
        <h2>{title}</h2>
        <h4>{subtitle} </h4>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="exh-imgs">
        {" "}
        <img src={image} className="exh-img" alt="" />
      </div>
    </div>
  );
};
export default ExhibitionItem;
