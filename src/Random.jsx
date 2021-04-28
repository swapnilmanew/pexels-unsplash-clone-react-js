import React from "react";

const Random = (props) => {
  return (
    <>
      {props.state.map((item) => {
        return (
          <>
            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3">
              <div className="card">
                <a href={item.download_url}>
                  <img src={item.download_url} className="card-img-top" />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Random;
