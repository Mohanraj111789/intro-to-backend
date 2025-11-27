import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const post = await Post.create({ name, description, age });

    return res.status(201).json({
      message: "Post created successfully",
      post,
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
};

const Posts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
};

const updatePosts = async(req,res) =>{
    try{
        if(Object.keys(req.body) === 0)
        {
            res.status(400).json({message:"No data provide for Update"});
        }
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});

    }catch(error)
    {
        res.status(500).json({ message: "Server Error: " + error.message });
    }

};

export { createPost, Posts, updatePosts };
