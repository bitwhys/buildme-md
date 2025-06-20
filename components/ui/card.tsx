// Tremor Card [v1.0.0]

import React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cx } from "@/lib/style-utils"

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div"
    return (
      <Component
        ref={forwardedRef}
        className={cx(
          // base
          "dark:shadow-black-a12 shadow-2 border-gray-5 relative flex flex-col gap-6 rounded-2xl border py-6 dark:shadow-md",
          // background color, TODO: use a gradient in dark mode
          "bg-surface text-cnt-primary",
          // border color
          "dark:border-white-a2",
          className
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

Card.displayName = "Card"

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cx(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}
CardHeader.displayName = "CardHeader"

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cx("leading-none font-semibold", className)}
      {...props}
    />
  )
}
CardTitle.displayName = "CardTitle"

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cx("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
CardDescription.displayName = "CardDescription"

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cx("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}
CardAction.displayName = "CardAction"

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cx("px-6", className)} {...props} />
}
CardContent.displayName = "CardContent"

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cx("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
