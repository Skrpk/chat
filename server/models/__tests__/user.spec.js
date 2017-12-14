import test from 'ava';
import request from 'supertest';
import app from '../../server';
import User from '../user';
import { connectDB, dropDB } from '../../util/test-helpers';

// Initial users added into test db
const users = [
  new User({ name: 'Prashant' }),
  new User({ name: 'Mayank' }),
];

test.beforeEach('connect and add two users entries', t => {
  connectDB(t, () => {
    User.create(users, err => {
      if (err) t.fail('Unable to create posts');
    });
  });
});

test.afterEach.always(t => {
  dropDB(t);
});

test.serial('Should correctly give number of Users', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/api/users')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.deepEqual(users.length, res.body.users.length);
});

test.serial('Should send correct data when queried against a name', async t => {
  t.plan(2);

  const user = new User({ name: 'Foo' });
  await user.save();

  const res = await request(app)
    .get('/api/posts/Foo')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.is(res.body.user.name, user.name);
});

test.serial('Should correctly add a user', async t => {
  t.plan(2);

  const res = await request(app)
    .post('/api/users')
    .send({ user: { name: 'Foo' } })
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const savedUser = await User.findOne({ name: 'Foo' }).exec();
  t.is(savedUser.name, 'Foo');
});

test.serial('Should correctly delete a user', async t => {
  t.plan(2);

  const user = new User({ name: 'Foo' });
  await user.save();

  const res = await request(app)
    .delete(`/api/posts/${user.name}`)
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const queriedPost = await User.findOne({ cuid: user.name }).exec();
  t.is(queriedPost, null);
});
