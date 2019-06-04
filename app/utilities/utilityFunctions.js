const convertCelsius = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Fahrenheit') {
    targetVal = String(Math.round((Number(sourceVal) * 9) / 5 + 32));
  } else if (targetType === 'Kelvin') {
    targetVal = String(Math.round(Number(sourceVal) + 273.15));
  }
  return targetVal;
};

const convertFahrenheit = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Celsius') {
    targetVal = String(Math.round(((Number(sourceVal) - 32) * 5) / 9));
  } else if (targetType === 'Kelvin') {
    targetVal = String(Math.round(Number(sourceVal) - (32 * 5) / 9 + 273.15));
  }
  return targetVal;
};

const convertKelvin = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Celsius') {
    targetVal = String(Math.round(Number(sourceVal) - 273.15));
  } else if (targetType === 'Fahrenheit') {
    targetVal = String(Math.round(((Number(sourceVal) - 273.15) * 9) / 5 + 32));
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
    targetVal = String((Number(sourceVal) * 1000).toFixed(2));
  } else if (targetType === 'Centimeter') {
    targetVal = String((Number(sourceVal) * 100000).toFixed(2));
  } else if (targetType === 'Mile') {
    targetVal = String((Number(sourceVal) / 1.609).toFixed(2));
  } else if (targetType === 'Foot') {
    targetVal = String((Number(sourceVal) * 3280.84).toFixed(2));
  } else if (targetType === 'Inch') {
    targetVal = String((Number(sourceVal) * 39370.079).toFixed(2));
  }
  return targetVal;
};

const convertMeter = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = String((Number(sourceVal) / 1000).toFixed(2));
  } else if (targetType === 'Centimeter') {
    targetVal = String((Number(sourceVal) * 100).toFixed(2));
  } else if (targetType === 'Mile') {
    targetVal = String((Number(sourceVal) / 1609.344).toFixed(2));
  } else if (targetType === 'Foot') {
    targetVal = String((Number(sourceVal) * 3.281).toFixed(2));
  } else if (targetType === 'Inch') {
    targetVal = String((Number(sourceVal) * 39.37).toFixed(2));
  }
  return targetVal;
};

const convertCentimeter = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = String((Number(sourceVal) / 100000).toFixed(2));
  } else if (targetType === 'Meter') {
    targetVal = String((Number(sourceVal) / 100).toFixed(2));
  } else if (targetType === 'Mile') {
    targetVal = String((Number(sourceVal) / 160934.4).toFixed(2));
  } else if (targetType === 'Foot') {
    targetVal = String((Number(sourceVal) / 30.48).toFixed(2));
  } else if (targetType === 'Inch') {
    targetVal = String((Number(sourceVal) / 2.54).toFixed(2));
  }
  return targetVal;
};

const convertMile = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilomter') {
    targetVal = String((Number(sourceVal) * 1.609).toFixed(2));
  } else if (targetType === 'Meter') {
    targetVal = String((Number(sourceVal) * 1609.344).toFixed(2));
  } else if (targetType === 'Centimeter') {
    targetVal = String((Number(sourceVal) * 160934.4).toFixed(2));
  } else if (targetType === 'Foot') {
    targetVal = String((Number(sourceVal) * 5280).toFixed(2));
  } else if (targetType === 'Inch') {
    targetVal = String((Number(sourceVal) * 63360).toFixed(2));
  }
  return targetVal;
};

const convertFoot = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = String((Number(sourceVal) / 3280.84).toFixed(2));
  } else if (targetType === 'Meter') {
    targetVal = String((Number(sourceVal) / 3.281).toFixed(2));
  } else if (targetType === 'Centimeter') {
    targetVal = String((Number(sourceVal) * 30.48).toFixed(2));
  } else if (targetType === 'Mile') {
    targetVal = String((Number(sourceVal) / 5280).toFixed(2));
  } else if (targetType === 'Inch') {
    targetVal = String((Number(sourceVal) * 12).toFixed(2));
  }
  return targetVal;
};

const convertInch = (sourceVal, targetType) => {
  let targetVal;
  if (targetType === 'Kilometer') {
    targetVal = String((Number(sourceVal) / 39370.079).toFixed(2));
  } else if (targetType === 'Meter') {
    targetVal = String((Number(sourceVal) / 39.37).toFixed(2));
  } else if (targetType === 'Centimeter') {
    targetVal = String((Number(sourceVal) * 2.54).toFixed(2));
  } else if (targetType === 'Mile') {
    targetVal = String((Number(sourceVal) / 63360).toFixed(2));
  } else if (targetType === 'Foot') {
    targetVal = String((Number(sourceVal) / 12).toFixed(2));
  }
  return targetVal;
};

module.exports = {
  convertCelsius,
  convertFahrenheit,
  convertKelvin,
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
