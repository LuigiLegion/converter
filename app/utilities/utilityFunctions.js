const convertCelsius = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Fahrenheit') {
    targetVal = String(Math.round((Number(sourceVal) * 9) / 5 + 32));
  }
  return targetVal;
};

const convertFahrenheit = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Celsius') {
    targetVal = String(Math.round(((Number(sourceVal) - 32) * 5) / 9));
  }
  return targetVal;
};

const convertKilogram = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Gram') {
    targetVal = String((Number(sourceVal) * 1000).toFixed(2));
  } else if (targetType === 'Pound') {
    targetVal = String((Number(sourceVal) * 2.205).toFixed(2));
  } else if (targetType === 'Ounce') {
    targetVal = String((Number(sourceVal) * 35.274).toFixed(2));
  }
  return targetVal;
};

const convertGram = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Gram') {
    targetVal = String((Number(sourceVal) / 1000).toFixed(2));
  } else if (targetType === 'Pound') {
    targetVal = String((Number(sourceVal) / 453.592).toFixed(2));
  } else if (targetType === 'Ounce') {
    targetVal = String((Number(sourceVal) / 28.35).toFixed(2));
  }
  return targetVal;
};

const convertPound = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilogram') {
    targetVal = String((Number(sourceVal) / 2.205).toFixed(2));
  } else if (targetType === 'Gram') {
    targetVal = String((Number(sourceVal) * 453.592).toFixed(2));
  } else if (targetType === 'Ounce') {
    targetVal = String((Number(sourceVal) * 16).toFixed(2));
  }
  return targetVal;
};

const convertOunce = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilogram') {
    targetVal = String((Number(sourceVal) / 35.274).toFixed(2));
  } else if (targetType === 'Gram') {
    targetVal = String((Number(sourceVal) * 28.35).toFixed(2));
  } else if (targetType === 'Pound') {
    targetVal = String((Number(sourceVal) / 16).toFixed(2));
  }
  return targetVal;
};

const convertKilometer = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Meter') {
    targetVal = (Number(sourceVal) * 1000).toFixed(2);
  } else if (targetType === 'Centimeter') {
    targetVal = (Number(sourceVal) * 100000).toFixed(2);
  } else if (targetType === 'Mile') {
    targetVal = (Number(sourceVal) / 1.609).toFixed(2);
  } else if (targetType === 'Foot') {
    targetVal = (Number(sourceVal) * 3280.84).toFixed(2);
  } else if (targetType === 'Inch') {
    targetVal = (Number(sourceVal) * 39370.079).toFixed(2);
  }
  if (targetVal < 0.000006) {
    targetVal = '~ 0';
  } else {
    targetVal = String(targetVal);
  }
  return targetVal;
};

const convertMeter = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = (Number(sourceVal) / 1000).toFixed(2);
  } else if (targetType === 'Centimeter') {
    targetVal = (Number(sourceVal) * 100).toFixed(2);
  } else if (targetType === 'Mile') {
    targetVal = (Number(sourceVal) / 1609.344).toFixed(2);
  } else if (targetType === 'Foot') {
    targetVal = (Number(sourceVal) * 3.281).toFixed(2);
  } else if (targetType === 'Inch') {
    targetVal = (Number(sourceVal) * 39.37).toFixed(2);
  }
  if (targetVal < 0.000006) {
    targetVal = '~ 0';
  } else {
    targetVal = String(targetVal);
  }
  return targetVal;
};

const convertCentimeter = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = (Number(sourceVal) / 100000).toFixed(5);
  } else if (targetType === 'Meter') {
    targetVal = (Number(sourceVal) / 100).toFixed(2);
  } else if (targetType === 'Mile') {
    targetVal = (Number(sourceVal) / 160934.4).toFixed(6);
  } else if (targetType === 'Foot') {
    targetVal = (Number(sourceVal) / 30.48).toFixed(2);
  } else if (targetType === 'Inch') {
    targetVal = (Number(sourceVal) / 2.54).toFixed(2);
  }
  if (targetVal < 0.000006) {
    targetVal = '~ 0';
  } else {
    targetVal = String(targetVal);
  }
  return targetVal;
};

const convertMile = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = (Number(sourceVal) * 1.609).toFixed(2);
  } else if (targetType === 'Meter') {
    targetVal = (Number(sourceVal) * 1609.344).toFixed(2);
  } else if (targetType === 'Centimeter') {
    targetVal = (Number(sourceVal) * 160934.4).toFixed(2);
  } else if (targetType === 'Foot') {
    targetVal = (Number(sourceVal) * 5280).toFixed(2);
  } else if (targetType === 'Inch') {
    targetVal = (Number(sourceVal) * 63360).toFixed(2);
  }
  if (targetVal < 0.000006) {
    targetVal = '~ 0';
  } else {
    targetVal = String(targetVal);
  }
  return targetVal;
};

const convertFoot = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = (Number(sourceVal) / 3280.84).toFixed(2);
  } else if (targetType === 'Meter') {
    targetVal = (Number(sourceVal) / 3.281).toFixed(2);
  } else if (targetType === 'Centimeter') {
    targetVal = (Number(sourceVal) * 30.48).toFixed(2);
  } else if (targetType === 'Mile') {
    targetVal = (Number(sourceVal) / 5280).toFixed(2);
  } else if (targetType === 'Inch') {
    targetVal = (Number(sourceVal) * 12).toFixed(2);
  }
  if (targetVal < 0.000006) {
    targetVal = '~ 0';
  } else {
    targetVal = String(targetVal);
  }
  return targetVal;
};

const convertInch = (sourceVal, targetType) => {
  let sourceValNum = Number(sourceVal);
  let targetValNum;
  if (targetType === 'Kilometer') {
    targetValNum = (sourceValNum / 39370.079).toFixed(5);
  } else if (targetType === 'Meter') {
    targetValNum = (sourceValNum / 39.37).toFixed(2);
  } else if (targetType === 'Centimeter') {
    targetValNum = (sourceValNum * 2.54).toFixed(2);
  } else if (targetType === 'Mile') {
    targetValNum = (sourceValNum / 63360).toFixed(5);
  } else if (targetType === 'Foot') {
    targetValNum = (sourceValNum / 12).toFixed(2);
  }
  let targetValStr;
  if (targetValNum < 0.000006) {
    targetValStr = '~ 0';
  } else {
    targetValStr = String(targetValNum);
  }
  return targetValStr;
};

module.exports = {
  convertCelsius,
  convertFahrenheit,
  convertKilogram,
  convertGram,
  convertPound,
  convertOunce,
  convertKilometer,
  convertMeter,
  convertCentimeter,
  convertMile,
  convertFoot,
  convertInch,
};
