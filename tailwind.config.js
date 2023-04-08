/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#20ac89',
        'primary-dark': '#1b8c6f',
        background: '#fffffe',
        secondary: '#293D45',
        warning: '#F78E16',
        success: '#20ac89',
        danger: '#F74866',
        headline: '#313131',
        paragraph: '#c4c4c4',
        link: '#14A3DE',
      },
    },
  },
  plugins: [],
}

//  color palette
// background:     '#16161a'  '#fffffe'   '#fafafa
// 2nd background: '#242629'  '#f2f4f6
// headline        '#fffffe'  '#00214d'   '#313131'
// paragraph       '#94a1b2'  '#1b2d45'   '##c4c4c4'
// main:           '#7f5af0'  '#00ebc7'   '#20ac89'
// tertiary        '#2cb67d'  '#fde24f'   '#EC7EF7'
// secondary:      '#72757e'  '#00214d'
// stroke:         '#010101'  '#ff5470'
