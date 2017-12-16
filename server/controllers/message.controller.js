import Message from '../models/message';

export function getMessages(req, res) {
  Message.find()
         .populate({ path: 'author', select: 'name' })
         .exec((err, messages) => {
           res.send(messages);
         });
}
