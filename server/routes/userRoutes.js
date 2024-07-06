const {register} = require("../Controllers/usersController")
const {login} = require("../Controllers/usersController")
const router = require("express" ).Router();

router.post("/register",register);
router.post("/login",login)

module.exports = router