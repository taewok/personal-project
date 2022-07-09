import React, { useState } from "react";
import "../css/PwdConfirm.css";
import axios from "axios";

const PwdConfirm = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const nameOnChange = (name) =>{
        setName(name.target.value);
    }
    const phoneOnChange = (phone) =>{
        if (!isNaN(phone.target.value)) {
            setPhone(phone.target.value);
            console.log("ok")
        }else{
            alert("숫자를 입력해주세요.")
            setPhone("")
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post("/api/PwdConfirm",{name:name,phone:phone})
        .then((res)=>{
            if (res.data.msg === "입력하신 정보가 맞는지 다시 확인해주세요.") {
                alert(res.data.msg)
            }else{
                document.querySelector("#PwdConfirm_name_input").style.display = "none";
                document.querySelector("#PwdConfirm_phone_input").style.display = "none";
                document.querySelector("#PwdConfirm_phone_input_text").style.display = "none";
                const id = document.querySelector("#PwdConfirm_name_input_text");
                id.innerHTML = res.data.msg;
                id.style.fontSize = "25px"
                id.style.color = "green"
            }
        })
    }
  return (
    <div className="PwdConfirm_div">
      <div className="PwdConfirm_header">
        <p className="now_step">비밀번호 찾기</p>
        <ul className="step_list_ul">
          <li className="PwdConfirm_step_list_li">01. 개인정보 확인</li>
        </ul>
      </div>
      <div className="how_action">
      회원정보에 등록한 이름과 번화번호가 입력한 이름과 휴대전화 번호와 같아야 합니다.
      </div>
      <form className="PwdConfirm_form" onSubmit={(e)=>onSubmit(e)}>
        <p id="PwdConfirm_name_input_text">이름</p>
        <input
          className="PwdConfirm_input"
          id="PwdConfirm_name_input"
          value={name}
          onChange={(name)=>nameOnChange(name)}
        />
        <p id="PwdConfirm_phone_input_text">전화번호</p>
        <input
          className="PwdConfirm_input"
          id="PwdConfirm_phone_input"
          value={phone}
          onChange={(phone)=>phoneOnChange(phone)}
          placeholder="01012341234"
          minLength="11"
          maxLength="11"
        />
        <div className="next_btn_div">
        <button className="next_btn" type={"submit"}>
          다음
        </button>
      </div>
      </form>
    </div>
  );
};

export default PwdConfirm;
