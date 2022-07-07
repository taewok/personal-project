import React, { useState } from "react";
import "../css/PwdReset.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const PwdReset = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pwd,setPwd] = useState("");
  const [rePwd,setRePwd] = useState("");
  const pwdOnChange = (pwd) =>{
    setPwd(pwd.target.value)
  }
  const rePwdOnChange = (rePwd) =>{
    setRePwd(rePwd.target.value)
  }

  const [pwdMsg,setPwdMsg] = useState("숫자,영문으로 구성된 7자~16자내로 입력해주세요.");
  const [rePwdMsg,setRePwdMsg] = useState("2");
  return (
    <div className="PwdReset_div">
      <div className="PwdReset_header">
        <p className="now_step">비밀번호 찾기</p>
        <ul className="step_list_ul">
          <li className="PwdReset_step_list_li">01. 아이디 확인</li>&gt;
          <li className="PwdReset_step_list_li">02. 전화번호 확인</li>&gt;
          <li className="PwdReset_step_list_li">03. 비밀번호 재설정</li>
        </ul>
      </div>
      <div className="how_action">원하는 비밀번호를 입력해주세요.</div>
      <form className="PwdReset_form" onSubmit={(e)=>{
        e.preventDefault();
        axios.put("/api/PwdReset",{
          id:location.state.id,
          pwd:pwd,
          rePwd:rePwd
        }).then((res)=>{
          if (res.data.msg === "수정 성공") {
            navigate("/")
            alert("비밀번호 수정 성공")
          }else{
            alert(res.data.rePwdMsg)
          }
        })
      }}>
          <p>비밀번호</p>
          <input className="PwdReset_input" 
          pattern="^[a-zA-Z0-9]{7,16}$" 
          value={pwd}
          onChange={(pwd)=>pwdOnChange(pwd)}/>
          <p className="pwdMsg">{pwdMsg}</p>
          <p>비밀번호 확인</p>
          <input className="PwdReset_input" 
          pattern="^[a-zA-Z0-9]{7,16}$" 
          value={rePwd}
          onChange={(rePwd)=>rePwdOnChange(rePwd)}/>
          <p className="pwdMsg">{rePwdMsg}</p>
          <button type={"submit"} className="pwd_update_btn">확인</button>
      </form>
    </div>
  );
};

export default PwdReset;
