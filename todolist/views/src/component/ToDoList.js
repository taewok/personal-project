import React, {useRef, useState } from "react";
import "../css/ToDoList.css";
import { useLocation } from "react-router-dom";

const ToDoList = () => {
  const location = useLocation();
  const userId = location.state.session;

  const listAddInput = useRef();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();

  const [text, setText] = useState("");
  const textOnChange = (text) => {
    setText(text.target.value);
  };
  const [nextNum, setNextNum] = useState(1);
  const [toDoList, setToDoList] = useState([]);

  const listDelete = (num) => {
    setToDoList(toDoList.filter((listNum) => listNum.num !== num));
  };
  const onClickBlockBtn = () => {
    const btn = document.querySelector("#list_add_block_btn");
    const div = document.querySelector("#list_add_box");
    if (btn.innerHTML === "+") {
      btn.innerHTML = "ㅡ";
      btn.style.fontSize = "25px";
      btn.style.fontWeight = "bold";

      div.style.display = "block";
      div.style.display = "flex";
      listAddInput.current.focus();
    } else {
      btn.innerHTML = "+";
      btn.style.fontSize = "40px";
      btn.style.fontWeight = "";

      div.style.display = "none";
    }
  };
  const listLiOnClick = (num) => {
    setToDoList(
      toDoList.map((list) =>
        list.num === num ? { ...list, check: !list.check } : list
      )
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    listAddInput.current.focus();
  };
  return (
    <>
      <div className="ToDoList_back">
        <div className="date_text">
          <p className="user_id_text">{userId}님의</p>
          <p className="year_text" onClick={()=>{
            console.log(userId)
          }}>{year}</p>
          <div className="month_day_text_box">
            <p className="month_text">
              {month}
              <span>Month</span>
            </p>
            <p className="day_text">
              {day}
              <span>Day</span>
            </p>
          </div>
          <p className="calendar_text">일정</p>
        </div>
        <form
          className="list_add_box"
          id="list_add_box"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            className="list_add_input"
            value={text}
            onChange={(text) => textOnChange(text)}
            ref={listAddInput}
          />
          <button
            className="list_add_btn"
            onClick={() => {
              toDoList.push({
                num: nextNum,
                title: text,
                check: false,
              });
              setNextNum(nextNum + 1);
            }}
          >
            +
          </button>
        </form>
        <div className="list_box">
          <ul className="list_ul">
            {toDoList.map((list) => (
              <div className="list_li_div" key={list.num}>
                <input
                  checked={list.check}
                  onClick={() => listLiOnClick(list.num)}
                  type={"checkbox"}
                  className="list_checkBox"
                  id="list_checkBox"
                />
                <div className="list_li_delete" id="list_li_delete">
                  <li
                    className="list_li"
                    id="list_li"
                    onClick={() => listLiOnClick(list.num)}
                  >
                    {list.title}
                  </li>
                  <div
                    className="list_delete"
                    onClick={() => listDelete(list.num)}
                  >
                    ✖
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <button
          className="list_add_block_btn"
          id="list_add_block_btn"
          onClick={() => onClickBlockBtn()}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ToDoList;
