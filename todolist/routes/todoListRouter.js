const router = require("express").Router();
const ctrl = require("../controllers/todoListCtrl");

router.post("/PwdConfirm",ctrl.post.pwdConfirm);
router.post("/login",ctrl.post.login);
router.post("/register",ctrl.post.register);
router.post("/IdConfirm",ctrl.post.findId.idConfirm);
router.post("/PhoneConfirm",ctrl.post.findId.phoneConfirm);

router.put("/PwdReset",ctrl.put.pwdReset);

module.exports = router;