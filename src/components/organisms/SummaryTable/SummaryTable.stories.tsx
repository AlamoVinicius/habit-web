import { SummaryTable } from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "components/oranisms/ButtonVioletBorder",
  component: SummaryTable,
} as ComponentMeta<typeof SummaryTable>;

const Template: ComponentStory<typeof SummaryTable> = () => <SummaryTable />;

export const Default = Template.bind({});

Default.args = {};
