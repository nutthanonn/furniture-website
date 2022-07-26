import Choice from "../svg/choice.svg";
import Price from "../svg/price.svg";
import Time from "../svg/time.svg";

interface BlogTypes {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const blogData: Array<BlogTypes> = [
  {
    id: 1,
    image: Choice,
    title: "Many Choices",
    subtitle:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
  },
  {
    id: 2,
    image: Price,
    title: "Fast and On Time",
    subtitle:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
  },
  {
    id: 3,
    image: Time,
    title: "Affordable Price",
    subtitle:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
  },
];
