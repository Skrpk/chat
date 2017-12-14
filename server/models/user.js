import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  _id: Schema.Types.ObjectId,
});

export default mongoose.model('User', userSchema);
