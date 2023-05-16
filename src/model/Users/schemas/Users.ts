import Mongoose from "mongoose";
const usersSchema = new Mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName:{
        type: String,
        required: true
    },
    id: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})
export const UserModel = Mongoose.model('Users', usersSchema);
