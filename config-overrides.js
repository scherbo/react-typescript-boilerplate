const { addBabelPlugins, override } = require('customize-cra');

module.exports = override(...addBabelPlugins('react-hot-loader/babel', 'inline-react-svg'));
