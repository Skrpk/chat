import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Posts
router.route('/users').get(UserController.getUsers);

// Get one post by cuid
router.route('/users/:name').get(UserController.getUser);

// Add a new Post
router.route('/user').post(UserController.addUser);

// Delete a post by cuid
router.route('/users/:cuid').delete(UserController.deleteUser);

export default router;
