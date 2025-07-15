import Comment from "../Modals/Comment.js";

const addComment = async (req, res) => {
  try {
    const {  video, message } = req.body;

    // Basic validation
    if ( !video || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newComment = new Comment({ user:req.user._id, video, message });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ error: error.message });
  }
};


const getComments = async (req, res) => {
    try {
        const { videoId } = req.params;
    
        // Validate videoId
        if (!videoId) {
        return res.status(400).json({ message: "Video ID is required." });
        }
    
        const comments = await Comment.find({ video: videoId })
        .populate('user', 'userName') // Populate user details
        .sort({ createdAt: -1 }); // Sort by creation date
    
        res.status(200).json(comments);
    } catch (error) {
        console.error("Get comments error:", error);
        res.status(500).json({ error: error.message });
    }
    }
// ✅ Named export
export { addComment , getComments };
