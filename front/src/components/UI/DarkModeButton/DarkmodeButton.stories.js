import DarkModeButton from "@components/UI/DarkModeButton";

export default {
  title: "Components/UI/DarkModeButton",
  component: DarkModeButton,
};

export const DarkModeButtonTest = (props) => <DarkModeButton {...props} />;

DarkModeButtonTest.args = {
  mode: "light",
  onClick: () => undefined,
};

DarkModeButtonTest.args = {
  mode: "dark",
  onClick: () => undefined,
};
