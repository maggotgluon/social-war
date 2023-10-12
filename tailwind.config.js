module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'], // add your preferred file extensions here
  theme: {
    colors: {
      black:'#000000',
      white:'#ffffff',
      yellow:'#EFC646',
    },
    extend: {
      fontFamily: {
        'sans': ['Kanit','Prompt', 'sans-serif'],
        'cod' : ['call_of_ops_dutyregular','Kanit','Prompt', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('../img/hero_bg.jpg')",
        'section': ["url('../img/page_bg.jpg')"],
        'seat_uvvip': "url('../img/seat_uvvip_bg.png')",
        'seat_vvip': "url('../img/seat_vvip_bg.png')",
        'seat_platinum': "url('../img/seat_platinum_bg.png')",
        'seat_regular': "url('../img/seat_regular_bg.png')",
      },
      dropShadow: {
        'img': '0 0 0.3rem rgba(239,198,70,1)',
        'text': ['0.07rem 0.07rem  rgba(0,0,0,1)',
                  '-0.07rem -0.07rem  rgba(0,0,0,1)', 
                  '0.07rem -0.07rem  rgba(0,0,0,1)', 
                  '-0.07rem 0.07rem  rgba(0,0,0,1)'],
      },
      gridTemplateColumns: {
        'seat_map': '1fr 2fr 1fr',
        '10': 'repeat(10, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
};
