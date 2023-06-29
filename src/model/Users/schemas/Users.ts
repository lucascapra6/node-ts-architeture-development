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
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    }
})
export const UserModel = Mongoose.model('Users', usersSchema);
