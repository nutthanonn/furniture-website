import Product1 from "../../images/product1.png";
import Product2 from "../../images/product2.png";
import Product3 from "../../images/product3.png";
import Product4 from "../../images/product4.png";

interface PopularProductCardPropsType {
  id: number;
  image: string;
  price: number;
  name: string;
  detail: string;
  category: string;
  color: Array<string>;
  full_detail: string;
}

export const data: Array<PopularProductCardPropsType> = [
  {
    id: Math.random(),
    image: Product1,
    price: 62.23,
    name: "Wooden Bookshelf",
    detail: "Combination of wood and wool",
    category: "Living room",
    color: ["#151411", "#314443", "#C5A26E", "#D8DBE0"],
    full_detail:
      "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
  },
  {
    id: Math.random(),
    image: Product2,
    price: 63.47,
    name: "White Aesthetic Chair",
    detail: "Combination of wood and wool",
    category: "Chair",
    color: ["#151411", "#314443", "#C5A26E", "#D8DBE0"],
    full_detail:
      "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
  },
  {
    id: Math.random(),
    image: Product3,
    price: 62.23,
    name: "Bardono Smart Lamp",
    detail: "Easy to use with bluetooth connection",
    category: "Lamp",
    color: ["#314443", "#151411", "#D8DBE0", "#C5A26E"],
    full_detail:
      "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
  },
  {
    id: Math.random(),
    image: Product4,
    price: 58.39,
    name: "Sofa Empuk Banget",
    detail: "Using kapuk randu material",
    category: "Sofa",
    color: ["#314443", "#C5A26E", "#151411", "#D8DBE0"],
    full_detail:
      "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
  },
];
