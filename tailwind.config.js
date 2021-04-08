module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: {        
        custom: '#ffffff',       
      },
      black: {        
        custom: '#000000',       
      },
      blueNew: {   
        lighter:'#EEF5F5',
        skyblue:'#E3F1F1',
        custom: '#0066FF',     
      },
      grayNew: {
        custom:'#4E4E4E',
        lighter: '#A7A7A7', 
        BgGray:'#FAFAFA',
        priceCardBorder:'#E1E1E1',
      },
    },
    extend: {},
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
