import Mongoose from "mongoose";
export declare const CustomUserModel: Mongoose.Model<{
    id: string;
    name: string;
    lastName: string;
    password: string;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    id: string;
    name: string;
    lastName: string;
    password: string;
}> & Omit<{
    id: string;
    name: string;
    lastName: string;
    password: string;
} & {
    _id: Mongoose.Types.ObjectId;
}, never>, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    id: string;
    name: string;
    lastName: string;
    password: string;
}, Mongoose.Document<unknown, {}, Mongoose.FlatRecord<{
    id: string;
    name: string;
    lastName: string;
    password: string;
}>> & Omit<Mongoose.FlatRecord<{
    id: string;
    name: string;
    lastName: string;
    password: string;
}> & {
    _id: Mongoose.Types.ObjectId;
}, never>>>;
