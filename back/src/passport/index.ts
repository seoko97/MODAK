import passport from "passport";
import google from "./strategies/google";

export default () => {
  passport.use("google", google);
  passport.initialize();
};
