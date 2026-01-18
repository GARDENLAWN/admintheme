module.exports = {
  content: [
    '../../**/*.phtml',
    '../../../../../../code/GardenLawn/**/*.phtml',
    '../../../../../../vendor/hyva-themes/module-magento2-admin/view/adminhtml/templates/**/*.phtml'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#eb5202',
          dark: '#d44902'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
