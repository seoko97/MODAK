import { Strategy as GoogleStrategy, StrategyOptions } from "passport-google-oauth20";
import { findOrCreate } from "../../services/user.service";
import { passportGoogleConfig } from "../../utils/constants";

const passportConfig: StrategyOptions = {
  clientID: passportGoogleConfig.clientID,
  clientSecret: passportGoogleConfig.clientSecret,
  callbackURL: passportGoogleConfig.callbackURL,
};

export default new GoogleStrategy(
  passportConfig,
  async (req, accessToken, refreshToken, profile, done) => {
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

    const user = await findOrCreate({ email, firstName, lastName, nickname, profileImg, source });

    return done(null, user);
  },
);
