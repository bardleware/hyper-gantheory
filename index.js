// Constants
const backgroundColor = `#040404`;
const foregroundColor = '#00afff';
const borderColor = '#205375';

const colors = {
  black: '#000000',
  red: '#f44336',
  green: '#84bf40',
  yellow: '#ffaf5f',
  blue: '#03a9f4',
  magenta: '#e92663',
  cyan: '#00bcd4',
  white: '#aaaaaa',
  lightblack: '#686868',
  lightRed: '#f66055',
  lightGreen: '#9ccc66',
  lightYellow: '#ffbf80',
  lightBlue: '#81d4fa',
  lightMagenta: '#f48fb1',
  lightCyan: '#80deea',
  lightWhite: '#dddddd'
};

// Theme config
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: borderColor,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
    `
  })
);
