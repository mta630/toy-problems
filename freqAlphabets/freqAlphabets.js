/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let res = '';
  for(let i=s.length-1;i>-1;i--){
      if(s[i] === '#'){
          res=toAlpha(s[i-2]+s[i-1])+res;
          i-=2;
      }else res=toAlpha(s[i])+res;
  }
  return res
};

var toAlpha = (s)=>String.fromCharCode(parseInt(s)+96);