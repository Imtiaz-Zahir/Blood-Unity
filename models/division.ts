import { Schema, model, models } from "mongoose";

const divisionSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    bn_name:{
        type:String,
        required:[true,"Bangla name is required"]
    }
})

const Division = models.Division || model("Division",divisionSchema)

export default Division;