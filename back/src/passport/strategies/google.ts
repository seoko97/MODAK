import GoogleStrategy from "passport-google-oauth20";
import { User } from "@src/models/schemas/user.model";

const passportConfig = {
  clientID: "",
  clientSecret: "",
  callbackURL: "",
};

export default new GoogleStrategy(passportConfig, async (req, accessToken, refreshToken, profile, done) => {
  // email, firstName, lastName, nickname, profileImg, source
  const email = profile.emails[0].value;
  const firstName = profile.name.givenName;
  const lastName = profile.name.familyName;
  const nickname = profile.name;
  const profileImg = profile.photos[0].value;
  const source = profile.provider;

  if (source !== "google") {
    return done(null, false, {
      message: "You have previously signed up with a different signin method",
    });
  }

  return done;
});
