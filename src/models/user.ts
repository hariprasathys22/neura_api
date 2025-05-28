import mongoose, {Schema, Document, Types} from "mongoose";

interface IUser extends Document {
    _id: Types.ObjectId;
    username: string; 
    email: string; 
    mobile: string;
    password: string;
}

const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    mobile: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
})

const User = mongoose.model<IUser>("User", UserSchema);
export default User; 
