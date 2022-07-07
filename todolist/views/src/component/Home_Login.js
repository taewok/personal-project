import React, { useState } from "react";
import "../css/Home_Login.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Home_Login = () => {
  const navigate = useNavigate();
  const [msg,setMsg] = useState(""); 

  const [loginId, setLoginId] = useState("");
  const [loginPwd, setLoginPwd] = useState("");

  const idOnChange = (id) => {
    setLoginId(id.target.value);
  };
  const pwdOnChange = (pwd) => {
    setLoginPwd(pwd.target.value);
  };
  return (
    <>
      <form
        className="Home_Login_form"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("/api/login", {
            id: loginId,
            pwd: loginPwd,
          }).then((res)=>{
            setMsg(res.data.msg)
            if (res.data.msg === "로그인 성공") {
              navigate("/TODoList",{state:{session:res.data.session}});
            }
          })
        }}
      >
        <p className="input_title">아이디</p>
        <input
          className="Home_Login_input"
          id="Home_Login_id_input"
          value={loginId}
          onChange={(id) => idOnChange(id)}
          type={"text"}
          required
        />
        <p className="input_title" id="input_pwd_title">비밀번호</p>
        <input
          className="Home_Login_input"
          id="Home_Login_pwd_input"
          value={loginPwd}
          onChange={(pwd) => pwdOnChange(pwd)}
          type={"password"}
          pattern="^[a-zA-Z0-9]{7,16}$"
        />
        <p id="login_invaild">
          {msg}
        </p>
        <button type={"submit"} className="Home_Login_btn">
          Login
        </button>
        <div className="sub_menu_div">
          <div>
            <Link to="/IdConfirm" className="sub_menu">
              비밀번호 찾기
            </Link>
          </div>
          <p>|</p>
          <div>
            <Link to="/PhoneConfirm" className="sub_menu">
              아이디 찾기
            </Link>
          </div>
          <p>|</p>
          <div>
            <Link to="/register" className="sub_menu">
              회원가입
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Home_Login;
