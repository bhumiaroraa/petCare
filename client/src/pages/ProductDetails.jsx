import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Card } from "antd";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const ProductDetails = () => {
  const params = useParams();
  const [product, setProducts] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  //  function to get products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProducts(data?.product);
      getSimilarProducts(data?.product._id, data?.product?.category?._id);
    } catch (error) {
      console.log(error);
    }
  };

  //   get similar items
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-products/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // useeffect to fetch details of single product
  useEffect(() => {
    if (params.slug) getProduct();
  }, [params?.slug]);

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          {product._id ? ( // Check if product._id is defined before rendering the image
            <img
              src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height={300}
              width={300}
            />
          ) : (
            <div>Loading...</div> // Render loading indicator if product._id is undefined
          )}
        </div>
        <div className="col-md-6 text-center">
          <h1>product details</h1>
          <h6>Name: {product?.name || ""}</h6>
          <h6>Price : ₹{product?.price || ""}</h6>
          <h6>
            Category : {product.category ? product.category.name : ""}
          </h6>{" "}
          {/* Check if product.category is defined before accessing its name */}
          <h6>Description : {product?.description || ""}</h6>
          <button className="btn btn-primary ">Add to cart </button>
        </div>
      </div>
      <div className="row">
        <h1>similar product</h1>
        {relatedProducts?.length > 0 ? (
          <div>
            {" "}
            {relatedProducts?.map((p) =>
              p?.quantity > 0 ? (
                <div className="card">
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        height={"216.2px"}
                        width={"300.4px"}
                      />
                    }
                    actions={[
                      <div className="btn-container">
                        <button
                          className={`${
                            p?.quantity > 0
                              ? "btn btn-primary"
                              : "btn btn-primary disabled"
                          }`}
                        >
                          Add to cart{" "}
                        </button>
                        <button
                          className={`${
                            p?.quantity > 0
                              ? "btn btn-secondary"
                              : "btn btn-secondary disabled"
                          }`}
                          onClick={() => navigate(`/products/${p.slug}`)}
                        >
                          Know more
                        </button>
                      </div>,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://res.cloudinary.com/duu15ts5c/image/upload/v1711284987/GouravProject/assests/Screenshot_2024-03-23_204535_de5tju.png" />
                      }
                      title={p?.name}
                      description={p?.description}
                    />
                    <h5>{`₹${p?.price}`}</h5>
                    <h6>
                      <div className="in-stock">In stock</div>
                    </h6>
                  </Card>
                </div>
              ) : (
                <div className="card disabled">
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        height={"216.2px"}
                        width={"300.4px"}
                      />
                    }
                    actions={[
                      <div className="btn-container-disabled">
                        <button className="btn btn-primary disabled">
                          Add to cart{" "}
                        </button>
                        <button className="btn btn-secondary disabled">
                          Know more
                        </button>
                      </div>,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://res.cloudinary.com/duu15ts5c/image/upload/v1711284987/GouravProject/assests/Screenshot_2024-03-23_204535_de5tju.png" />
                      }
                      title={p?.name}
                      description={p?.description}
                    />
                    <h5>{`₹${p?.price}`}</h5>
                    <h6>
                      <div className="out-of-stock">Out of stock</div>
                    </h6>
                  </Card>
                </div>
              )
            )}
          </div>
        ) : (
          <h3>No similar products</h3>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
