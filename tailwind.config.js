/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
        },
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        base: {
          400: 'rgb(var(--color-base-400) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-base) / <alpha-value>)',
          800: 'rgb(var(--color-base-800) / <alpha-value>)',
        },
        info: 'rgb(var(--color-info) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        // 'd-primary': '#7f5af0',
        // 'primary-dark': '#1b8c6f',
        // 'd-primary-dark': '#5e3dc2',
        // background: '#fffffe',
        // 'd-background': '#16161a',
        // 'd-background-2': '#242629',
        // 'd-secondary': '#293D45',
        // warning: '#F78E16',
        // success: '#20ac89',
        // danger: '#F74866',
        // headline: '#313131',
        // 'd-headline': '#fffffe',
        // paragraph: '#c4c4c4',
        // 'd-paragraph': '#94a1b2',
        // link: '#14A3DE',
        // 'd-link': '##1698cd',
        // tertiary: '#EC7EF7',
        // 'd-tertiary': '#2cb67d',
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
