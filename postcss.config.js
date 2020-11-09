module.exports = {
  plugins: {
    tailwindcss: {
      purge: [
        'resources/applause/**/*.vue'
      ],
      theme: {
        extend: {},
      },
      variants: {},
      plugins: []
    },
    autoprefixer: {}
  }
}
