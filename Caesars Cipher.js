/*JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

function rot13(str) { // LBH QVQ VG!
  var rot=13

 var res=document.getElementById("caesars-res");
  str=document.getElementById('caesars').value;
    var returnedStr="";
    let regex=/\w/;
    for(var i=0;i<str.length;i++){
      if(regex.test(str[i])){
    var x=str.charCodeAt(i);
    if(x<=77 || (x>=97 && x<=109)){
      returnedStr+=String.fromCharCode(x+rot);
    }
    else{
      returnedStr+=String.fromCharCode(x-rot);
      
    }
      }
      else{
        returnedStr+=str[i];
      }
    }
      res.innerHTML=returnedStr;
      return returnedStr;
    }
   
    // Change the inputs below to test
    //console.log(rot13("SERR PBQR PNZC"));
    var btn=document.getElementById('caesarsBtn');
    btn.addEventListener("click",rot13,false);