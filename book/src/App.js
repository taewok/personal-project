import "./App.css";
import { Route, Routes } from "react-router-dom";
import Serch from "./Component/Serch";
import Result from "./Component/Result";
import { useState } from "react";
import Pagination from "./Component/Pagination";

function App() {
  const [bookList, setBookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [postsPerPage, setPostsPerPage] = useState(6); //한 페이지에 보여질 상품 개수

  const lastPostNumber = currentPage * postsPerPage; //현재 페이지에 마지막 게시물 번호
  const firstPostNumber = lastPostNumber - postsPerPage; //현재 페이지에 첫번째 게시물 번호
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(firstPostNumber, lastPostNumber);
    return currentPosts;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Serch setBookList={setBookList} />}>
          <Route
            path="result"
            element={<Result posts={currentPosts(bookList)} />}
          >
            <Route
              path="pageNum/*"
              element={
                <Pagination
                  totalPosts={bookList.length}
                  paginate={setCurrentPage}
                  postsPerPage={postsPerPage}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
