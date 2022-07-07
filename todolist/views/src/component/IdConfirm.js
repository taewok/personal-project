import React, { useState } from "react";
import "../css/IdConfirm.css";
import { Link,useNavigate} from "react-router-dom"
import axios from "axios";

const IdConfirm = () => {
    const navigate = useNavigate();

    const [id,setid] = useState("");
    const idOnChange = (id)=>{
        setid(id.target.value)
    }

    const nextBtn = (e) =>{
        e.preventDefault();
        axios.post("/api/IdConfirm",{id:id}).then((res)=>{
            if (res.data.msg === "아이디 확인 완료") {
                navigate("/PhoneConfirm",{state:{id:res.data.id}})
            }
            else{
                alert(res.data.msg)
            }
        })
    }
  return (
    <div className="IdConfirm_div">
      <div className="IdConfirm_header">
        <p className="now_step">비밀번호 찾기</p>
        <ul className="step_list_ul">
            <li className="step_list_li">01. 아이디 확인</li>&gt;
            <li className="step_list_li">02. 전화번호 확인</li>&gt;
            <li className="step_list_li">03. 비밀번호 재설정</li>
        </ul>
      </div>
      <div className="how_action">비밀번호를 찾고자 하는 아이디를 입력해 주세요.</div>
      <form className="IdConfirm_form" onSubmit={(e)=>nextBtn(e)}>
        <input 
        className="IdConfirm_input"
        value={id}
        onChange={(id)=>idOnChange(id)}/>
      </form>
      <div className="next_btn_div">
        <button className="next_btn" type={"submit"}>다음</button>
      </div>
      <p className="remember_id_text">아이디가 기억나지 않는다면? <Link to="/PwdConfirm">아이디 찾기 바로가기</Link>&gt;</p>
    </div>
  );
};

export default IdConfirm;
