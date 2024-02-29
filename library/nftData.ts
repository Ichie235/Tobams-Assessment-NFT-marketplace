export type NftLatestProjectProps = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  price?: string;
  image: string;
  time: string;
  bidersIcon: string;
  bidersNumber?: string;
  likes?: string;
};

export const NftLatestproject: NftLatestProjectProps[] = [
  {
    id: "1",
    slug: "nft-1",
    name: "Tristique diam a, enim, eros tellus. Viverra etiam",
    description: "",
    price: "2.55 ETH",
    image: "/nft-images/nft-1.svg",
    time: "2:41 min left",
    bidersIcon: "/bidding-people-1.svg",
    bidersNumber: "14",
    likes: "54",
  },
  {
    id: "2",
    slug: "nft-2",
    name: "Vulputate felis purus viverra morbi facilisi eget",
    description:
      "",
      price: "3.19 ETH",
    image: "/nft-images/nft-2.svg",
    time: "2:41 min left",
    bidersIcon: "/bidding-people-3.svg",
    bidersNumber: "35",
    likes: "120",
  },
  {
    id: "3",
    slug: "nft-3",
    name: "Dui accumsan leo vestibulum ornare eu",
    description: "",
    price: "1.11 ETH",
    image: "/nft-images/nft-3.svg",
    time: "22:59 min left",
    bidersIcon: "/bidding-people-3.svg",
    bidersNumber: "101",
    likes: "570",
  },
  {
    id: "4",
    slug: "nft-4",
    name: "Senectus adipiscing nascetur accumsan etiam",
    description:
      "",
      price: "1.63 ETH",
    image: "/nft-images/nft-4.svg",
    time: "22:59 min left",
    bidersIcon: "/bidding-people-3.svg",
    bidersNumber: "12",
    likes: "98",
  },
  {
    id: "5",
    slug: "nft-5",
    name: "Mattis at diam lorem nisl nam sed sociis",
    description:
      "",
      price: "2.78 ETH",
    image: "/nft-images/nft-3.svg",
    time: "37:01 min left",
    bidersIcon: "/bidding-people-3.svg",
    bidersNumber: "19",
    likes: "50",
  },
];
