const path = require('path');
const { addBabelPlugins, addWebpackAlias, override } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('react-hot-loader/babel', 'inline-react-svg'),
  addWebpackAlias({ '@': path.resolve(__dirname, 'src') }),
);
