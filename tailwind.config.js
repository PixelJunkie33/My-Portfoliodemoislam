module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee",
    ],
  },
  plugins: [require("daisyui")],
}