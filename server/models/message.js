import mongoose, { Schema } from 'mongoose';
import { U1, U2 } from './user';

const MessageSchema = new Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const MessageConstructor = mongoose.model('Message', MessageSchema);

const M1 = new MessageConstructor({ text: '111', author: U1._id });
const M2 = new MessageConstructor({ text: '222', author: U2._id });

M1.save();
M2.save();

export default MessageConstructor;
