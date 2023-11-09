import { Schema, model, models } from "mongoose";

const districtSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    bn_name:{
        type:String,
        required:[true,"Bangla name is required"]
    },
    division:{
        type:Schema.Types.ObjectId,
        ref:"Division",
        required:[true,"Division is required"]
    }
})

const District = models.District || model("District",districtSchema)

export default District;