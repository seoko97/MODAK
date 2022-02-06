import { Strategy as KakaoStrategy, StrategyOption } from "passport-kakao";
import { userService } from "../../services/user.service";
import { passportKakaoConfig } from "../../utils/constants";

const passportConfig: StrategyOption = {
  clientID: passportKakaoConfig.clientID,
  clientSecret: passportKakaoConfig.clientSecret,
  callbackURL: passportKakaoConfig.callbackURL,
};

export default new KakaoStrategy(
  passportConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      if (!profile) {
        return done(null, false, {
          message: "Error",
        });
      }

      const userInfo = {
        email: profile._json?.kakao_account_email as string,
        nickname: profile.displayName as string,
        profileImg: profile._json.properties.profile_image as string,
        source: "Kakao" as const,
      };

      const user = await userService.findOrCreate(userInfo);
      console.log("Kakao profile: ", user);
      return done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  },
);
