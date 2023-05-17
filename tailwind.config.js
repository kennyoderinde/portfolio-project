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
        '80': '113vw',
        '60': '58%',
        '66': '70%',
        '30' : '30rem',
        '38' : '38rem',

        
      },

      height: {
        '18' : '18rem',

      },

      top: {
        '120': '30rem', // Set the new value for top-128
        // Add more values as needed
      },
    },
  
    
  },
  plugins: [ 
    require('@tailwindcss/typography'),
],
}
