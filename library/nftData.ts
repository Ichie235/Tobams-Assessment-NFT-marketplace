export type NftLatestProjectProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  time: string;
  bidersIcon: string;
  bidersNumber: number;
  likes: Number;
};

export const NftLatestproject: NftLatestProjectProps[] = [
  {
    id: "1",
    slug: "blog-wesite",
    name: "Blog Wesite",
    description: "This project was built with Node.js, Express and Mongodb.",
    image: "/nft-images/nft-1.svg",
    time: "",
    bidersIcon: "",
    bidersNumber: 6,
    likes: 2,
  },
  {
    id: "2",
    slug: "one7thapartment",
    name: "17Th Apartment",
    description:
      "Utilizing the power of Next.js, TypeScript, Tailwind, and Flutterwave API.",
    image: "/nft-images/nft-2.svg",
    time: "",
    bidersIcon: "",
    bidersNumber: 6,
    likes: 2,
  },
  {
    id: "3",
    slug: "avvic-bank",
    name: "Avvic Bank",
    description: "Utilizing the power of React, SCSS, Routing, Node.js.",
    image: "/nft-images/nft-3.svg",
    time: "",
    bidersIcon: "",
    bidersNumber: 6,
    likes: 2,
  },
  {
    id: "4",
    slug: "ecommerce",
    name: "Ecommerce Wesite",
    description:
      "This project was built with Next.Js, Tailwindcss, Prisma, Mongodb and AuthO authentication.",
    image: "/nft-images/nft-4.svg",
    time: "",
    bidersIcon: "",
    bidersNumber: 6,
    likes: 2,
  },
  {
    id: "5",
    slug: "restaurant-website",
    name: "Restaurant Website",
    description:
      "This project was built with Next.Js, Tailwindcss, Prisma, Mongodb and JWT authentication.",
    image: "/nft-images/nft-5.svg",
    time: "",
    bidersIcon: "",
    bidersNumber: 6,
    likes: 2,
  },
];
