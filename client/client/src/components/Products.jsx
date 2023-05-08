import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


return(
  <Container>
    {popularProducts.map((item)=>(
      <Product item={item} key={item.id} />
    ))}
  </Container>
)

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}


{cat
        ? filteredProducts.map((item) => <popularProducts item={item} key={item.id} />)
        : products
            .slice(1, 8)
            .map((item) => <popularProducts item={item} key={item.id} />)}      
    </Container>
  );
};

export default Products;


/*
import axios from 'axios';
import { useEffect, useState } from 'react';
import { popularProducts } from '../data';
import Product from './Product';

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `${appUrl}/api/products?category=${category}`
            : `${appUrl}/api/products`
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {}
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((i) =>
          Object.entries(filters).every(([key, value]) =>
            i[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    switch (sort) {
      case 'newest':
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
      case 'asc':
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;
      case 'desc':
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;
      default:
        break;
    }
  }, [sort]);

  return (
    <div className="p-[20px] flex flex-wrap justify-between ">
      {category
        ? filteredProducts.map((i) => <Product key={i._id} item={i} />)
        : products.slice(0, 8).map((i) => <Product key={i._id} item={i} />)}
    </div>
  );
};

export default Products;*/