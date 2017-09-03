/**
 * Created by Sudipta Saha on 7/19/2017.
 */
/**
 * This function checks if an expression is arithmetically valid or not.
 *
 * @param eq <pre>infix arithmetic expression.
 * <b>The expression needs to be enclosed with opening and closing brackets.</b>
 * Operations that are allowed are :
 * | : Square root. (√)
 * ^ : Power.
 * * and / : multiplication and division.
 * + and - : addition and subtraction.
 * Incase of using negative numbers, for example (-3), enter it as "(,0,-,3,)".
 * </pre>
 *
 * @return True if valid expression, else false.
 *
 * @throws ExpressionFormatException Throws exception if infix arithmetic expression is invalid .
 */
function Conversions_validExpression(eq){
    bracket=[];
    st=eq.split(",");
    temp=[];
    flag=true;
    if(eq.charAt(0)!="(" || eq.charAt(eq.length-1)!=")"){
        throw("ExpressionFormatException : Missing opening or closing brackets.");
    }
    for(i=0;i<st.length;i++){
        temp=st[i];

        switch(temp.trim()){
            case "(":bracket.push(temp);
                break;
            case ")":if(bracket.length>0){

                while(bracket[bracket.length-1]!="("){
                    bracket.pop();

                }
                bracket.pop();
                if(bracket.length>0)
                    bracket.push("5");

            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "|":bracket.push(temp);
                break;
            case "^":if(bracket.length>0){
                if(Conversions_getSymbolPriority(bracket[bracket.length-1])!=0){
                    throw("ExpressionFormatException : Missing opening or closing braces.");
                }
                else{
                    bracket.push(temp);
                }
            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "*":if(bracket.length>0){

                if(Conversions_getSymbolPriority(bracket[bracket.length-1])!=0){
                    throw("ExpressionFormatException : Missing opening or closing braces.");
                }
                else{
                    bracket.push(temp);
                }
            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "/":if(bracket.length>0){
                if(Conversions_getSymbolPriority(bracket[bracket.length-1])!=0){
                    throw("ExpressionFormatException : Missing opening or closing braces.");
                }
                else{
                    bracket.push(temp);
                }
            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "+":if(bracket.length>0){
                if(Conversions_getSymbolPriority(bracket[bracket.length-1])!=0){
                    throw("ExpressionFormatException : Missing opening or closing braces.");
                }
                else{
                    bracket.push(temp);
                }
            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "-":if(bracket.length>0){
                if(Conversions_getSymbolPriority(bracket[bracket.length-1])!=0){
                    throw("ExpressionFormatException : Missing opening or closing braces.");
                }
                else{
                    bracket.push(temp);
                }
            }
            else{
                throw("ExpressionFormatException : Missing opening or closing braces.");
            }
                break;
            case "": throw("ExpressionFormatException : Cannot accept blank characters.");

            default:

                if(!isNaN(temp)){
                    bracket.push(temp);

                }
                else
                    {
                throw("ExpressionFormatException : Unknown numerical character. at '"+temp+"'");

                    }
                break;
        }


    }
    if(bracket.length==0){
        return true;
    }
    //  System.out.print("\n"+bracket.toString());
    return false;
}

/**
 * This function converts a given infix string to postfix.
 *
 * @param eq The infix string.
 *
 * @return The equivalent postfix string.
 *
 * @throws ExpressionFormatException Throws exception if the entered infix expression is invalid.
 */
function Conversions_infix_to_Postfix(eq){
    postEq="";
    st=eq.split(",");
    temp="";
    symbolStack=[];
    postfixStack=[];
    //  char[] postEq=new char[st.countTokens()];
    i=0;
    if(Conversions_validExpression(eq)){
       for(i=0;i<st.length;i++){
            temp=st[i];
            switch(temp){
                case "("://System.out.print("\n"+temp);
                    symbolStack.push(temp);
                    break;
                case ")"://System.out.print("\n"+temp);
                    while(symbolStack[symbolStack.length-1]!="("){
                        postEq=postEq.concat(symbolStack.pop()+",");
                    }
                    symbolStack.pop();
                    break;
                case "|"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                case "^"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                case "*"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                case "/"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                case "+"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                case "-"://System.out.print("\n"+temp);
                    if(Conversions_getSymbolPriority(symbolStack[symbolStack.length-1])!=5){
                        if(getSymbolPriority(temp)>=getSymbolPriority(symbolStack[symbolStack.length-1])){
                            symbolStack.push(temp);
                        }
                        else{
                            postEq=postEq.concat(symbolStack.pop()+",");
                            symbolStack.push(temp);
                        }
                    }
                    else{
                        symbolStack.push(temp);
                    }
                    break;
                default:
                    // System.out.print("\n"+Double.parseDouble(temp));
                    postEq=postEq.concat(temp+",");

                    break;
            }
        }
        if(symbolStack.length==0){
            return postEq.slice(0,-1);
        }
        else{
            throw("ExpressionFormatException : Not a valid expression.");
        }

    }
    else{
        throw("ExpressionFormatException : Not a valid expression.");
    }

}

/**
 * This function converts a given infix string to prefix.
 *
 * @param eq The infix string.
 *
 * @return The equivalent prefix string.
 *
 * @throws ExpressionFormatException Throws exception if the entered infix expression is invalid.
 */
function Conversions_infix_to_Prefix(eq){
   // prefixEq=
    temp=reverse(eq);

    temp=temp.replace(/[)]/g, '/');
    temp=temp.replace(/[(]/g, ')');
    temp=temp.replace(/[/]/g, '(');
    temp=Conversions_infix_to_Postfix(temp);
    prefixEq=reverse(temp);
    //  System.out.print(" Final : "+prefixEq.toString());
    return prefixEq;
}

function reverse(str){
    return str.split("").reverse().join("");
}

/**
 * This function returns symbol priority.
 * @param symbol Either of symbols (,|,^,*,/,+,-
 * @return <pre>Following priority :
 * ( : 5
 * | : 4
 * ^ : 3
 * * or / : 2
 * + or - : 1
 * </pre>
 */
function Conversions_getSymbolPriority(symbol){
    switch(symbol){
        case "(":return 5;
        case "|":return 4;
        case "^":return 3;
        case "*":return 2;
        case "/":return 2;
        case "+":return 1;
        case "-":return 1;
    }
    return 0;
}

/**
 * <pre>This function solves an infix arithmetic expression. Each arithmetical term needs to be separated by comma.
 * <b>The expression needs to be enclosed with opening and closing brackets.</b>
 * Operations that are allowed are :
 * | : Square root. (√)
 * ^ : Power.
 * * and / : multiplication and division.
 * + and - : addition and subtraction.
 * Incase of using negative numbers, for example (-3), enter it as "(,0,-,3,)".
 * </pre>
 * <pre>
 * For example, "((10.2,+,3)*5)" is valid expression.
 * </pre>
 *
 * @param equation Infix arithmetic expression that needs to be evaluated.
 *
 * @return Value of the arithmetic expression, if the arithmetic expression is valid.
 *
 * @throws ExpressionFormatException Throws exception if the entered infix expression is invalid.
 */
function Evaluation_solveEq(equation){
    postfixExpr=Conversions_infix_to_Postfix(equation);
    eval=[];
    temp="";
    st=postfixExpr.split(",");
    for(i=0;i<st.length;i++){
        temp=st[i];

        switch(temp){
            case "|":eval=Evaluation_calculate(eval, temp);


                break;
            case "^":eval=Evaluation_calculate(eval, temp);


                break;
            case "*":eval=Evaluation_calculate(eval, temp);


                break;
            case "/":eval=Evaluation_calculate(eval, temp);


                break;
            case "+":eval=Evaluation_calculate(eval, temp);


                break;
            case "-":eval=Evaluation_calculate(eval, temp);


                break;
            default:

                    // System.out.print("\n"+Double.parseDouble(temp));
                    if(!isNaN(temp)) {
                        eval.push(temp);
                    }
                    else{
                        throw("ExpressionFormatException : Unknown numerical character.");
                    }

                break;
        }
    }
    //  System.out.print(" Stack : "+eval.toString());
    return eval.pop();
}

/**
 * This function calculates binary arithmetic operands.
 * @param eval Stack containing arithmetic digits.
 * @param symbol Equivalent symbol of arithmetic operation.
 */
function Evaluation_calculate(eval, symbol){
    a=0,b=0;
    switch(symbol){
        case "|"://System.out.print("\n"+temp);
            eval.push(Math.sqrt(eval.pop()));
            break;
        case "^"://System.out.print("\n"+temp);
            b=parseFloat(eval.pop());
            a=parseFloat(eval.pop());
            eval.push(Math.pow(a, b));
            break;
        case "*"://System.out.print("\n"+temp);
            b=parseFloat(eval.pop());
            a=parseFloat(eval.pop());
            eval.push(a*b);
            break;
        case "/"://System.out.print("\n"+temp);
            b=parseFloat(eval.pop());
            a=parseFloat(eval.pop());
            eval.push(a/b);
            break;
        case "+"://System.out.print("\n"+temp);
            b=parseFloat(eval.pop());
            a=parseFloat(eval.pop());
            eval.push(a+b);
            break;
        case "-"://System.out.print("\n"+temp);
            b=parseFloat(eval.pop());
            a=parseFloat(eval.pop());
            eval.push(a-b);
            break;
    }
    return eval;
}