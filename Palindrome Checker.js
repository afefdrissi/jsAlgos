/*JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
function palindrome(str) {
    // Good luck!
    var res=document.getElementById("res-palindrome");
    str=document.getElementById('palindrome').value;
    if (str=="") str="An empty string "
    let str_span="<strong>"+str+"</strong>";
    var newstr=str.toLowerCase()
    newstr=newstr.replace(/[^a-z0-9]/g,"");
    for (var i=0;i<newstr.length/2+1;i++){
  if(newstr[i]!=newstr[newstr.length-1-i]){
res.innerHTML=str_span+" is not a Palindrome.";
res.style.color="#f7515f"
    return false;
  }
    }
    res.innerHTML=str_span+" is a Palindrome.";
    
res.style.color="#10bc6c"


    return true;
  }
  
  
  
  //palindrome("@_''-(1eyE");
  var btn=document.getElementById('palindromeBtn');
  btn.addEventListener("click",palindrome,false);