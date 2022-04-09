import { ComponentMeta, ComponentStory } from "@storybook/react";

import Keren from ".";

export default {
  title: "Keren",
  component: Keren
} as ComponentMeta<typeof Keren>;

export const Basic: ComponentStory<typeof Keren> = () => <Keren />;
