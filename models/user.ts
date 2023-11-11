import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    phone:{
        type:String,
        unique:true,
        required:[true,"Phone number is required"]
    },
    bloodGroup:{
        type:String,
        required:[true,"Blood group is required"],
        enum:["A+","A-","B+","B-","O+","O-","AB+","AB-"]
    },
    division:{
        type:Schema.Types.ObjectId,
        ref:"Division",
        required:[true,"Division is required"],
    },
    district:{
        type:Schema.Types.ObjectId,
        ref:"District",
        required:[true,"District is required"]
    },
    upazila:{
        type:Schema.Types.ObjectId,
        ref:"Upazila",
        required:[true,"Upazila is required"]
    },
    type:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    varyfied:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const User = models.User || model("User",userSchema)

export default User;