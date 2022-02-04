import { Strategy as FacebookStrategy, StrategyOption } from "passport-facebook";
import { userService } from "../../services/user.service";
import { passportFacebookConfig } from "../../utils/constants";

const passportConfig: StrategyOption = {
  clientID: passportFacebookConfig.clientID,
  clientSecret: passportFacebookConfig.clientSecret,
  callbackURL: passportFacebookConfig.callbackURL,
  profileFields: ["id", "displayName", "photos", "emails"],
};

export default new FacebookStrategy(
  passportConfig,
  async (accessToken, refreshToken, profile, done) => {
    if (!profile) {
      return done(null, false, {
        message: "You have previously signed up",
      });
    }

    const userInfo = {
      email: profile.photos?.[0].value as string,
      nickname: profile.displayName as string,
      profileImg: profile.emails?.[0].value as string,
      source: "Facebook" as const,
    };

    const user = await userService.findOrCreate(userInfo);

    return done(null, user);
  },
);
