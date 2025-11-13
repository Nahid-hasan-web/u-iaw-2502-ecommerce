import React, { useEffect, useState } from "react";
import SingelProductCard from "../commonCompoents/SingelProductCard";
import axios from "axios";
import { useNavigate } from "react-router";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        "https://dummyjson.com/products?limit=4&skip=0&select=title,thumbnail,price,discountPercentage,category,rating"
      )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // -------------- details funtion 
  const handelDetails = ()=>{
      navigate('/details')
  }

  

  return (
    <>
      <section id="bestSeller">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            {products.map((item) => (
              <SingelProductCard
              key={item.id}
                title={item.title}
                productImage={item.thumbnail}
                category={item.category}
                mainPrice={item.price}
                discoutPrice={item.price - (item.price * item.discountPercentage / 100).toFixed(2)}
                rating={item.rating}
                detailsFun={handelDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
