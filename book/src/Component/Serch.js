import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Serch.css";

const Serch = ({setBookList}) => {
  const navigate = useNavigate();
  
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://dapi.kakao.com/v3/search/book?query=${text}&target=title&size=50`,
        {
          headers: {
            Authorization: `KakaoAK d53e0c713758ff7ee0753cc2aaacc3eb`,
          },
        }
      )
      .then((data) => {
        setBookList(data.data.documents);
        navigate("result/PageNum", {
          state: {
            list: data.data.documents,
          },
        });
      });
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={text}
          onChange={(text) => {
            setText(text.target.value);
          }}
        />
      </form>
      <Outlet/>
    </>
  );
};

export default Serch;
