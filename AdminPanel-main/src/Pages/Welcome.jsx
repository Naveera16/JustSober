import React from "react";

const Welcome = () => {
return (
<div id="page-top">
<div id="wrapper">
<div id="content-wrapper" className="d-flex flex-column">
<div id="content">
<div className="container-fluid">
<h1 className="h3 mb-3 text-gray-800">Add Product</h1>


          <div className="card shadow mb-4">
            <div className="card-body">
              <form
                action="#"
                encType="multipart/form-data"
                method="post"
                acceptCharset="utf-8"
              >
                <div className="form-group">
                  <label>Product Images (3 Photos)</label>
                  <div className="d-flex flex-column gap-2">
                    <input type="file" name="photo1" className="form-control mb-2" />
                    <input
                      type="hidden"
                      name="current_photo"
                      value="welcome.jpg"
                    />

                    <input type="file" name="photo2" className="form-control mb-2" />
                    <input type="file" name="photo3" className="form-control" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Product Name *</label>
                  <input
                    type="text"
                    name="product_name"
                    className="form-control"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Price *</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="5"
                    placeholder="Enter product description"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Rating (Stars out of 5) *</label>
                  <input
                    type="number"
                    name="stars"
                    min="1"
                    max="5"
                    className="form-control"
                    placeholder="Enter rating"
                    required
                  />
                </div>

                <button
                      type="submit"
                      className="btn btn-danger"
                      name="form1"
                    >
                      Update
                    </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Welcome;