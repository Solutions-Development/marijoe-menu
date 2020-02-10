const { Router } = require("express");
const _ = require("../controllers/main");

const router = Router();

router.get('/', _.root);
router.get('/web', _.web);
router.get('/mobile', _.mobile);
router.get('/image', _.image);

module.exports = router;