import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../css/Result.css";
const Result = ({ posts }) => {
  const loaction = useLocation();
  console.log(loaction);
  return (
    <ul className="productDiv">
      {posts.map((list, index) => (
        <li key={index}>
          <a
            href={list.url}
          >
            <img src={list.thumbnail}></img>
          </a>
          <div className="book-info">
            <span className="book-title">{list.title}</span>
            <span className="book-authors">작가: {list.authors}</span>
            <span className="book-publisher">출판사: {list.publisher}</span>
            <div className="book-saleprice-price">
              <span className="book-saleprice">{list.sale_price}원</span>
              <span className="book-price">{list.price}원</span>
            </div>
            <p className="book-contents">{list.contents}...</p>
          </div>
        </li>
      ))}
      <Outlet />
    </ul>
  );
};

export default Result;
