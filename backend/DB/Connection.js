const mongoose = require("mongoose");

async function connect() {
    const uri = "mongodb+srv://rishabhtestapp:rishabhtestappnew@usersdata.hyp1wgm.mongodb.net/";
    try {
        await mongoose.connect(uri);
        console.log("✅ Connected to MongoDB");
    } catch (e) {
        console.error("❌ MongoDB connection error:", e);
        process.exit(1); // stop the server if DB connection fails
    }
}
module.exports = connect;

// rishabhtestapp
// rishabhtestappnew