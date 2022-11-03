/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/Components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  // plugins: [require("flowbite/plugin")],
});
