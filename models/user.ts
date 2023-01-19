import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<User>({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
});

const User = mongoose.model('user', userSchema);
export default User;
