// หน้านี้ต้องรอ ทำ backend

import { Container } from "common/Container";
import React from "react";
import ProductCard from "shared/ProductCard";
import styled from "styled-components";
import { data } from "assets/test/data/popularProduct";
import { device } from "common/ScreenSize";
import { CARD_HEIGH, CARD_WIDTH, IMAGE_HEIGH } from "common/CardSize";
import { useEffect } from "react";
import { useState } from "react";
import { ProductStoreImpl } from "store/ProductStore";
import { observer } from "mobx-react";
import { SetProductPerPage } from "helper/setProductPerPage";

interface ProductPropsType {
  store: ProductStoreImpl;
}

interface productDataType {
  id: number;
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
}

const ProductGrid: React.FC<ProductPropsType> = observer((props) => {
  const { store } = props;
  const [productData, setProductData] = useState<Array<productDataType>>([]);

  useEffect(() => {
    setProductData(SetProductPerPage(store.pageNumber, data));
  }, [store.pageNumber]);

  useEffect(() => {
    if (store.searchValue !== "") {
      setProductData(
        data.filter(
          (item) =>
            item.name
              .toLocaleLowerCase()
              .search(store.searchValue.toLocaleLowerCase()) !== -1
        )
      );
    } else {
      setProductData(SetProductPerPage(store.pageNumber, data));
    }
  }, [store.searchValue]);

  return (
    <Box>
      {productData.map((item, i) => {
        return (
          <ProductCardCustom key={i}>
            <ProductCard {...item} />
          </ProductCardCustom>
        );
      })}
    </Box>
  );
});

export default ProductGrid;

const Box = styled(Container)`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  margin-right: auto;

  @media only screen and (${device.laptop}) {
    grid-template-columns: auto auto;
  }
`;

const ProductCardCustom = styled.div`
  @media only screen and (${device.laptop}) {
    > div {
      width: calc(${CARD_WIDTH} - 7rem);
      height: calc(${CARD_HEIGH} - 5rem);
      > img {
        height: calc(${IMAGE_HEIGH} - 5rem);
      }
    }
  }
  margin-right: auto;
  /* border: 2px solid black; */
`;
