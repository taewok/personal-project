import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/PhoneConfirm.css";
import axios from "axios";

const PhoneConfirm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [phone,setPhone] = useState("");
    const phoneOnChange = (phone)=>{
        setPhone(phone.target.value)
    }

    const phoneSubmit = (e) =>{
        e.preventDefault();
        axios.post("/api/PhoneConfirm",{phone:phone,id:location.state.id})
        .then((res)=>{
            if (res.data.msg === "전화번호확인완료") {
               navigate("/PwdReset",{state:{id:res.data.id}})
            }else{
                alert(res.data.msg)
            }
        })
    }
  return (
    <div className="PhoneConfirm_div">
      <div className="PhoneConfirm_header">
        <p className="now_step">비밀번호 찾기</p>
        <ul className="step_list_ul">
          <li className="PhoneConfirm_step_list_li">01. 아이디 확인</li>&gt;
          <li className="PhoneConfirm_step_list_li">02. 전화번호 확인</li>&gt;
          <li className="PhoneConfirm_step_list_li">03. 비밀번호 재설정</li>
        </ul>
      </div>
      <div className="how_action">
        등록했던 전화번호를 입력해주세요.
      </div>
      <form className="PhoneConfirm_form" onSubmit={(e)=>phoneSubmit(e)}>
        <input
          className="PhoneConfirm_input"
          placeholder="01012341234"
          value={phone}
          onChange={(phone)=>phoneOnChange(phone)}
          maxLength="11"
        />
      </form>
      <div className="next_btn_div">
        <button className="next_btn" type={"submit"}>
          다음
        </button>
      </div>
    </div>
  );
};

export default PhoneConfirm;
