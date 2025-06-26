import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Modal } from "bootstrap";

const Testimonal = () => {

  // CREATE
  // State variables
  const [clientName, setClientName] = useState("");
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [feedback, setFeedback] = useState(""); // Renamed to avoid confusion
  const [testimonialImage, setTestimonialImage] = useState(null);
  // const [testimonials, setTestimonials] = useState([]);

  // Modal references
  const addmodalRef = useRef(null);

  // Open Add Modal function
  const OpenAddModal = () => {
    const modalInstance = new Modal(addmodalRef.current);
    modalInstance.show();
  };
  // Handle image change
  const handleImageChange = (e) => {
    setTestimonialImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      clientName === "" ||
      title === "" ||
      companyName === "" ||
      !testimonialImage ||
      feedback === ""
    ) {
      alert("Please fill in all the required fields first!");
    } else {
      // Close the modal if fields are filled
      const modalInstance = Modal.getInstance(addmodalRef.current);
      modalInstance.hide();

      // Prepare the FormData object
      const formData = new FormData();

      // Append data to FormData object
      formData.append("clientName", clientName);
      formData.append("title", title);
      formData.append("companyName", companyName);
      formData.append("feedback", feedback); // Added feedback
      formData.append("testimonialImage", testimonialImage);

     try {
       // Send the FormData to the server via POST request
       const response = await fetch("http://localhost:5000/testimonials", {
         method: "POST", // POST 
         body: formData, // Send objectt
       });

       const result = await response.json();

       if (response.status === 201) {
         // If the event is created successfully
         alert("Testimonials Created Successfully!");
       } else {
         alert("An error creating the event.");
       }
     } catch (errror) {
       // Handle any errors during the fetch request
       alert("Error: ", errror.message);
     }
    }
  };


  //get

  const [comments, setComments] = useState([]);

  useEffect(() => {
    //---fetching events
    const fetchTestimonials = async () => {
      try {
        const Response = await fetch("http://localhost:5000/testimonials");
        const fetchData = await Response.json();
        if (Response.ok) {
          setComments(fetchData.data);
        }
      } catch (error) {
        console.log({ Error: error });
      }
    };

    fetchTestimonials();
  });

  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <h1 className="h3 mb-3 text-gray-800">Events</h1>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 mt-2 font-weight-bold text-primary">
                    View Testimonial
                  </h6>
                  <div className="float-right d-inline">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => OpenAddModal()}
                    >
                      <i className="fa fa-plus"></i> Add New
                    </button>
                  </div>
                </div>

                {/* Add Event Modal */}
                <div
                  ref={addmodalRef}
                  className="modal fade"
                  id="addEventModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog-centered modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add Event
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
                            <label>Client Name *</label>
                            <input
                              onChange={(e) => setClientName(e.target.value)}
                              type="text"
                              className="form-control"
                              value={clientName}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Title *</label>
                            <input
                              onChange={(e) => setTitle(e.target.value)}
                              type="text"
                              className="form-control"
                              value={title}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Company Name *</label>
                            <input
                              onChange={(e) => setCompanyName(e.target.value)}
                              type="text"
                              className="form-control"
                              value={companyName}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Feedback *</label>
                            <input
                              onChange={(e) => setFeedback(e.target.value)}
                              type="text"
                              className="form-control"
                              value={feedback}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Testimonial Image *</label>
                            <input
                              type="file"
                              className="form-control-file"
                              onChange={handleImageChange}
                              required
                            />
                          </div>

                          {testimonialImage && (
                            <div>
                              <img
                                style={{ maxWidth: "120px" }}
                                alt="Selected testimonial"
                                className="img-thumbnail"
                                // src={URL.createObjectURL(testimonialImage)}
                              />
                            </div>
                          )}
                          <div className="col-3">
                            <div
                              style={{
                                backgroundColor: "#98939378",
                                width: "100px",
                                height: "100px",
                                color: "grey",
                                fontSize: "13px",
                              }}
                              className="px-3 py-4 text-center"
                            >
                              No Image selected
                            </div>

                            <img
                              style={{ maxWidth: "120px" }}
                              alt=""
                              className=" img-thumbnail "
                              // src={IMG}
                            />
                          </div>

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
                          <th className="text-center">Client Name</th>

                          <th className="text-center">Title</th>
                          <th className="text-center">Designation</th>
                          <th className="text-center">Feedback</th>
                          <th className="text-center">Image</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* hello */}

                        {comments.map((testimonial, index) => (
                          <tr className="text-center" key={testimonial.id}>
                            <td>{index + 1}</td>
                            <td>{testimonial.clientName}</td>
                            <td>{testimonial.feedback}</td>
                            <td>
                              <img
                                style={{ maxWidth: "120px" }}
                                alt="Testimonial Image"
                                className="img-thumbnail"
                                src={testimonial.image}
                              />
                            </td>
                            <td>{testimonial.companyName}</td>
                            <td>
                              <button
                                className="btn btn-warning btn-sm mr-2"
                                // onClick={() =>
                                //   OpenUpdateModal(
                                //     testimonial.id,
                                //     testimonial.clientName,
                                //     testimonial.feedback,
                                //     testimonial.image,
                                //     testimonial.companyName
                                //   )
                                // }
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                // onClick={() =>
                                //   handleDelete(
                                //     testimonial.id,
                                //     testimonial.clientName,
                                //     testimonial.image
                                //   )
                                // }
                              >
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

      {/* Edit Event Modal */}
    </div>
  );
};

export default Testimonal;
