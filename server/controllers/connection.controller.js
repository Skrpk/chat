import Message from '../models/message';
import User from '../models/user';

class ClientsObservable {
  listeners = []

  addListener = client => this.listeners.push(client)

  sendMessage = ({ name, message }) => {
    User.findOne({ name })
        .exec((err, user) => {
          if (err) {
            throw err;
          }

          const newMessage = new Message({
            text: message,
            author: user._id,
          });

          newMessage.save();
        });

    this.listeners.forEach(client =>
      client.emit('message', {
        text: message,
        author: { name },
      }));
  }
}

export default new ClientsObservable();

