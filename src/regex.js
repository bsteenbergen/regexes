const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  masterCard:
    /^5[1-5][0-9]{14}$|^(222[1-9]|22[3-9]{1}[0-9]{1}|2[3-6]{1}[0-9]{2}|27[0-1]|2720)[0-9]{12}$/,
  adaFloat:
    /^[0-9]+(_[0-9]+)*(.[0-9]+(_[0-9]+)*)?((E|e)[+]?[0-9]+(_[0-9]+)*|(E|e)-[0-9]+(_[0-9]+)*)?$|^[0-9]+(_[0-9]+)*[#]([0-9A-Fa-f]+(_[0-9A-Fa-f]+)*)*(.([0-9A-Fa-f]+(_[0-9A-Fa-f]+)*)*)*#((E|e)[+]?[0-9]+(_[0-9]+)*|(E|e)-[0-9]+(_[0-9]+)*)?$/,
  notThreeEndingInOO: /.*(?<!(\d)|([oO]{2}))$/,
  divisibleBy32: /^0{1,4}$|^[01]*00000$/,
  sevenThroughThirtyOne: /^[7-9]$|^([12]\d|3[01])$/,
  mLComment: /^\(\*((?!(\*\))).)*\*\)$/,
  notFileForFirstNoLookAround:
    /^$|^[A-Za-eg-z][A-Za-z]*|^f[A-Za-hj-np-z][A-Za-z]*|^fi[A-Za-km-qs-z][A-Za-z]*$|^fil[A-Za-df-z][A-Za-z]*$|^file[A-Za-z]+$|^for[A-Za-z]+$|^fir[A-Za-rt-z][A-Za-z]*$|^firs[A-Za-su-z][A-Za-z]*$|^first[A-Za-z]+$/,
  notFileForFirstWithLookAround: /^(?!(file|for|first)$).*$/,
  cOctal: /^0[0-7]*$/,
  restrictedFloatingPoint: /^[-+]?[0-9]+()\.?([0-9])*(([eE][-+]?)?[0-9]{1,3})?$/,
  palindrome2358: /^(.)(?:(.)(?:(.)(?:(.)\4\3)?\3?\2)?)?\1$/u,
  noNegativeIntLits: /(?<![-\d])(\d+)/,
  repeated: /^([a-z]*)\1$/,
}

export function matches(name, string) {
  return regexes[name].test(string)
}
