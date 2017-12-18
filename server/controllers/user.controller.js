import User from '../models/user';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newUser = new User(req.body);

  // Let's sanitize inputs
  newUser.name = sanitizeHtml(newUser.name);

  newUser.save((err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ name: newUser.name });
  });
}

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  User.findOne({ name: req.params.name }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ user });
  });
}

/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
  User.findOne({ name: req.params.name }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });
  });
}
