import jsonwebtoken from "jsonwebtoken";
import User from "../Modals/User.js";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "Please login to access" });
    }

    // Verify token
    const decoded = jsonwebtoken.verify(token, "its my secret key");

    // Find user (optional: can attach user info to req)
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "Invalid token or user no longer exists." });
    }

    req.user = user; // now accessible in protected routes
    next();

  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};

export default auth;
