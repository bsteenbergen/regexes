const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  masterCard:
    /^5[1-5][0-9]{14}|((222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12})$/,
  adaFloat: "",
  notThreeEndingInOO: "",
  divisibleBy32: "",
  sevenThroughThirtyOne: "",
  mLComment: "",
  notFileForFirstNoLookAround: "",
  notFileForFirstWithLookAround: "",
  cOctal: "",
  restrictedFloatingPoint: "",
  palindrome2358: "",
  noNegativeIntLits: "",
  repeated: "",
}

export function matches(name, string) {
  return regexes[name].test(string)
}
