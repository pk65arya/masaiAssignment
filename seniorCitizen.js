function checkDiscountAbility(age){

  if(age<=0){
    return "Invalid Age";
  }
  const check= age>=60 ? "Eligible for Senior Discount":"Not Eligible for Senior Discount"
   return check;
}

console.log(checkDiscountAbility(6));