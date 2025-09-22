const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   // ✅ fixed
    },
    email: {
        type: String,
        required: true,  // ✅ fixed
         unique: true,
    },
    password: {
        type: String,
        required: true,   // ✅ fixed
    },
    username: {
        type: String,
        required: true,   // ✅ fixed
         unique: true,
    },
});

const UserModel = mongoose.model("Userdata", userSchema);

module.exports = UserModel;