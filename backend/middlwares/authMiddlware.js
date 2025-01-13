import jwt from "jsonwebtoken";
import asyncHandler from "async-handler";
import User from "../models/userModel.js";

//authentication setup

const protector = asyncHandler(async (req, res, next) => {
  let token;
  token = res.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.token).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized , Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});

export { protector };
