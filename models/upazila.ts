import { Schema, model, models } from "mongoose";

const upazilaSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    bn_name:{
        type:String,
        required:[true,"Bangla name is required"]
    },
    district:{
        type:Schema.Types.ObjectId,
        ref:"District",
        required:[true,"District is required"]
    }
})

const Upazila = models.Upazila || model("Upazila",upazilaSchema)

export default Upazila;