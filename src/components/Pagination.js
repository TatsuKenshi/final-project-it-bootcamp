import { useEffect, useState } from "react";
import StyledPagination from "../style/StyledPagination";

const Pagination = ({
  displayArray,
  displayed,
  setOnPage,
  setDisplayed,
  currPage,
  setCurrPage,
}) => {
  let length = displayArray.length;
  let numberOfPages = Math.ceil(length / displayed);
  const [pages, setPages] = useState([]);

  const changePage = (page) => {
    setCurrPage(page);
    let start = displayed * (page - 1);
    let end = start + Number(displayed);
    setOnPage(displayArray.slice(start, end));
  };

  useEffect(() => {
    let tmp = [];
    for (let i = 1; i <= numberOfPages; i++) {
      tmp.push(i);
    }
    setPages(tmp);
    // eslint-disable-next-line
  }, [displayed, displayArray]);

  return (
    <StyledPagination>
      <div>
        <h3>Items per page</h3>
        <select
          value={displayed}
          onChange={(e) => {
            setDisplayed(e.target.value);
            setCurrPage(1);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      <button
        className="back"
        disabled={currPage <= 1}
        onClick={() => {
          changePage(currPage - 1);
        }}
      >
        BACK
      </button>
      {pages.map((page) => (
        <button
          className="button"
          onClick={() => {
            changePage(page);
          }}
          key={page}
          style={page === currPage ? { color: "red" } : {}}
        >
          {page}
        </button>
      ))}
      <button
        className="next"
        disabled={currPage >= pages.length}
        onClick={() => {
          changePage(currPage + 1);
        }}
      >
        NEXT
      </button>
    </StyledPagination>
  );
};

export default Pagination;
