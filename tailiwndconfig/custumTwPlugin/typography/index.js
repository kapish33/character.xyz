const plugin = require("tailwindcss/plugin");

const { createTypographyStyles } = require("./functions");
const { ABOVE_MD } = require("./variants/aboveMd");
const { BELOW_MD } = require("./variants/smallDevices");
const { MD_BREAK_POINT } = require("./constant");

/**
 * @see Typography Is Based on: Random Styling
 * @ForChnage use custum-tw-plugin/typography/variants/aboveMd.ts and custum-tw-plugin/typography/variants/smallDevices.ts
 */
module.exports = plugin.withOptions(function () {
  return function ({ addComponents }) {
    const headings = Object.keys(BELOW_MD).reduce(
      (acc, key) => ({ ...acc, [key]: { ...createTypographyStyles(BELOW_MD[key]) } }),
      {}
    );

    // Add responsive styles for different screen sizes
    Object.keys(ABOVE_MD).forEach((key) => {
      headings[key][MD_BREAK_POINT] = ABOVE_MD[key] ? { ...createTypographyStyles(ABOVE_MD[key]) } : {};
    });

    addComponents(headings);
  };
});