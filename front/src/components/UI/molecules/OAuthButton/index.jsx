import Image from "next/image";
import * as OAuthButtonConponent from "./styles";

const innerText = (source) => {
  const text = source === "Google" ? `Sign in with ${source}` : `Login with ${source}`;

  return text;
};

const SelectIcon = ({ source }) => {
  let imgSrc = "";
  if (source === "Google") {
    imgSrc = `/${source}.png`;
  } else if (source === "Facebook") {
    imgSrc = `/${source}.png`;
  } else {
    imgSrc = `/${source}.png`;
  }

  return (
    <OAuthButtonConponent.IconBox>
      <Image src={imgSrc} alt="" width="100%" height="100%" />
    </OAuthButtonConponent.IconBox>
  );
};

const OAuthButton = ({ source }) => {
  const text = innerText(source);
  return (
    <OAuthButtonConponent.StyledOauthButton source={source}>
      <SelectIcon source={source} />
      <OAuthButtonConponent.StyledText source={source}>{text}</OAuthButtonConponent.StyledText>
    </OAuthButtonConponent.StyledOauthButton>
  );
};

export default OAuthButton;
