import { Container } from "common/Container";
import { DEFAULT_HOME_MARGIN } from "common/Space";
import ProductShoping from "components/ProductDetail/Shop/ProductShoping";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { ProductStoreImpl } from "store/ProductStore";
import styled from "styled-components";

interface ProductDetailsPropsType {
  store: ProductStoreImpl;
}

export interface ProductShopingPropsType {
  id: number;
  image: string;
  price: number;
  name: string;
  detail: string;
  category: string;
  color: Array<string>;
  full_detail: string;
}

const ProductDetails: React.FC<ProductDetailsPropsType> = observer((props) => {
  const { store } = props;
  const [productShopping, setProductShopping] =
    useState<ProductShopingPropsType>();

  useEffect(() => {
    setProductShopping(store.find_product());
    if (store.productId === 0) {
      window.location.assign(window.location.origin);
    }
  }, [store, productShopping]);

  return (
    <Box>
      {productShopping === undefined ? (
        ""
      ) : (
        <ProductShoping {...productShopping} />
      )}
    </Box>
  );
});

export default ProductDetails;

const Box = styled(Container)`
  margin-top: ${DEFAULT_HOME_MARGIN};
  margin-bottom: ${DEFAULT_HOME_MARGIN};
  /* border: 2px solid black; */
`;
