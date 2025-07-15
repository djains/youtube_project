import Video from "../Modals/Video.js";

const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink } = req.body;

    // Basic validation
    if (!title || !videoLink) {
      return res.status(400).json({ message: "Title and video URL are required." });
    }

    // Create video document
    const newVideo = new Video({
        user: req.user._id, // assumes auth middleware sets req.user
      title,
      description,
      videoLink,
    });

    await newVideo.save();

    res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const  allvideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'userName channelName');
    res.status(200).json(videos);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getvideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('user', 'userName channelName');
    if (!video) {
      return res.status(404).json({ message: "Video not found." });
    }
    res.status(200).json(video);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllVideosuserid = async (req, res) => {
  try {
    let userid = req.params.userid;
    const videos = await Video.find({user:userid}).populate('user', 'userName channelName');
    res.status(200).json(videos);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export  {uploadVideo, allvideos, getvideoById, getAllVideosuserid}
