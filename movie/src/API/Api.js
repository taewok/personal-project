const express = require("express");
const app = express();

const server = app.listen(3001, () => {
  console.log("Start Server : localhost:3001");
});

app.get("/api/users/:type", async (req, res) => {
  let { type } = req.params;
  if(type === 'seoul'){
    let data =[
        {
            name:"홍기동",
            city:'seoul'
        },
        {
            name:"장기웅",
            city:'seoul'
        }
    ]
    res.send(data)
  }else if(type === 'jeju'){
    let data =[
        {
            name:"박지성",
            city:'jeju'
        },
        {
            name:"김지석",
            city:'jeju'
        }
    ]
    res.send(data)
  }else{

  }
});