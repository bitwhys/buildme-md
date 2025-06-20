import { useEffect } from "react"
import { withThemeByClassName } from "@storybook/addon-themes"
import { Decorator, Preview } from "@storybook/nextjs-vite"

import "@/styles/globals.css"

import { Lexend } from "next/font/google"

import { cx } from "@/lib/style-utils"

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
}

export default preview

const withThemeProvider: Decorator = (Story, { parameters }) => {
  useEffect(() => {
    // Ensure the theme is set on the HTML element
    document.documentElement.classList.add(lexendSans.variable, "antialiased")
  }, [])
  const { accentColor = "plum", grayColor = "slate" } = parameters
  return (
    <div data-accent-color={accentColor} data-gray-color={grayColor}>
      <Story />
    </div>
  )
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeProvider,
]
