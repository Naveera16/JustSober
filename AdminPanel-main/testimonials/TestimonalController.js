const tb_testimonial = require("../Models/Testimonals");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// Create a Testimonial
async function createTestimonial(req, res) {
  const { ClientName, Title, CompanyName } = req.body;
  const TestimonialImg = req.file;
  const TestimonialImgPath = TestimonialImg.path;
  const TestimonialImgID = TestimonialImg.filename;

  try {
    const newTestimonial = await tb_testimonial.create({
      ClientName,
      Title,
      CompanyName,
      Feedback,
      TestimonialImg: TestimonialImgPath,
      TestimonialImgID,
    });
    return res.status(201).send({ data: newTestimonial });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Get All Testimonials
async function getTestimonials(req, res) {
  try {
    const testimonials = await tb_testimonial.find();
    return res.status(200).send({ data: testimonials });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

//  Delete a Testimonial
async function deleteTestimonial(req, res) {
  const ID = req.params.id;

  try {
    const testimonial = await tb_testimonial.findById(ID);
    if (!testimonial)
      return res.status(404).send({ error: "Testimonial not found" });

    // Delete the image from Cloudinary
    await cloudinary.uploader.destroy(testimonial.TestimonialImgID);

    // Delete the testimonial document
    await tb_testimonial.deleteOne({ _id: ID });
    return res
      .status(200)
      .send({ message: "Testimonial deleted successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

//  Update a Testimonial
async function updateTestimonial(req, res) {
  const ID = req.params.id;
  const { ClientName, Title, CompanyName, oldImage, oldImageID } = req.body;
  const newImage = req.file;

  let TestimonialImgPath = oldImage;
  let TestimonialImgID = oldImageID;

  if (newImage) {
    // If a new image is provided, upload it and delete the old one
    await cloudinary.uploader.destroy(oldImageID);
    TestimonialImgPath = newImage.path;
    TestimonialImgID = newImage.filename;
  }

  try {
    const updatedTestimonial = await tb_testimonial.findByIdAndUpdate(
      ID,
      {
        ClientName,
        Title,
        CompanyName,
        TestimonialImg: TestimonialImgPath,
        TestimonialImgID,
      },
      { new: true }
    );

    if (!updatedTestimonial)
      return res.status(404).send({ error: "Testimonial not found" });
    return res.status(200).send({ data: updatedTestimonial });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

module.exports = {
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
  updateTestimonial,
};
