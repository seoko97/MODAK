import React from "react";
import DarkModeButton from "@molecules/DarkModeButton";
import { Story, Meta } from "@storybook/react";
import { Props } from "./DarkModeButton";

export default {
  title: "Molecules/DarkModeButton",
  component: DarkModeButton,
} as Meta;

export const Light: Story<Props> = (props) => <DarkModeButton {...props} />;

Light.args = {
  mode: "light",
  onClick: () => undefined,
};

export const Dark: Story<Props> = (props) => <DarkModeButton {...props} />;

Dark.args = {
  mode: "dark",
  onClick: () => undefined,
};
