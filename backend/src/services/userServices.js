import User from "../models/userModel.js"

export const registerUser = async (username, email, avator) =>{
    const newUser = new User({username, email, avator});
    await newUser.save();
    return newUser;
};

export const getUser = async (email) =>{
    const user = await User.findOne({email});
    return user;
};