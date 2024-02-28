const Utils = {
  calculateNumber: function (type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    if (typeof type === 'string' && (type === 'SUM' || type === 'SUBTRACT' || type === 'DIVIDE')) {
      if (type === 'SUM') {
        return roundedA + roundedB;
      } else if (type === 'SUBTRACT') {
        return roundedA - roundedB;
      } else if (type === 'DIVIDE') {
        if (roundedB !== 0) {
          return roundedA / roundedB;
        }
        return 'Error';
      }
    } else {
      return 'Error';
    }
  }
};

module.exports = Utils;
