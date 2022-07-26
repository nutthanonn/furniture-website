import Product1 from "../../images/product1.png";
import Product2 from "../../images/product2.png";
import Product3 from "../../images/product3.png";
import Product4 from "../../images/product4.png";

interface PopularProductCardPropsType {
  id: number;
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
}

export const data: Array<PopularProductCardPropsType> = [
  {
    id: 1,
    image: Product1,
    price: 62.23,
    name: "Wooden Bookshelf",
    description: "Combination of wood and wool",
    category: "Living room",
  },
  {
    id: 2,
    image: Product2,
    price: 63.47,
    name: "White Aesthetic Chair",
    description: "Combination of wood and wool",
    category: "Chair",
  },
  {
    id: 3,
    image: Product3,
    price: 62.23,
    name: "Bardono Smart Lamp",
    description: "Easy to use with bluetooth connection",
    category: "Lamp",
  },
  {
    id: 4,
    image: Product4,
    price: 58.39,
    name: "Sofa Empuk Banget",
    description: "Using kapuk randu material",
    category: "Sofa",
  },
];
