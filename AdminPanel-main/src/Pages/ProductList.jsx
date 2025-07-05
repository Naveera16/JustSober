import React, { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

const ProductList = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [products, setProducts] = useState([]);

  const addmodalRef = useRef(null);

  const OpenAddModal = () => {
    const modalInstance = new Modal(addmodalRef.current);
    modalInstance.show();
  };

  const handleImageChange = (e) => {
    setProductImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      productName === "" ||
      price === "" ||
      description === "" ||
      rating === "" ||
      productImages.length === 0
    ) {
      alert("Please fill all fields and upload images.");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("rating", rating);
    productImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.status === 201) {
        alert("Product Created Successfully!");
        fetchProducts();
      } else {
        alert("Error creating product.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }

    const modalInstance = Modal.getInstance(addmodalRef.current);
    modalInstance.hide();

    setProductName("");
    setPrice("");
    setDescription("");
    setRating("");
    setProductImages([]);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      if (response.ok) {
        setProducts(data.data);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Product List</h1>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 mt-2 font-weight-bold text-primary">
                    View Products
                  </h6>
                  <div className="float-right d-inline">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-2"
                      onClick={OpenAddModal}
                    >
                      <i className="fa fa-plus"></i> Add New
                    </button>
                  </div>
                </div>

                {/* Add Product Modal */}
                <div
                  ref={addmodalRef}
                  className="modal fade"
                  id="addProductModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog-centered modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add Product
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => {
                            const modalInstance = Modal.getInstance(
                              addmodalRef.current
                            );
                            modalInstance.hide();
                          }}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Product Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              value={productName}
                              onChange={(e) => setProductName(e.target.value)}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Price *</label>
                            <input
                              type="number"
                              className="form-control"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Description *</label>
                            <textarea
                              className="form-control"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                            ></textarea>
                          </div>

                          <div className="form-group">
                            <label>Rating *</label>
                            <input
                              type="number"
                              step="0.1"
                              max="5"
                              className="form-control"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Product Images *</label>
                            <input
                              type="file"
                              className="form-control-file"
                              multiple
                              onChange={handleImageChange}
                              required
                            />
                          </div>

                          {productImages.length > 0 &&
                            productImages.map((img, idx) => (
                              <img
                                key={idx}
                                src={URL.createObjectURL(img)}
                                alt="Product"
                                className="img-thumbnail m-1"
                                style={{ maxWidth: "100px" }}
                              />
                            ))}

                          <button
                            type="submit"
                            className="btn btn-primary mt-4"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-center">SL</th>
                          <th className="text-center">Product Name</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Description</th>
                          <th className="text-center">Rating</th>
                          <th className="text-center">Images</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <tr key={product.id} className="text-center">
                            <td>{index + 1}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.rating}</td>
                            <td>
                              {product.images?.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  alt="Product"
                                  className="img-thumbnail m-1"
                                  style={{ maxWidth: "100px" }}
                                />
                              ))}
                            </td>
                            <td>
                              <button className="btn btn-warning btn-sm mr-2">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button className="btn btn-danger btn-sm">
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
