import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [nameMsg, setNameMsg] = useState("필수 입력란입니다.");
  const [idMsg, setIdMsg] = useState("필수 입력란입니다.");
  const [pwdMsg, setPwdMsg] = useState("필수 입력란입니다.");
  const [rePwdMsg, setRePwdMsg] = useState("필수 입력란입니다.");
  const [phoneMsg, setPhoneMsg] = useState("필수 입력란입니다.");

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");
  const [phone, setPhone] = useState("");

  const nameOnChange = (name) => {
    setName(name.target.value);
  };
  const idOnChange = (id) => {
    setId(id.target.value);
    if (id.target.value.length > 0) {
      setIdMsg("특수문자가 포함되지 않은 5자~16자 이내로 입력해주세요.");
    }
  };
  const pwdOnChange = (pwd) => {
    setPwd(pwd.target.value);
    if (pwd.target.value.length > 0) {
      setPwdMsg("숫자,영문으로 구성된 7자~16자내로 입력해주세요.");
    }
  };
  const rePwdOnChange = (rePwd) => {
    const con = document.querySelector("#Register_input_repwd+.error_msg");
    con.style.display = "block";
    setRePwd(rePwd.target.value);
    if (pwd === rePwd.target.value) {
      setRePwdMsg("일치합니다");
      con.style.color = "green";
    } else {
      setRePwdMsg("비밀번호가 일치하지 않지 않습니다.");
      con.style.color = "red";
    }
  };
  const phoneOnChange = (phone1) => {
    setPhone(phone1.target.value);
    if (phone1.target.value.length > 0) {
      const phonenum = phone.slice(0, 3);
      const msg = document.querySelector("#phone_msg");
      msg.style.display = "block";
      if (phonenum === "010") {
        msg.style.display = "none";
      } else {
        setPhoneMsg("올바른 양식으로 써주세요");
      }
    }
  };

  return (
    <>
      <form
        className="Register_form"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("/api/register", {
              name: name,
              id: id,
              pwd: pwd,
              rePwd: rePwd,
              phone: phone,
            })
            .then((res) => {
              alert(res.data.msg);
              navigate("/ToDoList");
            });
        }}
      >
        <div className="Register_form_div">
          <p className="Register_input_title">이름</p>
          <input
            className="Register_input"
            value={name}
            onChange={(name) => nameOnChange(name)}
            type={"text"}
            required
          />
          <p className="error_msg">{nameMsg}</p>
        </div>
        <div className="Register_form_div">
          <p className="Register_input_title">아이디</p>
          <input
            className="Register_input"
            value={id}
            onChange={(id) => idOnChange(id)}
            pattern="^[a-zA-Z0-9]{5,16}$"
            type={"text"}
            required
          />
          <p className="error_msg">{idMsg}</p>
        </div>
        <div className="Register_form_div">
          <p className="Register_input_title">비밀번호</p>
          <input
            className="Register_input"
            value={pwd}
            onChange={(pwd) => pwdOnChange(pwd)}
            pattern="^[a-zA-Z0-9]{7,16}$"
            type={"password"}
            required
          />
          <p className="error_msg">{pwdMsg}</p>
        </div>
        <div className="Register_form_div">
          <p className="Register_input_title">비밀번호 확인</p>
          <input
            className="Register_input"
            id="Register_input_repwd"
            value={rePwd}
            onChange={(rePwd) => rePwdOnChange(rePwd)}
            type={"password"}
            required
          />
          <p className="error_msg" id="rePwd_msg">
            {rePwdMsg}
          </p>
        </div>
        <div className="Register_form_div">
          <p className="Register_input_title">전화번호</p>
          <input
            className="Register_input"
            value={phone}
            placeholder="01012341234"
            onChange={(phone) => phoneOnChange(phone)}
            type={"text"}
            minLength="11"
            maxLength="11"
            required
          />
          <p className="error_msg" id="phone_msg">
            {phoneMsg}
          </p>
        </div>
        <button className="Register_btn" type={"submit"}>
          가입하기
        </button>
      </form>
    </>
  );
};

export default Register;

//전화번로 유효성 검사 고민중
