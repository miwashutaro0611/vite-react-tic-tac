const properties = require("known-css-properties").all

module.exports = {
  plugins: ["stylelint-prettier", "stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "prettier/prettier": true,
    "order/properties-order": properties,
    "value-keyword-case": "lower",
  },
}
