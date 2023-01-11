const Bootcamp = require("../models/Bootcamp");

//@desc     GET all bootcamps
//@routes   GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//@desc     GET single bootcamp
//@routes   GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

//@desc     Create new bootcamp
//@routes   POST /api/v1/bootcamps
//access    Private

exports.createBootcamp = async (req, res) => {
  const bootcamp = await Bootcamp.create(req.body);
  try {
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
    console.log(data);
    console.log("bootcamp created");
  } catch (err) {
    res.status(400).json({ success: false });
    console.log(err);
  }
};

//desc    Update bootcamp
//@routes   PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
