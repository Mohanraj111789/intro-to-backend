import {User} from '../models/user.model.js';

const registerUser = async (req, res) => {
    try {
        const {username, password, email} = req.body;

        //basic validation
        if(!username || !password || !email){
            return res.status(400).json({message: "All fields are required"});
        }
        //check if user exists
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if(existingUser){
            return  res.status(409).json({message: "User already exists"});
        }

        //create new user
        const newUser = new User({
            username,

            password,
            email: email.toLowerCase(),
            loggedIn: false,
        });
        await newUser.save();
        res.status(201).json({message: "User registered successfully"});

    }catch (error) {
        res.status(500).json({message: "Server Error: " + error.message});
    }
};

export {registerUser};