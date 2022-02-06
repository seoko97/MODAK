import { Strategy as GoogleStrategy, StrategyOptions } from "passport-google-oauth20";
import { userService } from "../../services/user.service";
import { passportGoogleConfig } from "../../utils/constants";

const passportConfig: StrategyOptions = {
  clientID: passportGoogleConfig.clientID,
  clientSecret: passportGoogleConfig.clientSecret,
  callbackURL: passportGoogleConfig.callbackURL,
};

export default new GoogleStrategy(
  passportConfig,
  async (accessToken, refreshToken, profile, done) => {
    if (!profile) {
      console.log(profile);
      return done(null, false, {
        message: "You have previously signed up",
      });
    }

    const userInfo = {
      email: profile.emails?.[0].value as string,
      nickname: ((profile.name?.familyName as string) + profile.name?.givenName) as string,
      profileImg: profile.photos?.[0].value as string,
      source: "Google" as const,
    };

    const user = await userService.findOrCreate(userInfo);
    console.log("Not registered yet", user);
    return done(null, user);
  },
);
