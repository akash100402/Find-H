import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.7i35GvRSp092_L3KWHr4jgHaHv?rs=1&pid=ImgDetMain",
    },
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema);

export default User;