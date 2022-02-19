import { Strategy as KakaoStrategy, StrategyOption } from "passport-kakao";
import { userService } from "@services/user.service";
import { passportKakaoConfig } from "@utils/constants";

const passportConfig: StrategyOption = {
  clientID: passportKakaoConfig.clientID,
  clientSecret: passportKakaoConfig.clientSecret,
  callbackURL: passportKakaoConfig.callbackURL,
};

export default new KakaoStrategy(
  passportConfig,
  async (accessToken, refreshToken, profile, done) => {
    if (!profile) {
      return done(null, undefined, {
        message: "Error",
      });
    }

    const userInfo = {
      email: profile._json.kakao_account.email as string,
      nickname: profile.displayName as string,
      profileImg: profile._json.properties.profile_image as string,
      source: "Kakao" as const,
    };

    const { _id } = await userService.findOrCreate(userInfo);
    return done(null, { _id });
  },
);
