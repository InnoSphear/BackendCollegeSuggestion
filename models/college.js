import mongoose from "mongoose";

// Schema for individual course + fee
const CourseAndFeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: String,
  totalFees: String,
  seats: Number,
  level: String,
}, { _id: false });

const CutoffSchema = new mongoose.Schema({
  mbbs: String,
  md: String,
  bds: String,
}, { _id: false });

const FacultySchema = new mongoose.Schema({
  total: Number,
  studentRatio: String,
}, { _id: false });

const CollegeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  ownership: { type: String, enum: ['Government', 'Private'], required: true },
  established: String,
  state: String,
  city: String,
  category: String,
  courses: [String],
  logo: String,
  overview: String,
  coursesAndFees: [CourseAndFeeSchema],
  amenities: [String],
  cutoff: CutoffSchema,
  faculty: FacultySchema,
}, {
  timestamps: true,
  versionKey: false,
});

const College = mongoose.model("College", CollegeSchema);
export default College;
