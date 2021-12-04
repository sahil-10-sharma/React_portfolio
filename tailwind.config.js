module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '450px',
      md: '600px',
      lg: '990px',
      xl: '1150px',
      '2xl':'1400px',
  },
    extend: {
      height: {
         heroHeight:'auto',
         skillBox:'100vh'
   },
     outline: {
       white: ['20px solid #ffffff', '-15px']
   },
   margin : {
       heroMargin : '15px'
   },
   container: {
       maxWidth: {
           containerWidth : '1320px'
    }
    },
    width:{
      'l': '72%',
      'r': '22%',
    },
    maxWidth: {
      xxxl : '1320px'
    },
   borderWidth: {
     DEFAULT: '1px',
     '0': '0',
     '2': '2px',
    '3': '3px',
     '4': '4px',
    '6': '6px',
    '8': '8px',
    '10': '10px'
   },
   backgroundColor: theme => ({
     'primary-bg': '#181818',
     'l-green': '#64FFDA',
     'd-green': '#2D9687',
     'danger': '#e3342f',
     'orange': '#FD452E',
     'pink': '#C22085',
     'night': 'rgba(21,21,21,1)',
     'grey' :'#7D87A4',
     'd-blue':'#112240'
    }),
    textColor: {
     'primary': '#ffffff',
     'orange': '#FD452E',
     'l-green': '#64FFDA',
     'd-green': '#2D9687',
     'danger': '#e3342f',
     'pink': '#C22085',
     'grey' :'#7D87A4'
   }
 
 }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
