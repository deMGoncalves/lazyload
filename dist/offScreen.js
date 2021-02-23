import * as f from 'f';
const offScreen = (node) => f.gt(f.subtract(node.getBoundingClientRect().top, window.innerHeight), window.innerHeight);
export default f.curry(offScreen);
