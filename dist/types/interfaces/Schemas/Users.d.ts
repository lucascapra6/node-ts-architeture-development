import { Document, Model } from 'mongoose';
interface IUser {
    name: string;
    lastName: string;
    id?: string;
    password?: string;
}
interface IUserDocument extends IUser, Document {
}
interface IUserModel extends Model<IUserDocument> {
}
export { IUser, IUserDocument, IUserModel };
