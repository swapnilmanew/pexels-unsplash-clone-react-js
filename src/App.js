import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Random from "./Random";
import Img from "./Img";

export default function App() {
  const [query, setQuery] = useState("");

  const [random, setRandom] = useState([]);

  const [allImg, setAllImg] = useState([]);

  const [show, setShow] = useState(true);

  const getRandomImgs = async () => {
    const randomImg = await fetch(`https://picsum.photos/v2/list`);

    const jsonRandom = await randomImg.json();
    setRandom(jsonRandom);
    console.log(jsonRandom);
  };

  useEffect(() => {
    getRandomImgs();
  }, []);

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  const onbtnclick = async () => {
    setShow(false);
    const API_KEY = "";
    const imgs = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}`
    );

    const json = await imgs.json();

    setAllImg(json.results);
    console.log(allImg);
  };
  return (
    <>
      <div className="container-fluid header">
        <div className="col-12 col-sm-10 col-md-10 m-auto">
          <h1 className="pt-5 text-center font-weight-bold display-5">
            The best free stock photos & videos shared by talented creators.
          </h1>
          <div className="row mt-5">
            <div className="col-11 col-sm-6 col-md-8 m-auto d-flex justify-content-space-between">
              <input
                type="text"
                onChange={inputChange}
                className="form-control py-4"
                value={query}
                placeholder="Search Images"
              />

              <button onClick={onbtnclick} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {show ? <Random state={random} /> : <Img state={allImg} />}
      </div>
    </>
  );
}
