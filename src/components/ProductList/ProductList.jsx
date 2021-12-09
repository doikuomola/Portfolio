// @ts-nocheck
import "./ProductList.css";

import React from "react";
import Product from "../Product/Product";
import products from "../../data/data";

const ProductList = () => {
    return (
        <div className="productlist">
            <div className="product__list__texts">
                <h1 className="product__list__title">
                    Create & inspire. It's Lama
                </h1>
                <p className="product__list__desc">
                    Lama is a creative portfolio that your work has been waiting
                    for. Beautiful homes, stunning portfolio styles & a whole
                    lot more awaits inside.
                </p>
            </div>
            <div className="product__list__lists">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
