import Message from '../models/message';

export function getMessages(req, res) {
  Message.find()
         .populate('author')
         .exec((err, messages) => {
           res.send(messages);
         });
}
