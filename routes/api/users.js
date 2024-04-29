const router = require('express').Router()
const db = require('../../config/connection')
const { users } = require('../../models')

router.get('/', async (req, res) => {

  try {
    const result = await users.find({}).lean();
    res.status(200).json(result);
  } catch (err) {
    console.log('Alvinnnn');
    res.status(500).json({ error: 'You cotton headed nini muggins' });
  }
});

// const Users = require('../models/User');

// module.exports = {
//   async getUsers(req, res) {
//     try {
//       const users = await Users.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   async getSingleUsers(req, res) {
//     try {
//       const users = await Users.findOne({ _id: req.params.usersId })
//         .select('-__v')
//         .populate('posts');

//       if (!users) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       res.json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // create a new user
//   async createUsers(req, res) {
//     try {
//       const dbUsersData = await Users.create(req.body);
//       res.json(dbUsersData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // update a user
//   async updateUsers(req, res) {
//     try {
//       const dbUsersData = await Users.updateOne({ _id: req.params.usersId }, req.body);
//       res.json(dbUsersData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//    // delete a user
//    async deleteUsers(req, res) {
//     try {
//       const dbUsersData = await Users.findOneAndDelete({ _id: req.params.usersId });
//       res.json(dbUsersData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//    // add a friend
//    async addFriend(req, res) {
//     try {
//        const users = await Users.findOneAndUpdate(
//         { _id: req.params.usersId },
//         { $addToSet: { friends: friendId } },
//         { new: true }
//       );
//       res.json(users)
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//     // delete a friend
//     async deleteFriend(req, res) {
//       try {
//          const users = await Users.findOneAndUpdate(
//           { _id: req.params.usersId },
//           { $pull: { friends: friendId } },
//           { new: true }
//         );
//         res.json(users)
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     }
// };



module.exports = router;
