import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"

import { Button } from "@/components/ui/button-base"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}
export const Light: Story = {
  args: {
    variant: "light",
  },
}
export const Ghost: Story = {
  args: {
    variant: "ghots",
  },
}
export const Danger: Story = {
  args: {
    variant: "danger",
  },
}

export const WithTrailingIcon: Story = {
  args: {},
}

export const WithLeadingIcon: Story = {
  args: {},
}

export const WithDisabled: Story = {
  args: {
    disabled: true,
  },
}
export const Loading: Story = {
  name: "Is Loading",
  args: {
    isLoading: true,
  },
}
export const LoadingWithChildren: Story = {
  name: "Is Loading With Children",
  args: {
    isLoading: true,
    children: "Loading...",
  },
}
export const LoadingWithText: Story = {
  name: "Is Loading With Loading Text",
  args: {},
}
export const AsChildAnchor: Story = {
  args: {},
}
export const AnchorWithBadgeVariants: Story = {
  name: "Anchor with Badge Variants Style",
  args: {},
}
