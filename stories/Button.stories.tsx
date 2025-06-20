import { StarFourIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"

import { Button } from "@/components/ui/button-base"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-12">
      <section className="space-y-2.5">
        <h2 className="text-base font-semibold">Primary</h2>
        <Card className="">
          <CardContent className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                XS
              </span>
              <Button size="xs">Button</Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                sm
              </span>
              <Button size="sm">Button</Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                md
              </span>
              <Button size="md">Button</Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                lg
              </span>
              <Button size="lg">Button</Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="space-y-2.5">
        <h2 className="text-base font-semibold">Secondary</h2>
        <Card className="">
          <CardContent className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                XS
              </span>
              <Button size="xs" variant="secondary">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                sm
              </span>
              <Button size="sm" variant="secondary">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                md
              </span>
              <Button size="md" variant="secondary">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                lg
              </span>
              <Button size="lg" variant="secondary">
                Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-2.5">
        <h2 className="text-base font-semibold">Outline</h2>
        <Card className="">
          <CardContent className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                XS
              </span>
              <Button size="xs" variant="outline">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                sm
              </span>
              <Button size="sm" variant="outline">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                md
              </span>
              <Button size="md" variant="outline">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                lg
              </span>
              <Button size="lg" variant="outline">
                Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="space-y-2.5">
        <h2 className="text-base font-semibold">Ghost</h2>
        <Card className="">
          <CardContent className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                XS
              </span>
              <Button size="xs" variant="ghost">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                sm
              </span>
              <Button size="sm" variant="ghost">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                md
              </span>
              <Button size="md" variant="ghost">
                Button
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-cnt-tertiary text-xs font-semibold tracking-wider uppercase">
                lg
              </span>
              <Button size="lg" variant="ghost">
                Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}

export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Upgrade
        <StarFourIcon weight="bold" />
      </>
    ),
  },
}

export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <StarFourIcon weight="bold" />
        Upgrade
      </>
    ),
  },
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
