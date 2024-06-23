const express = require("express");
const passport = require("passport");
const { signup, login, googleAuth } = require("../controllers/auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuth
);

module.exports = router;
