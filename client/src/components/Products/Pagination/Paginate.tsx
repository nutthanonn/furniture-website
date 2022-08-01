import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Container } from "common/Container";
import { Green } from "common/Color";
import { PaginationControl } from "helper/PaignationControl";

const MAX_PAGE = 10; // mock data

const Paginate: React.FC = () => {
  const [currPage, setCurrPage] = useState<number>(1);

  const handlePageClick = (data: { selected: number }) => {
    setCurrPage(data.selected + 1);
  };

  return (
    <Box>
      <ReactPaginate
        pageRangeDisplayed={PaginationControl(currPage, MAX_PAGE)}
        marginPagesDisplayed={1}
        pageCount={MAX_PAGE}
        previousLabel={<GrFormPrevious />}
        nextLabel={<GrFormNext />}
        breakLabel="..."
        onPageChange={handlePageClick}
        // renderOnZeroPageCount={null}
        containerClassName="paginate"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="prev-link"
        nextLinkClassName="next-link"
      />
    </Box>
  );
};

export default Paginate;

const Box = styled(Container)`
  margin: 80px 0;

  > .paginate {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    /* border: 2px solid black; */

    > .previous,
    .next {
      width: 38px;
      height: 42px;
      display: flex;
      margin-inline: 15px;
      cursor: pointer;
      > * {
        margin: auto;
      }
    }

    > .selected {
      background-color: ${Green};
      color: white;
      border: 1.5px solid ${Green} !important;
    }

    > .page-item,
    .break {
      width: 38px;
      height: 42px;
      display: flex;
      cursor: pointer;
      border: 1.5px solid #f9f9f9;

      > a {
        padding: 23% 25%;

        margin: auto;
        font-family: "Exdoxus-regular";
        font-size: 18px;
        /* border: 2px solid blue; */
      }
    }
  }
`;
