//L1 - Employee Performance Evaluation System

//You are tasked with building an Employee Performance Evaluation System. You have an array of employee objects, where each employee has the following properties: name, tasksCompleted, and rating. Your task is to perform the following steps using higher-order functions:



let Input= [

  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  
  ];

  let epvs=function(a){
    let b=a.filter((ele)=>{
      return ele.tasksCompleted>=5;
    });

   
    
   let narr=b.map((ele)=>{

    let performanceCheker={
      name: ele.name,
     Performance:""
    }

    if(ele.rating>=4.5){ 
      performanceCheker.Performance="Excellent";  
    }else if(ele.rating>=3 && ele.rating<=4.5){
    performanceCheker.Performance="Good";
    }else{
      performanceCheker.Performance="Need to Improvement";
    }
      return performanceCheker;
   });

   
    const checkOrder={
      'Excellent':1,
      'Good':2,
      'Need to Improvemnet':3
   }

    narr.sort((a,b)=>checkOrder[a.Performance]-checkOrder[b.Performance]);
    return narr;
  }

  console.log(epvs(Input));