//checks to see if a String is a palindrome
const isPalindrome = (word) => {
    
    if (word.length == 0 || word.length == 1 ) //base case is if the word has a length of 0 or 1
        return true;
    else
    {
        let first = word.charAt(0);
        let last = word.charAt(word.length-1);
        if(first == last) //compares the first and last character 
        {
            let shortened = word.substring(1,word.length-1); //continues recursion if they are equal
            return isPalindrome(shortened);
        }
        return false; //return false if the comparison fails
    }    
        
}
//test cases
console.log(isPalindrome('121'))
console.log(isPalindrome('22'))
console.log(isPalindrome('1'))
console.log(isPalindrome(''))
console.log(isPalindrome(' '))
console.log(isPalindrome('567')) 



const isPandigital = (number) => {
    const set = new Set();
    let number1 = number;
    while (number1!=0)
    {
        let rightDigit = number1%10; //takes the right most digit of the number
        if(!(set.has(rightDigit))) //adds the number to the set if it is not already there
            set.add(rightDigit);
        number1 = Math.trunc(number1/10); //shortens the number
    }
    if(set.size==10) //set size of 10 means that 0-9 is in the set -> number is pandigital -> return true
        return true; 
    return false;   
}
//test cases
console.log(isPandigital(10123456789));
console.log(isPandigital(1));
console.log(isPandigital(100000));