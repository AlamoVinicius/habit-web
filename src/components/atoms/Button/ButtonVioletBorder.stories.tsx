import { ButtonVioletBorder } from "./index";
import { Plus } from "phosphor-react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "components/atoms/ButtonVioletBorder",
  component: ButtonVioletBorder,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof ButtonVioletBorder>;

const Template: ComponentStory<typeof ButtonVioletBorder> = (args) => (
  <ButtonVioletBorder {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <Plus size={20} className="text-violet-500" />,
};
