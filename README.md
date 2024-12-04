//variable type:
the app works by taking input from number buttons and adding them as strings to a string called input then displaying the string as it is being manipulated. 

//decimal point behaviour:
if a decimal point is added, it checks first whether a decimal point already exists, if it does then this click will be ignored. if it doesnt already exist in the string, then it checks if the string is empty, if so it adds '0.'  . if it is not empty then it just adds the '.'

//number zero behaviour:
it checks if the input is equal to zero (string or number) then it ignores this input (so not to have 0000), otherwise it adds the zero.

//backtrack/ delete last digit behaviour:
it checks first if the input string is completely empty, if so then it ignores. then if it only has 1 digit, it turns it to zero, if it has more than 1, it deletes one by one. A note is made of the negative sign for negative number, the function ignores it and doesnt count it as part of the string (ie; a sting with -1, if backtracked will lead to 0 and not -)

//negative sign behaviour:
it adds negative if it doesnt exist and removes it if it exists. Fitst it checks if the input string is zero, if so it ignores it.

//choosing an operator and calculating:
clicking an operator opens an eqation, the grabs the input value and stores it in the value1, then adds the operator sign and clears the input to be ready for value 2. it awaits for input for value2. if there has been input made for value2, clicking another operator locks that input into value 2 and closes the first equation by calculating it and then opens new equation and stores the previous one's result into value 1 and the new operator as the operator, and then awaits value 2.   if there is no input given for value 2 and another operator is used , then intentionally it grabs the value 1 to use it for value 2 and closes the first equation and opens a new.
    
//it was a fun project 
