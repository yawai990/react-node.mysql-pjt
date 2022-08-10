/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: { 
        backgroundImage: {
        'hero-pattern': "url('https://media.istockphoto.com/photos/businessman-writing-growth-increasing-arrow-with-chart-and-graphit-is-picture-id1320148440?b=1&k=20&m=1320148440&s=170667a&w=0&h=OuKuZvWJlUVJU_mKtNjXm8CKQYbxXTNp57smUnRBDag=')",
        'expences-bg': "url('https://media.istockphoto.com/photos/checking-house-expences-picture-id174706044?b=1&k=20&m=174706044&s=170667a&w=0&h=kfMqyvoZ-_GnhzedYcK6R-mDHxKQiUdDTky4mA5ZyfY=')",
      },
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.6)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }
      },
    },
    plugins: [],
  }