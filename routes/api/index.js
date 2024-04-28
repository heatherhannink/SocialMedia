const express = require('express');
const app = express();
const router = express.Router();
// const thoughtRoutes = require('./thought');
const usersRoutes = require("./users");
// router.use("/thoughts", thoughtRoutes);
router.use("/users", usersRoutes);



module.exports = router;