import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    phone:{
        type:Number,
        required:[true,"Phone number is required"]
    },
    bloodGroup:{
        type:String,
        required:[true,"Blood group is required"],
        enum:["A+","A-","B+","B-","O+","O-","AB+","AB-"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    type:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
})

const User = models.User || model("User",userSchema)

export default User;