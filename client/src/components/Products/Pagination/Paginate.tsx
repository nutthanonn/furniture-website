import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Container } from "common/Container";
import { Green, Gray } from "common/Color";
import { PaginationControl } from "helper/PaignationControl";
import { useNavigate } from "react-router-dom";
import { ProductStoreImpl } from "store/ProductStore";

interface PaginatePropsType {
  store: ProductStoreImpl;
}

const MAX_PAGE = 10; // mock data

const Paginate: React.FC<PaginatePropsType> = (props) => {
  const { store } = props;

  const navigate = useNavigate();
  const [currPage, setCurrPage] = useState<number>(1);

  useEffect(() => {
    navigate(`${currPage}`);
  }, [currPage, navigate]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrPage(data.selected + 1);
    store.setPageNumber(data.selected + 1);
  };

  return (
    <Box>
      <ReactPaginate
        pageRangeDisplayed={PaginationControl(currPage, MAX_PAGE)}
        marginPagesDisplayed={1}
        pageCount={MAX_PAGE}
        previousLabel={
          <MdOutlineNavigateBefore color={currPage === 1 ? Gray : "black"} />
        }
        nextLabel={
          <MdOutlineNavigateNext
            color={currPage === MAX_PAGE ? Gray : "black"}
          />
        }
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
