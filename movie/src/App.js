import { useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
useEffect(()=>{
  axios.get(`https://openapi.naver.com/v1/search/movie.json?X-Naver-Client-Id=tZnlIXFC0z2_iK8MWgnt&X-Naver-Client-Secret=frJe8UKSOI`).then((data)=>{
    console.log(data.data)
  })
})
  return (
    <div className="App">
    </div>
  );
}

export default App;
