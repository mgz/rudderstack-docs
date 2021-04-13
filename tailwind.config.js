module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: {        
        custom: '#000000',
        lighter: '#4E4E4E'
      },
      blueNew: {   
        lighter:'#EEF5F5',
        skyblue:'#E3F1F1',
        custom: '#0066FF',
        textblue: '#0166FE'
      },
      grayColor: {
        custom:'#4E4E4E',
        lighter: '#A7A7A7', 
        BgGray:'#FAFAFA',
        priceCardBorder:'#E1E1E1',
      },
      whiteColor: {
        custom: '#ffffff',
      },
      red: {
        custom: '#FF0000',
      },
    },
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "blue": "var(--blue)",
        "background": "var(--background)",
        "backgroundsecondary": "var(--backgroundsecondary)",
        "white": "var(--white)",
        "postdate": "var(--postdate)",
        "footer": "var(--footer)",
        "tabborder": "var(--tabborder)",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '14px',
        'tiny': '.875rem',
        'base': '16px',
        'lg': '18px',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '28px',
        '4xl': '40px',
        '5xl': '50px',
        '6xl': '64px',
        '7xl': '5rem',
       },
       backgroundImage: theme => ({
        'hero-pattern': "url('../images/test-bg.png')",
       })
    },
    fontFamily: {
      custom: ['Basis Grotesque Pro', 'sans-serif'],
    },
    boxShadow: {
      md: '0 1px 24px rgba(0, 0, 0, 0.05), 0 1px 24px rgba(0, 0, 0, 0.05)'
    }
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
