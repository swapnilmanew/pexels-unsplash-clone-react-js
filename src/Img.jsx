import React from "react";

const Img = (props) => {
  return (
    <>
      {props.state.map((item) => {
        return (
          <>
            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="card">
                <a href={item.download_url}>
                  <img
                    src={item.download_url}
                    alt={item.download_url}
                    className="card-img-top"
                  />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Img;
