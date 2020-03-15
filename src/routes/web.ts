import { Router } from 'express';
import { getFriends, addFriend } from '../controllers/FriendController';

const router = Router();

router.get('/get-friends', getFriends);
router.get('/add-friend', addFriend);

export {
  router
};