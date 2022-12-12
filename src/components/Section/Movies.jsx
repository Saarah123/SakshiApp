import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "../Pagination/Pagination";
import "../styles/movies.css";

export const Movies = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(8);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json"
      )
      .then(({ data }) => {
        setData(data.articles);
        console.log(data);
      });
  };
  return (
    <div id="main_container">
    <p style={{color:"gray"}}>News / Movies</p>
    <hr />
    <h1>Movies</h1>
    <hr />
      {data.slice(pagination.start, pagination.end).map((data) => (
        <>
          <div id="data-container" key={data.id}>
            <img src={data.urlToImage} alt="" />
            <div className="inside-main">
              <h2>{data.title}</h2>
              {data.description}
            </div>
          </div>
        </>
      ))}
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={data.length}
      ></Pagination>
    </div>
  );
};
