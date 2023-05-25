/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend:{
      color: {
        'bg' : '#020c1b',
        'bgs' : '#072d5b',
        'light-gray' : '#F8727A',
        'dove' : '#a8b2d1',
        'tomato' : '#8892b0',
        'green' : "#64ffda",
        'blue' : "#112240",
        'pink ' : "#f57dff"
        
      
      },
      fontFamily: {
        'poppins' : ['Nunito', 'sans-serif'],
        'roboto': ['Roboto Mono', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif']
      },


      width: {
        '80': '120vw',
        '100' : '120vw',
        '60': '58%',
        '66': '60%',
        '30' : '30rem',
        '18' : '20rem',
      },

      height: {
        '18' : '26rem',

      },

      spacing: {
        '38': '9.5rem', // Replace with your desired value
      },
    },
  
    
  },
  plugins: [ 
    require('@tailwindcss/typography'),
],
}
