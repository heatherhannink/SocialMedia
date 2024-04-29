const router = require('express').Router()
const { thoughts} = require('../../models');


router.get('/', async (req, res) => {
    try {
      const thoughts = await thoughts.find({});
      res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//   async getSingleThought(req, res) {
//     try {
//       const thoughts = await thoughts.findOne({ _id: req.params.thoughtsId });

//       if (!thoughts) {
//         return res.status(404).json({ message: 'No thought with that ID' });
//       }

//       res.json(thoughts);
//     } catch (err) {
//       res.status(500).json(err)
//       console.log(err)
//     }
//   },
//   // create a new thought
//   async createThoughts(req, res) {
//     try {
//       const thoughts = await thoughts.create(req.body);
//       const users = await users.findOneAndUpdate(
//         { username: req.body.username },
//         { $addToSet: { thoughts: thoughts._id } },
//         { new: true }
//       );

//       if (!users) {
//         return res
//           .status(404)
//           .json({ message: 'thought created, but found no user with that ID' });
//       }

//       res.json('Created the thought 🎉');
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//    // update a thought
//    async updateThoughts(req, res) {
//     try {
//       const dbThoughtsData = await thoughts.updateOne({ _id: req.params.thoughtsId }, req.body);
//       res.json(dbThoughtsData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//    // delete a thought
//    async deleteThoughts(req, res) {
//     try {
//       const dbThoughtsData = await thoughts.findOneAndDelete({ _id: req.params.thoughtsId });
//       res.json(dbThoughtsData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//      // add a reaction
//      async addReaction(req, res) {
//       try {
//          const thoughts = await thoughts.findOneAndUpdate(
//           { _id: req.params.thoughtsId },
//           { $addToSet: { reactions: {
//             body: req.body.body,
//             username: req.body.username
//           } } },
//           { new: true }
//         );
//         res.json(thoughts)
//       } catch (err) {
//         res.status(500).json(err);
//         console.log(err)
//       }
//     },

//      // delete a reaction
//      async deleteReaction(req, res) {
//       try {
//         const thoughts = await thoughts.findOneAndUpdate(
//           { _id: req.params.thoughtsId },
//           { $pull: { reactions: {_id: req.params.reactionId} } },
//           { new: true }
//         );
//         res.json(thoughts)
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     },
// };

module.exports = router