import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Combo() {
  const [products, setProduct] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setProduct(myJson);
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* combo album */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container text-center pb-5">
          <h5 style={{ fontWeight: "bolder" }}>combo Collection</h5>
          <p>Available In Amazon</p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            {products.slice(20, 22).map((product) => {
              return (
                <div className="col" key={product.id}>
                  <div className="card shadow-sm">
                    <img src={product?.img} alt="" />
                    <div className="card-body ">
                      <hr />
                      <div className="mb-3 text-center">
                        <small>
                          <b>{` Model: ${product.title}`}</b>
                          <br />
                          {` Category: ${product.category}`}
                        </small>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={product.href}
                          className="btn btn-primary btn-sm "
                          target="_blank"
                        >
                          Buy In Amazon
                        </Link>

                        <small className="text-body-secondary">{`Rs: ${product.price}`}</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
