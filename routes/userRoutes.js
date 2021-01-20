const app = require('express');
const {register , registerValidator , login , loginValidator} = require("../controllers/userController");
const router =  app.Router();
router.post("/register" , registerValidator , register);
router.post("/login" , loginValidator , login);
module.exports = router;