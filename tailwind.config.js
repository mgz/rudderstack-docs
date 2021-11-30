module.exports = {
  important: true,
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "8rem",
    },
    letterSpacing: {
      "tight-2": "-.04em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        custom: "#10174C" /*footer nav btn */,
      },
      blueNew: {
        lighter: "#EEF5F5",
        skyblue: "#E3F1F1",
        custom: "#0066FF",
        category: "#0166FE",
        midnight: "#17176E",
        midnight_v2: "#10174C",
        eastbay: "#3F3C7F",
        magenta: "#7F66C8",
        midnight_sub: "#2e2e7c",
        cardBackground: "#f5f9f9",
        midPurple: "#7F66C8",
      },
      purpleNew: {
        custom: "#7F66C8",
        gigas: "#4E3B97",
      },
      red: {
        error: "#FF0000",
        dangerBorder: "#ff4642",
        dangerBg: "#f5c3c2",
      },
      grayColor: {
        custom: "#4E4E4E",
        lighter: "#A7A7A7",
        "lighter-2x": "#C7C7C7",
        BgGray: "#FAFAFA",
        priceCardBorder: "#E1E1E1",
        dark: "#101836",
        lightBorder: "#DEE2E7",
        docsText: "#2F353F",
      },
      whiteColor: {
        custom: "#ffffff",
      },
      orange: {
        warningBorder: "#f77d05",
        warningBg: "#f1be8d",
      },
      green: {
        successBg: "#c1ead7",
        successBorder: "#26cb7c",
      },
      darkScheme:{
        textPrimary: "#ffffff",
        btnPrimaryBg: "#86F8E0",
        btnSecondaryBg: "#D692F6",
        textBlack: "#000000"
      }
    },
    extend: {
      inset: {
        18: "4.5rem",
        "-18": "-4.5rem",
      },
      padding: {
        15: "3.75rem",
        19: "4.75rem",
      },
      width: {
        120: "30rem",
        18: "4.5rem",
      },

      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        darkblue: "var(--darkblue)",
        blue: "var(--blue)",
        dark: "var(--dark)",
        purple: "var(--purple)",
        seegreen: "var(--seegreen)",
        seegreenaction: "var(--seegreenaction)",
        background: "var(--background)",
        backgroundsecondary: "var(--backgroundsecondary)",
        white: "var(--white)",
        postdate: "var(--postdate)",
        footer: "var(--footer)",
        tabborder: "var(--tabborder)",
        tabborderactive: "var(--tabborderactive)",
      },
      fontSize: {
        xs: ".75rem",
        sm: "14px",
        tiny: ".875rem",
        base: "16px",
        lg: "18px",
        xl: "1.25rem",
        "xl-2": "1.375rem",
        "2xl": "1.5rem",
        "2xl-2": "1.75rem",
        "3xl": "28px",
        "3xl-2": "32px",
        "3xl-3": "36px",
        "3xl-4": "38px",
        "4xl": "40px",
        "5xl": "50px",
        "5xl-1": "54px",
        "5xl-2": "60px",
        "6xl": "64px",
        "7xl": "5rem",
        "7xl": "5rem",
        "20xl": ["350px"],
      },
      backgroundImage: theme => ({
        "hero-pattern": "url('../images/test-bg.png')",
        "hero-pattern-mobile": "url('../images/test-bg-mobile.png')",
        "hero-pattern-mobile-2": "url('../images/test-bg-mobile-2.png')",
      }),
    },
    fontFamily: {
      custom: ["Basis Grotesque", "sans-serif"],
    },
    boxShadow: {
      md: "0 1px 24px rgba(0, 0, 0, 0.05), 0 1px 24px rgba(0, 0, 0, 0.05)",
      menu: "0 16px 40px rgba(0, 0, 0, 0.05), 0 16px 40px rgba(0, 0, 0, 0.05)",
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
}
