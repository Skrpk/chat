import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Message', MessageSchema);
