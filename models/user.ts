import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  ipAddress: { type: String, require: false },
});

const User = models.User || model('User', userSchema);

export default User;
