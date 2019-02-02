function convertToRoman(num) {
    num=num+"";var result="";var arr=['M','D','C','L','X','V','I'];
  function fori(val){
    for(var j=0;j<val;j++){
     result+=arr[iia];
      }  } 
  for (var d=0;d<num.length;d++){
      var iia=arr.length-1-(num.length-1)*2+d*2;
        if(Number(num[d])<4){
        fori(Number(num[d]))
      }
      else if(Number(num[d])==4){
        result+=arr[iia]+arr[iia-1]
      }
      else if(Number(num[d])<9){
        result+=arr[iia-1];
        fori(Number(num[d])-5)
      }
      else if(Number(num[d])==9){
        result+=arr[iia]+arr[iia-2]
      }
  }
  return result;}
  
  function inhtml(){
    let res = document.getElementById(this.dataset.res);
    let str=document.getElementById(this.dataset.input).value
    res.innerHTML=convertToRoman(str);

  }
  var btn=document.getElementById('rcBtn');
  btn.addEventListener("click",inhtml,false);
  convertToRoman(649);