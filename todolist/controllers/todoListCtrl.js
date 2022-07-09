const connection = require("../mysql");
const body = require("body-parser");
const session = require("express-session");

const post = {
  login: (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;
    connection.query(
      "SELECT * FROM customer WHERE id =?",
      [id],
      (err, rows) => {
        if (err) throw err;
        else {
          if (rows.length == 0) {
            return res.send({
              msg: "아이디 또는 비밀번호를 잘 못 입력하였습니다.",
            });
          } else {
            if (pwd == rows[0].pwd) {
              req.session.user = id;
              return res.send({
                msg: "로그인 성공",
                session: req.session.user,
              });
            } else {
              return res.send({
                msg: "비밀번호가 틀렸습니다 다시 확인해주세요.",
              });
            }
          }
        }
      }
    );
  },
  register: (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const pwd = req.body.pwd;
    const rePwd = req.body.rePwd;
    const phone = req.body.phone;
    if (pwd === rePwd) {
      connection.query(
        "INSERT INTO customer.customer (name,id,pwd,phone) VALUES (?,?,?,?)",
        [name, id, pwd, phone],
        (err, rows) => {
          if(err) throw err;
          res.send({msg:"회원가입 완료"})
        }
      );
    }else{
      return res.send({msg:"비밀번호가 일치 하지 않습니다."})
    }
  },
  findId:{
    idConfirm: (req,res) =>{
      const id = req.body.id
      connection.query("SELECT * FROM customer WHERE id =?",[id],(err,rows)=>{
        if(err) throw err;
        if (rows.length>0) {
          if (rows[0].id === id) {
            return res.send({msg:"아이디 확인 완료",id:rows[0].id})
          }
        }else{
          return res.send({msg:"아이디를 다시 확인 해주세요."})
        }
      })
    },
    phoneConfirm: (req,res) =>{
      const id = req.body.id;
      const phone = req.body.phone;
      connection.query("SELECT * FROM customer WHERE id =? and phone =?",[id,phone],(err,rows)=>{
        if(err) throw err;
        if (rows.length>0) {
          return res.send({msg:"전화번호확인완료",id:rows[0].id})
        }else{
          return res.send({msg:"입력하신 전화번호가 맞는지 다시 확인해주세요."})
        }
      })
    },
  },
  pwdConfirm: (req,res) =>{
    const name = req.body.name;
    const phone = req.body.phone;
    connection.query("SELECT * FROM customer WHERE name =? and phone =?",[name,phone],(err,rows)=>{
      if(err) throw err;
      if (rows.length>0) {
        return res.send({msg:rows[0].id})
      }else{
        return res.send({msg:"입력하신 정보가 맞는지 다시 확인해주세요."})
      }
    })
  }
};

const get = {
  
}

const put = {
  pwdReset: (req,res) =>{
    const id = req.body.id;
    const pwd = req.body.pwd;
    const rePwd = req.body.rePwd;
    if (pwd === rePwd) {
      connection.query("UPDATE customer SET pwd = ? WHERE id = ?",[pwd,id],(err,rows)=>{
        if(err) throw err;
        return res.send({msg:"수정 성공"})
      }) 
    }else{
      return res.send({rePwdMsg:"비밀번호가 일치하지 않습니다 다시 확인해주세요."})
    }
  }
}

module.exports = {
  post,
  get,
  put
};
