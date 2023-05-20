import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Category.css";
import axios from "axios";

const Category = ({ post, setPost }) => {
  const [category, setCategory] = useState([]);

  const { products } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("https://restaurant.dipsag.uz/api/categories")
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="category__title">Categories</h3>

      <ul className="category__list">
        {category.map((item, index) => (
          <li
            key={index}
            className="category__item"
            style={{
              color: post.activeCategory === item ? "#46A358" : "#3D3D3D",
            }}
            onClick={() => setPost({ ...post, activeCategory: item })}>
            <span>{item.name_en}</span>
            <span>{`(${
              products.filter((product) => product.category.includes(item))
                .length
            })`}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
