const router = require('express').Router()
const db = require('../../config/connection')
const { user } = require('../../models')

router.get('/', async (req, res) => {

  try {
    const result = await user.find({}).lean();
    res.status(200).json(result);
  } catch (err) {
    console.log('Alvinnnn');
    res.status(500).json({ error: 'You cotton headed nini muggins' });
  }
});

router.use("/users", usersRoutes);
module.exports = router;
