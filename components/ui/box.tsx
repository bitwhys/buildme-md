import React from "react"
import { HeartIcon, StarIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const Box = () => {
  // Button data structure to generate buttons programmatically
  const buttonData = [
    // Small buttons (xs) - first row
    {
      size: "xs",
      variants: [
        {
          color: "cyan",
          state: "default",
          position: { top: "6px", left: "6px" },
        },
        {
          color: "red",
          state: "default",
          position: { top: "6px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "6px", left: "269px" },
        },
        {
          color: "ghost",
          state: "default",
          position: { top: "6px", left: "514px" },
        },
      ],
    },
    // Small buttons (xs) - second row
    {
      size: "xs",
      variants: [
        {
          color: "cyan",
          state: "disabled",
          position: { top: "200px", left: "6px" },
        },
        {
          color: "red",
          state: "disabled",
          position: { top: "200px", left: "759px" },
        },
        {
          color: "white",
          state: "disabled",
          position: { top: "200px", left: "269px" },
        },
        {
          color: "ghost",
          state: "disabled",
          position: { top: "200px", left: "514px" },
        },
      ],
    },
    // Small buttons (xs) - third row
    {
      size: "xs",
      variants: [
        {
          color: "cyan",
          state: "focused",
          position: { top: "112px", left: "6px" },
        },
        {
          color: "red",
          state: "focused",
          position: { top: "112px", left: "759px" },
        },
        {
          color: "white",
          state: "focused",
          position: { top: "112px", left: "269px" },
        },
        {
          color: "ghost",
          state: "focused",
          position: { top: "112px", left: "514px" },
        },
      ],
    },
    // Small buttons (xs) - fourth row
    {
      size: "xs",
      variants: [
        {
          color: "cyan-dark",
          state: "default",
          position: { top: "156px", left: "6px" },
        },
        {
          color: "red-dark",
          state: "default",
          position: { top: "156px", left: "759px" },
        },
        {
          color: "gray",
          state: "default",
          position: { top: "156px", left: "268px" },
        },
        {
          color: "ghost-gray",
          state: "default",
          position: { top: "156px", left: "514px" },
        },
      ],
    },
    // Small buttons (xs) - fifth row
    {
      size: "xs",
      variants: [
        {
          color: "cyan-light",
          state: "default",
          position: { top: "68px", left: "6px" },
        },
        {
          color: "red-light",
          state: "default",
          position: { top: "68px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "68px", left: "269px" },
        },
        {
          color: "ghost-light",
          state: "default",
          position: { top: "68px", left: "514px" },
        },
      ],
    },

    // Small buttons (sm) - first row
    {
      size: "sm",
      variants: [
        {
          color: "cyan",
          state: "default",
          position: { top: "276px", left: "6px" },
        },
        {
          color: "red",
          state: "default",
          position: { top: "276px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "276px", left: "269px" },
        },
        {
          color: "ghost",
          state: "default",
          position: { top: "276px", left: "514px" },
        },
      ],
    },
    // Small buttons (sm) - second row
    {
      size: "sm",
      variants: [
        {
          color: "cyan",
          state: "disabled",
          position: { top: "484px", left: "6px" },
        },
        {
          color: "red",
          state: "disabled",
          position: { top: "484px", left: "759px" },
        },
        {
          color: "white",
          state: "disabled",
          position: { top: "484px", left: "269px" },
        },
        {
          color: "ghost",
          state: "disabled",
          position: { top: "484px", left: "514px" },
        },
      ],
    },
    // Small buttons (sm) - third row
    {
      size: "sm",
      variants: [
        {
          color: "cyan",
          state: "focused",
          position: { top: "380px", left: "6px" },
        },
        {
          color: "red",
          state: "focused",
          position: { top: "380px", left: "759px" },
        },
        {
          color: "white",
          state: "focused",
          position: { top: "380px", left: "269px" },
        },
        {
          color: "ghost",
          state: "focused",
          position: { top: "380px", left: "514px" },
        },
      ],
    },
    // Small buttons (sm) - fourth row
    {
      size: "sm",
      variants: [
        {
          color: "cyan-dark",
          state: "default",
          position: { top: "432px", left: "6px" },
        },
        {
          color: "red-dark",
          state: "default",
          position: { top: "432px", left: "759px" },
        },
        {
          color: "gray",
          state: "default",
          position: { top: "432px", left: "269px" },
        },
        {
          color: "ghost-gray",
          state: "default",
          position: { top: "432px", left: "514px" },
        },
      ],
    },
    // Small buttons (sm) - fifth row
    {
      size: "sm",
      variants: [
        {
          color: "cyan-light",
          state: "default",
          position: { top: "328px", left: "6px" },
        },
        {
          color: "red-light",
          state: "default",
          position: { top: "328px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "328px", left: "269px" },
        },
        {
          color: "ghost-light",
          state: "default",
          position: { top: "328px", left: "514px" },
        },
      ],
    },

    // Medium buttons (md) - first row
    {
      size: "md",
      variants: [
        {
          color: "cyan",
          state: "default",
          position: { top: "568px", left: "6px" },
        },
        {
          color: "red",
          state: "default",
          position: { top: "568px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "568px", left: "269px" },
        },
        {
          color: "ghost",
          state: "default",
          position: { top: "568px", left: "514px" },
        },
      ],
    },
    // Medium buttons (md) - second row
    {
      size: "md",
      variants: [
        {
          color: "cyan",
          state: "disabled",
          position: { top: "808px", left: "6px" },
        },
        {
          color: "red",
          state: "disabled",
          position: { top: "808px", left: "759px" },
        },
        {
          color: "white",
          state: "disabled",
          position: { top: "808px", left: "269px" },
        },
        {
          color: "ghost",
          state: "disabled",
          position: { top: "808px", left: "514px" },
        },
      ],
    },
    // Medium buttons (md) - third row
    {
      size: "md",
      variants: [
        {
          color: "cyan",
          state: "focused",
          position: { top: "688px", left: "6px" },
        },
        {
          color: "red",
          state: "focused",
          position: { top: "688px", left: "759px" },
        },
        {
          color: "white",
          state: "focused",
          position: { top: "688px", left: "269px" },
        },
        {
          color: "ghost",
          state: "focused",
          position: { top: "688px", left: "514px" },
        },
      ],
    },
    // Medium buttons (md) - fourth row
    {
      size: "md",
      variants: [
        {
          color: "cyan-dark",
          state: "default",
          position: { top: "748px", left: "6px" },
        },
        {
          color: "red-dark",
          state: "default",
          position: { top: "748px", left: "759px" },
        },
        {
          color: "gray",
          state: "default",
          position: { top: "748px", left: "269px" },
        },
        {
          color: "ghost-gray",
          state: "default",
          position: { top: "748px", left: "514px" },
        },
      ],
    },
    // Medium buttons (md) - fifth row
    {
      size: "md",
      variants: [
        {
          color: "cyan-light",
          state: "default",
          position: { top: "628px", left: "6px" },
        },
        {
          color: "red-light",
          state: "default",
          position: { top: "628px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "628px", left: "269px" },
        },
        {
          color: "ghost-light",
          state: "default",
          position: { top: "628px", left: "514px" },
        },
      ],
    },

    // Large buttons (lg) - first row
    {
      size: "lg",
      variants: [
        {
          color: "cyan",
          state: "default",
          position: { top: "900px", left: "6px" },
        },
        {
          color: "red",
          state: "default",
          position: { top: "900px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "900px", left: "269px" },
        },
        {
          color: "ghost",
          state: "default",
          position: { top: "900px", left: "514px" },
        },
      ],
    },
    // Large buttons (lg) - second row
    {
      size: "lg",
      variants: [
        {
          color: "cyan",
          state: "disabled",
          position: { top: "1172px", left: "6px" },
        },
        {
          color: "red",
          state: "disabled",
          position: { top: "1172px", left: "759px" },
        },
        {
          color: "white",
          state: "disabled",
          position: { top: "1172px", left: "269px" },
        },
        {
          color: "ghost",
          state: "disabled",
          position: { top: "1172px", left: "514px" },
        },
      ],
    },
    // Large buttons (lg) - third row
    {
      size: "lg",
      variants: [
        {
          color: "cyan",
          state: "focused",
          position: { top: "1036px", left: "6px" },
        },
        {
          color: "red",
          state: "focused",
          position: { top: "1036px", left: "759px" },
        },
        {
          color: "white",
          state: "focused",
          position: { top: "1036px", left: "269px" },
        },
        {
          color: "ghost",
          state: "focused",
          position: { top: "1036px", left: "514px" },
        },
      ],
    },
    // Large buttons (lg) - fourth row
    {
      size: "lg",
      variants: [
        {
          color: "cyan-dark",
          state: "default",
          position: { top: "1104px", left: "6px" },
        },
        {
          color: "red-dark",
          state: "default",
          position: { top: "1104px", left: "759px" },
        },
        {
          color: "gray",
          state: "default",
          position: { top: "1104px", left: "269px" },
        },
        {
          color: "ghost-gray",
          state: "default",
          position: { top: "1104px", left: "514px" },
        },
      ],
    },
    // Large buttons (lg) - fifth row
    {
      size: "lg",
      variants: [
        {
          color: "cyan-light",
          state: "default",
          position: { top: "968px", left: "6px" },
        },
        {
          color: "red-light",
          state: "default",
          position: { top: "968px", left: "759px" },
        },
        {
          color: "white",
          state: "default",
          position: { top: "968px", left: "269px" },
        },
        {
          color: "ghost-light",
          state: "default",
          position: { top: "968px", left: "514px" },
        },
      ],
    },
  ]

  // Function to get button styling based on properties
  const getButtonStyles = (color: string, state: string, size: string) => {
    // Base classes
    let classes = "inline-flex items-center justify-center gap-2 rounded-[128px] "

    // Size specific classes
    if (size === "xs") {
      classes += "px-3 py-1 "
    } else if (size === "sm") {
      classes += "px-4 py-2 "
    } else if (size === "md") {
      classes += "px-5 py-2.5 "
    } else if (size === "lg") {
      classes += "px-6 py-3 "
    }

    // Color and state specific classes
    if (color === "cyan") {
      classes += "bg-cyan-500 text-white overflow-hidden "
    } else if (color === "cyan-dark") {
      classes += "bg-cyan-600 text-white overflow-hidden "
    } else if (color === "cyan-light") {
      classes += "bg-cyan-400 text-white overflow-hidden "
    } else if (color === "red") {
      classes += "bg-red-500 text-white overflow-hidden "
    } else if (color === "red-dark") {
      classes += "bg-red-600 text-white overflow-hidden "
    } else if (color === "red-light") {
      classes += "bg-red-400 text-white overflow-hidden "
    } else if (color === "white") {
      classes += "bg-white text-gray-900 border-[0.5px] border-solid border-gray-300 "
    } else if (color === "gray") {
      classes += "bg-gray-50 text-gray-900 border-[0.5px] border-solid border-gray-300 "
    } else if (color === "ghost") {
      classes += "text-gray-900 "
    } else if (color === "ghost-gray") {
      classes += "bg-[#1118270a] text-gray-900 "
    } else if (color === "ghost-light") {
      classes += "bg-[#11182705] text-gray-900 "
    }

    // State specific classes
    if (state === "disabled") {
      classes += "opacity-40 "
    } else if (state === "focused") {
      if (color.includes("cyan")) {
        classes += "shadow-focused-ring-accent "
      } else if (color.includes("red")) {
        classes += "shadow-focused-ring-red "
      } else {
        classes += "shadow-focused-ring-accent "
      }
    } else {
      classes += "shadow-box-shadow-sm "
    }

    return classes
  }

  // Function to get icon size based on button size
  const getIconSize = (size: string) => {
    if (size === "xs") return 12
    if (size === "sm") return 16
    if (size === "md") return 20
    if (size === "lg") return 24
    return 16
  }

  // Function to get text size based on button size
  const getTextSize = (size: string) => {
    if (size === "xs")
      return "font-text-xs-12pt-semibold text-[length:var(--text-xs-12pt-semibold-font-size)] tracking-[var(--text-xs-12pt-semibold-letter-spacing)] leading-[var(--text-xs-12pt-semibold-line-height)]"
    if (size === "sm")
      return "font-text-sm-14pt-semibold text-[length:var(--text-sm-14pt-semibold-font-size)] tracking-[var(--text-sm-14pt-semibold-letter-spacing)] leading-[var(--text-sm-14pt-semibold-line-height)]"
    if (size === "md")
      return "font-text-base-16pt-semibold text-[length:var(--text-base-16pt-semibold-font-size)] tracking-[var(--text-base-16pt-semibold-letter-spacing)] leading-[var(--text-base-16pt-semibold-line-height)]"
    if (size === "lg")
      return "font-text-lg-18pt-semibold text-[length:var(--text-lg-18pt-semibold-font-size)] tracking-[var(--text-lg-18pt-semibold-letter-spacing)] leading-[var(--text-lg-18pt-semibold-line-height)]"
    return "font-text-sm-14pt-semibold"
  }

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 overflow-hidden rounded-xl border-[0.5px] border-dashed border-gray-300 bg-gray-50">
        {buttonData.map((sizeGroup, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            {sizeGroup.variants.map((variant, variantIndex) => {
              const buttonClass = getButtonStyles(variant.color, variant.state, sizeGroup.size)
              const iconSize = getIconSize(sizeGroup.size)
              const textSize = getTextSize(sizeGroup.size)
              const textColor =
                variant.color.includes("white") ||
                variant.color.includes("ghost") ||
                variant.color.includes("gray")
                  ? "text-gray-900"
                  : "text-white"

              return (
                <Button
                  key={`button-${groupIndex}-${variantIndex}`}
                  className={buttonClass}
                  style={{
                    position: "absolute",
                    top: variant.position.top,
                    left: variant.position.left,
                  }}
                  disabled={variant.state === "disabled"}
                >
                  {/*Button content wrapper */}
                  <div
                    className={`gap-${sizeGroup.size === "xs" ? "1" : "2"} relative inline-flex flex-[0_0_auto] items-center justify-center`}
                  >
                    {/* Leading content (just an example) */}
                    <StarIcon
                      size={iconSize}
                      color={textColor === "text-white" ? "white" : "#111827"}
                      weight="regular"
                    />

                    {/* TODO: don't wrap the text */}
                    {sizeGroup.size === "xs" ? (
                      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-1 px-0 py-0.5">
                        <div
                          className={`relative mt-[-1.00px] w-fit ${textSize} ${textColor} whitespace-nowrap [font-style:var(--text-xs-12pt-semibold-font-style)]`}
                        >
                          Button
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`relative mt-[-1.00px] w-fit ${textSize} ${textColor} whitespace-nowrap [font-style:var(--${sizeGroup.size === "sm" ? "text-sm-14pt" : sizeGroup.size === "md" ? "text-base-16pt" : "text-lg-18pt"}-semibold-font-style)]`}
                      >
                        Button
                      </div>
                    )}

                    <Badge className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center rounded-[128px] border-[0.5px] border-solid border-gray-300 bg-white px-1.5 py-1">
                      <div className="font-text-xxs-10pt-semibold relative mt-[-0.50px] w-fit text-center text-[length:var(--text-xxs-10pt-semibold-font-size)] leading-[var(--text-xxs-10pt-semibold-line-height)] font-[number:var(--text-xxs-10pt-semibold-font-weight)] tracking-[var(--text-xxs-10pt-semibold-letter-spacing)] whitespace-nowrap text-gray-900 [font-style:var(--text-xxs-10pt-semibold-font-style)]">
                        2
                      </div>
                    </Badge>

                    <HeartIcon
                      size={iconSize}
                      color={textColor === "text-white" ? "white" : "#111827"}
                      weight="regular"
                    />
                  </div>
                </Button>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
