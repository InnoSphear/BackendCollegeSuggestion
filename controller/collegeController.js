import College from "../models/college.js";

// @desc    Get all colleges
// @route   GET /api/colleges
export const getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find({});
    res.status(200).json({ colleges });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch colleges", error: error.message });
  }
};

// @desc    Get college by ID
// @route   GET /api/colleges/:id
export const getCollegeById = async (req, res) => {
  try {
    const college = await College.findOne({ id: req.params.id });
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.status(200).json(college);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch college", error: error.message });
  }
};

// @desc    Get college by slug
// @route   GET /api/colleges/slug/:slug
export const getCollegeBySlug = async (req, res) => {
  try {
    const college = await College.findOne({ slug: req.params.slug });
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.status(200).json(college);
  } catch (error) {
    res.status(500).json({ message: "Error fetching college by slug", error: error.message });
  }
};

// @desc    Create a new college
// @route   POST /api/colleges
export const createCollege = async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json({ message: "College created", college });
  } catch (error) {
    res.status(400).json({ message: "Failed to create college", error: error.message });
  }
};

// @desc    Update a college by ID
// @route   PUT /api/colleges/:id
export const updateCollege = async (req, res) => {
  try {
    const college = await College.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }

    res.status(200).json({ message: "College updated", college });
  } catch (error) {
    res.status(400).json({ message: "Failed to update college", error: error.message });
  }
};

// @desc    Delete a college by ID
// @route   DELETE /api/colleges/:id
export const deleteCollege = async (req, res) => {
  try {
    const college = await College.findOneAndDelete({ id: req.params.id });

    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }

    res.status(200).json({ message: "College deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete college", error: error.message });
  }
};
