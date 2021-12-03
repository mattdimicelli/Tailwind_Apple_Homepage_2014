module.exports = {
  mode: 'jit',
  purge: [  // must include any file where a css class name is referenced
    './dist/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://web.archive.org/web/20140228114747im_/http://images.apple.com/v/home/as/images/your_verse_hero.jpg')",
        'iPhone5s': "url('https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_iphone5s.jpg')",
        'iPhone5c': "url('https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_iphone5c.jpg')",
        'happyBday': "url('https://web.archive.org/web/20140301004610im_/http://images.apple.com/home/images/promo_30_years.jpg')",
        'supplier': "url('https://web.archive.org/web/20140301004352im_/http://images.apple.com/home/images/promo_supplier_responsibility.jpg')",
      },
      height: {
        'twohun': '200px',
      },
      fontSize: {
        'xxs': '0.65rem',
      },
      fontFamily: {
        "lucidaGrande": "Lucida Grande",
      },
      borderWidth: {
        'xs': '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
