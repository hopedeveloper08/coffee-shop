type Product = {
  id: number;
  title: string;
  image: string;
  price?: number;
  discount?: number;
  rate: number;
};

export const products: Array<Product> = [
  {
    id: 1,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p1.png",
    price: 175000,
    rate: 4,
  },
  {
    id: 2,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p2.png",
    rate: 3,
  },
  {
    id: 3,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p3.png",
    price: 175000,
    discount: 12,
    rate: 5,
  },
  {
    id: 4,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p4.png",
    price: 175000,
    rate: 4,
  },
  {
    id: 5,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p5.png",
    price: 175000,
    discount: 16,
    rate: 4,
  },
  {
    id: 6,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p6.png",
    rate: 2,
  },
  {
    id: 7,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p7.png",
    price: 175000,
    rate: 5,
  },
  {
    id: 8,
    title: "پک قهوه ترک بن مانو مقدار 250 گرم",
    image: "/images/products/p8.png",
    price: 175000,
    discount: 8,
    rate: 4,
  },
];
