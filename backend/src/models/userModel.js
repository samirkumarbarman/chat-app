import mongoose from "mongoose";

const userSchmea = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },

    email :{
        type : String,
        required : true,
    },

    profilePic :{
        type : String,
        required : true,
    },

}, { timestamps : true });

const User = mongoose.model("User", userSchmea);

export default User;