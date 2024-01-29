import React, { useEffect, useState } from "react";
import Product from "../components/productdisplay/Product";

const ToDo = () => {
  const [list, setList] = useState([
    {
      id: 1,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
      product_name: "Iphone 15 Pro Max",
      price: "15.000.000đ",
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
      product_name: "Iphone 15 Plus",
      price: "20000000đ",
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
      product_name: "iPhone 14 Pro Max",
      price: "25000000đ",
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png",
      product_name: "iPhone 13 128GB",
      price: "35000000đ",
      quantity: 1,
    },
    {
      id: 5,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_1.png",
      product_name: "Iphone 16 Plus",
      price: "35000000đ",
      quantity: 1,
    },
    {
      id: 6,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
      product_name: "Iphone 17 Plus",
      price: "40000000đ",
      quantity: 1,
    },
    {
      id: 7,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb_3.png",
      product_name: "Iphone 18 Plus",
      price: "45000000đ",
      quantity: 1,
    },
    {
      id: 8,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-128gb.png",
      product_name: "Iphone 14 Plus",
      price: "50000000đ",
      quantity: 1,
    },
    {
      id: 9,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png",
      product_name: "Iphone 13 Plus",
      price: "16000000đ",
      quantity: 1,
    },
    {
      id: 10,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-256gb_1.png",
      product_name: "Iphone 12 Plus",
      price: "17000000đ",
      quantity: 1,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    if (list) {
      setList(list);
    }
  }, [list]);

  return (
    <>
      <Product list={list}></Product>

    </>
  );
};

export default ToDo;
