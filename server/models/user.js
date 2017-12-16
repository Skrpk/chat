import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema)

export default User;

export const U1 = new User({ name: 'anton' });
export const U2 = new User({ name: 'vitali' });

U1.save();
U2.save();
