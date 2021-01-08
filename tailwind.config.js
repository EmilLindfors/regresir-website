const defaultTheme = require("tailwindcss/defaultTheme");
const mdx = require("@mdx-js/mdx");

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{js,mdx}", "./next.config.js"],
    options: {
      extractors: [
        {
          extensions: ["mdx"],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        primary: "#213264",
        secondary: "#EE3232",
      },
      textColor: {
        primary: "#213264",
        secondary: "#EE3232",
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.700"),
          h2: {
            fontWeight: "700",
            letterSpacing: theme("letterSpacing.tight"),
            color: theme("colors.gray.900"),
          },
          h3: {
            fontWeight: "600",
            color: theme("colors.gray.900"),
          },
          "ol li:before": {
            fontWeight: "600",
            color: theme("colors.gray.500"),
          },
          "ul li:before": {
            backgroundColor: theme("colors.gray.400"),
          },
          code: {
            color: theme("colors.gray.900"),
          },
          a: {
            color: theme("colors.gray.900"),
          },
          pre: {
            color: theme("colors.gray.200"),
            backgroundColor: theme("colors.gray.800"),
          },
          blockquote: {
            color: theme("colors.gray.900"),
            borderLeftColor: theme("colors.gray.200"),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
