import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  if (!Array.isArray(products) || !products.length) {
    return <div>No products available</div>;
  }

  const renderList = products.map((product) => {
    if (!product || typeof product !== 'object') {
      console.warn("Invalid product:", product);
      return null;
    }

    const { id, title, image, price, category } = product;

    if (!id || !title || !image || !price || !category) {
      console.warn("Incomplete product data:", product);
      return null;
    }

    // Logging each product to check its structure
    console.log("Rendering product:", product);

    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
