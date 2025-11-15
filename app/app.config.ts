export default defineAppConfig({
  siteName: "Nuxt 4 Template",
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
    button: {
      slots: {
        base: [
          "rounded-md font-bold inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
          "transition-colors shadow-sm",
        ],
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 active:from-primary/90 active:to-primary/80 disabled:from-primary disabled:to-primary/90 aria-disabled:from-primary aria-disabled:to-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border border-primary-600/50",
        },
        {
          color: "secondary",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 active:from-secondary/90 active:to-secondary/80 disabled:from-secondary disabled:to-secondary/90 aria-disabled:from-secondary aria-disabled:to-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary border border-secondary-600/50",
        },
        {
          color: "success",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-success to-success/90 hover:from-success/90 hover:to-success/80 active:from-success/90 active:to-success/80 disabled:from-success disabled:to-success/90 aria-disabled:from-success aria-disabled:to-success/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success border border-success-600/50",
        },
        {
          color: "info",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-info to-info/90 hover:from-info/90 hover:to-info/80 active:from-info/90 active:to-info/80 disabled:from-info disabled:to-info/90 aria-disabled:from-info aria-disabled:to-info/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info border border-info-600/50",
        },
        {
          color: "warning",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-warning to-warning/90 hover:from-warning/90 hover:to-warning/80 active:from-warning/90 active:to-warning/80 disabled:from-warning disabled:to-warning/90 aria-disabled:from-warning aria-disabled:to-warning/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning border border-warning-600/50",
        },
        {
          color: "error",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-error to-error/90 hover:from-error/90 hover:to-error/80 active:from-error/90 active:to-error/80 disabled:from-error disabled:to-error/90 aria-disabled:from-error aria-disabled:to-error/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error border border-error-600/50",
        },
        {
          color: "neutral",
          variant: "solid",
          class:
            "text-inverted bg-gradient-to-b from-inverted to-inverted/85 hover:from-inverted/90 hover:to-inverted/75 active:from-inverted/90 active:to-inverted/75 disabled:from-inverted disabled:to-inverted/85 aria-disabled:from-inverted aria-disabled:to-inverted/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted border border-gray-700/50",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-primary/30",
        },
        {
          color: "neutral",
          variant: "outline",
          class:
            "ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted border border-gray-300/50 dark:border-gray-600/50",
        },
      ],
    },
    input: {
      slots: {
        base: [
          "w-full rounded-md border-0 appearance-none placeholder:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
          "transition-colors",
        ],
      },
    },
    textarea: {
      slots: {
        base: [
          "w-full rounded-md border-0 appearance-none placeholder:text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
          "transition-colors",
        ],
      },
    },
    selectMenu: {
      slots: {
        placeholder: "text-white",
      },
    },
  },
});
