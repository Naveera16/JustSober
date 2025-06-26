const mongoose = require("mongoose");

const testimonial_Schema = mongoose.Schema({
  ClientName: { type: String, required: [true, "Required"] },
  Title: { type: String, required: [true, "Required"] },
  CompanyName: { type: String, required: [true, "Required"] },
  Feedback: { type: String, required: [true, "Required"] },

  TestimonalImg: { type: String, required: [true, "Required"] },
  TestimonalImgeID: { type: String, required: [true, "Required"] },
});

// Exporting the model directly
const tb_testimonial = mongoose.model("tb_testimonial", testimonial_Schema);
module.exports = tb_testimonial;
