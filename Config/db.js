import mongoose from "mongoose";

const uri = "mongodb+srv://innosphear:ujjwal@cluster0.vqzto1i.mongodb.net/";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ Failed to connect:", err));

export default connectDb;
