
// Score >= 90 → "A"
// Score >= 80 and < 90 → "B"
// Score >= 70 and < 80 → "C"
// Score >= 60 and < 70 → "D"
// Score < 60 → "F"

function studentGrade(obj){

  for(let score in obj){
  let marks=obj[score];    
      let grade= marks>=90 ?"A":
                 marks>=80 && marks<90?"B":
                 marks>=70 && marks<80?"C":
                 marks>=60 && marks<70?"D":
                 "F";

                 console.log(score+" - "+ grade)
                 
              
  }



}


let studentScores = {
  John: 85,
  Emma: 92,
  Sam: 67,
  Bob: 45
};

studentGrade(studentScores);

