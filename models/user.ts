import { Schema, model, models } from 'mongoose';

// interface User {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   ipAddress: string;
// }

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  ipAddress: { type: String, require: true },
});

const User = models.User || model('User', userSchema);

export default User;
