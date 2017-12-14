import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const user1 = new User({ name: 'Admin' });
    const user2 = new User({ name: 'Admin1' });

    User.create([user1, user2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
