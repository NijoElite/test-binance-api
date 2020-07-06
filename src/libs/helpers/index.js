export const formatNumber = (str, fractionDigits) => !isNaN(str) ? Number(str).toFixed(fractionDigits) : '';
