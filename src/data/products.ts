type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rate: number;
  discount?: number;
}


const products: Array<Product> = [
  {
    id: 1,
    title: "قهوه ترک بن مانو مقدار 250 گرم",
    price: 1_200_000,
    image: `/coffee-shop/images/products/p1.png`,
    rate: 4,
    discount: 5,
  },
  {
    id: 2,
    title: "قهوه اسپرسو بن مانو  مدل مانوکا مقدار 250 گرم",
    price: 1_400_000,
    image: `/coffee-shop/images/products/p2.png`,
    rate: 5,
    discount: 10,
  },
  {
    id: 3,
    title: "قهوه اسپرسو بن مانو مدل پریسکا مقدار 250 گرم",
    price: 1_180_000,
    image: `/coffee-shop/images/products/p3.png`,
    rate: 3,
  },
  {
    id: 4,
    title: "قهوه اسپرسو بن مانو مدل آرتیمان مقدار 250 گرم",
    price: 1_150_000,
    image: `/coffee-shop/images/products/p4.png`,
    rate: 2,
  },
  {
    id: 5,
    title: "قهوه بن مانو نورسکا مدل 9PM",
    price: 500_000,
    image: `/coffee-shop/images/products/p5.png`,
    rate: 3,
  },
  {
    id: 6,
    title: "قهوه بن مانو نورسکا مدل 6PM",
    price: 500_000,
    image: `/coffee-shop/images/products/p6.png`,
    rate: 4,
    discount: 5,
  },
  {
    id: 7,
    title: "قهوه بن مانو نورسکا مدل 8PM",
    price: 500_000,
    image: `/coffee-shop/images/products/p7.png`,
    rate: 2,
  },
  {
    id: 8,
    title: "قهوه بن مانو نورسکا مدل 2PM",
    price: 500_000,
    image: `/coffee-shop/images/products/p8.png`,
    rate: 5,
    discount: 12,
  },
]

export default products