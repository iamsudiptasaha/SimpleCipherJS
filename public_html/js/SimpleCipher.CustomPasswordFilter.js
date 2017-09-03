/**
 * Created by Sudipta Saha on 7/17/2017.
 */

/**
 * This function returns an instance of CustomPasswordFilter. It is required in case of user defined password parameters.
 *
 * @param alphabetSet String of alphabets that the password may contain. Separate alphabets for uppercase and lowercase. The alphabets need to be put sequentially without any space.
 * <pre>
 * For example, "ABCdef" will check for A,B,C,d,e,f and will not allow a,b,c,D,E,F.
 * </pre>
 *
 * @param minAlphabets The minimum number of alphabet characters that the custom password may contain.
 *
 * @param digitSet String of digits that the password may contain. The digits need to be put sequentially without any space.
 * <pre>For example, "0178" will check for 0,1,7,8.
 * </pre>
 *
 * @param minDigits The minimum number of digit characters that the custom password may contain.
 *
 * @param symbolSet String of symbols that the password may contain. The set of symbols permitted are $,@,!,%,*,#,?,&amp; The digits need to be put sequentially without any space.
 *
 * @param minSymbols The minimum number of symbol characters that the custom password may contain.
 *
 * @param minCharacter Total number of minimum characters the password might contain.
 *
 * @param maxCharacter Total number of maximum characters the password might contain.
 * <b>In case of unrestricted maximum characters, put maxCharacter as 0.</b>
 *
 * @return instance of CustomPasswordFilter.
 *
 * @throws InvalidFormatException Throws exception if any of the input strings of alphabets, digits or symbols are invalid.
 */
function CustomPasswordFilter_getInstance(alphabetSet, minAlphabets, digitSet, minDigits, symbolSet, minSymbols, minCharacter, maxCharacter){
    this.alphabetSet=CustomPasswordFilter_setAlphabetSet(alphabetSet);
    this.digitSet=CustomPasswordFilter_setDigitSet(digitSet);
    this.symbolSet=CustomPasswordFilter_setSymbolSet(symbolSet);
    this.minCharacter=minCharacter;
    this.maxCharacter=maxCharacter;
    this.minAlphabets=minAlphabets;
    this.maxAlphabets;
    this.minDigits=minDigits;
    this.maxDigits;
    this.minSymbols=minSymbols;
    this.maxSymbols;

}

/**
 * @param alphabetSet the alphabetSet to set
 */
function CustomPasswordFilter_setAlphabetSet(alphabetSet){
    pattern=new RegExp("^(?:([A-Za-z])(?!.*\\\\1))*$");
    if(alphabetSet==null || alphabetSet.length === 0)
        alphabetSet=null;
    else{

        if(pattern.test(alphabetSet.trim())){
            return alphabetSet.trim();
        }
        else
            throw new InvalidFormatException("Alphabet characters mismatch.");

    }
}

/**
 * @param digitSet the digitSet to set
 */
function CustomPasswordFilter_setDigitSet(digitSet){
   pattern=new RegExp("^(?:([0-9])(?!.*\\1))*$");
    if(digitSet==null || digitSet.length === 0)
        digitSet=null;
    else{

        if(pattern.test(digitSet.trim())){
          return digitSet.trim();
        }
        else
            throw new InvalidFormatException("Numeric characters mismatch.");

    }
}

/**
 * @param symbolSet the symbolSet to set
 */
function CustomPasswordFilter_setSymbolSet(symbolSet){
    pattern=new RegExp("^(?:([!@#$%^&?*])(?!.*\\1))*$");
    if(symbolSet == null || symbolSet.length === 0)
        symbolSet = null;

    else{

        if(pattern.test(symbolSet.trim())){
            return symbolSet.trim();
        }
        else
            throw("InvalidFormatException : Symbolic characters mismatch.");

    }



}
