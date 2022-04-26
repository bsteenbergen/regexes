const regexes = {
  canadianPostalCode:
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  masterCard:
    /^5[1-5][0-9]{14}|(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$/,
  adaFloat: /^[0-9]+(_[0-9]+)*(.[0-9]+(_[0-9]+)*)?((E|e)[+]?[0-9]+(_[0-9]+)*|(E|e)-[0-9]+(_[0-9]+)*)?$|^[0-9]+(_[0-9]+)*[#]([0-9A-Fa-f]+(_[0-9A-Fa-f]+)*)*(.([0-9A-Fa-f]+(_[0-9A-Fa-f]+)*)*)*#((E|e)[+]?[0-9]+(_[0-9]+)*|(E|e)-[0-9]+(_[0-9]+)*)?$/,
  notThreeEndingInOO: /.*(?<!(\d)|([oO]{2}))$/,
  divisibleBy32: /^0{1,4}$|^[01]*00000$/,
  sevenThroughThirtyOne: /^[7-9]$|^([12]\d|3[01])$/,
  mLComment: /^\(\*.*\*\)$/,
  notFileForFirstNoLookAround: "",
  notFileForFirstWithLookAround: /^(?!(^file$)|(^for$)|(^first$)).*/,
  cOctal: "",
  restrictedFloatingPoint: /^[-+]?[0-9]*\.?([eE]?[0-9])*(([eE][-+])?[0-9]+)?$/,
  palindrome2358: /^(.)(?:(.)(?:(.)\3|\2?\2))?\1$/,
  noNegativeIntLits: /(?<![-\d])(\d+)/,
  repeated: /^^([a-z]*)\1$/,
}

export function matches(name, string) {
  return regexes[name].test(string)
}

/** 
 * DONE
 * canadianPostalCode
 * visa
 * noNegativeIntLits
 * repeated
 * divisibleBy32
 * notThreeEndingIn00
 * sevenThroughThirtyOne
 * notFileForFirstWithLookAround

 * IN PROG
 * masterCard    
 * mLComment
 * restrictedFloatingPoint
 * palindrome2358
 
 * TODO
 * adaFloat
 * notFileForFirstNoLookAround
 * c0ctal
 * 
 **/