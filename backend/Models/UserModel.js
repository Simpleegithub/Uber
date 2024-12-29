import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, "Last name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Email must be at least 3 characters"],
  },

  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
