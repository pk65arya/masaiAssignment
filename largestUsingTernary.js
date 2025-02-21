function largestTernary(a,b,c){


  const check=(a>b) && (a>c) ? a:
               (b>c) && (b>a) ? b:
                c;
                
                return check;
}

console.log(largestTernary(500,6,5));