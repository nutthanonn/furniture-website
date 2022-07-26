interface ArticleRightContentProps {
  id: number;
  categories: string;
  title: string;
  description: string;
  createby: string;
  createDate: string;
  avatar: string;
  image: string;
}

export const data: Array<ArticleRightContentProps> = [
  {
    id: 1,
    categories: "Tips and trick",
    title: "6 ways to give your home minimalistic vibes",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    createby: "Jerremy Jean",
    avatar:
      "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    createDate: "Friday, 1 April 2022",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    id: 2,
    categories: "Design Inspiration",
    title: "How to make your interiors cooler and more stylish",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    createby: "Jerremy Jean",
    avatar:
      "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    createDate: "Friday, 1 April 2022",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    categories: "Tips and trick",
    title: "Elements to add character to your space",
    description:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    createby: "Jerremy Jean",
    avatar:
      "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    createDate: "Friday, 1 April 2022",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];
