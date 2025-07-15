import User from '../Modals/User.js';
import bcrypt from 'bcryptjs'; // Install via: npm install bcryptjs
import jsonwebtoken from "jsonwebtoken";

const cookieOption = {
  httpOnly: true, // prevents client-side JS from accessing the cookie
  secure: false, // true if using HTTPS
  sameSite: 'Lax'

};


const signup = async (req, res) => {
  try {
    const { channelName, userName, email, password } = req.body;

    // 1. Basic validation
    if (!channelName || !userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create and save user
    const newUser = new User({
      channelName,
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // 5. Send success response
    res.status(201).json({ message: "User created successfully", user: newUser });
    
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // 1. Check for required fields
    if (!userName || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    // 2. Find the user by username
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // 3. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }
        const token= jsonwebtoken.sign({userId:user._id},"its my secret key")
        res.cookie('token',token,cookieOption);
    // 4. Return success (You can also add JWT later)
    res.status(200).json({ message: "Login successful", user,token });
    
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout =async (req,res) =>{
res.clearCookie('token',cookieOption).json({message:'logged out'})

}

export { signup, login ,logout};
