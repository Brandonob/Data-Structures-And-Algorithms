//Write a parentheses, brackets, and braces validator. It should take in a String and consider the openers and closers that appear within it.

//Openers are '(', '[', '{'.

//Closers are ')', ']', '}'.

//Write an efficient function that determines if the input String's openers and closers are properly matched and nested.

//[[]]
//[()]
//{asdfs[asdfdsaf]fdsafdsa}
//{(}
// {[}]
//(((((()))

//iterate thru the string and identify openers and closers
// save openers & closers to array
//if opener save to array 
//if closer check to see if it matches the laast element in opener array & delete last element


const braceValidatopr = (string) => {
    const openers = ['(','[', '{' ]
    const closers = [')', ']', '}']
    let checker = []
  
  for(i = 0; i < string.length; i++) {
    if(openers.include(string[i])) {
      checker.push(string[i])
    } else if(closers.include(string[i])) {
        if(sameTypeChecker(string[i]) === false){   //create sameTypeChecker to make code work
          return false
        }
    }
  }
  return true;
  }
  
//   braceValidate("()()()") ==== true