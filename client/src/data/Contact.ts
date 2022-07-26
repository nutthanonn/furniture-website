interface ContactType {
  title: string;
  categories: Array<string>;
}

export const Contact: Array<ContactType> = [
  {
    title: "Product",
    categories: ["New Arrivals", "Best Selling", "Home Decor", "Kitchen Set"],
  },
  {
    title: "Services",
    categories: ["Catalog", "Blog", "FaQ", "Pricing"],
  },
  {
    title: "Follow Us",
    categories: ["Facebook", "Instagram", "Twitter"],
  },
];
