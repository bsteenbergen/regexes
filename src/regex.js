const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  masterCard:
    /^5[1-5][0-9]{14}|(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$/,
  adaFloat: "",
  notThreeEndingInOO: /^(?!.*(.[oO]{2})).*/,
  divisibleBy32: "",
  sevenThroughThirtyOne: /^[7-9]|[12]\d|3[01]$/,
  mLComment: /^\(\*.*\*\)$/,
  notFileForFirstNoLookAround: "",
  notFileForFirstWithLookAround:
    /^\b(?:[a-eg-z]|f(?!ile|or|irst\b))\w*\b((?!file|for|first).*)$/,
  cOctal: "",
  restrictedFloatingPoint: /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/, // rn this is just floating point #s
  palindrome2358: /^[a-z]{2}|[a-z]{3}|[a-z]{5}|[a-z]{8}$/,
  noNegativeIntLits: /(?<![-\d])(\d+)/,
  repeated: /^^([a-z]*)\1$/,
}

export function matches(name, string) {
  return regexes[name].test(string)
}
