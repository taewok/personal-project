import React from 'react';
import "../css/Pagination.css";

const Pagination = ({totalPosts,paginate,postsPerPage}) => {
    const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
        <div>
            <nav>
                <ul className='number-ul'>
                    {pageNumbers.map((num)=>(
                        <li key={num}>
                            <span onClick={()=>paginate(num)}>{num}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;