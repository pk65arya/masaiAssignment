//Title: L2 - Advanced User Privilege Management System

// function advanceUserManagement(obj){
  


// }

let person={
  role:"manager",
  experience:3,
  active:false,
  department:"Sales",

  advanceUserManagement:function(){
    const exp=this.role
    switch(exp){
      case "admin":
        let result=this.active==true && this.experience>=5 && this.department=="IT"? "Full IT Admin Access": 
        this.active==true && this.experience>=5 &&
        this.department!=="IT"?"Full General Admin Access":
        this.active==true && this.experience<5 ?"Limited Admin Access":
         "Admin Access Revoked";
      console.log(result);
         break;

         case "manager":
          let res=this.active==true && this.experience>3 && this.department=="sales"?"Full Sales Manager Access":
                  this.active==true && this.experience>3 && this.department!="sales"?"Full Manager Access":
                  this.active==true && this.experience<=3?"Limited Manager Access":"Manager Access Revoked";

                  console.log(res);
                  break;

          case "user":
            let resul=this.active==true && this.department=="Support" ? "Priority Support Access":
                      this.active==true && this.department!=="Support"? "User Access":"User Access Revoked";
                      console.log(resul);
                      break;

            default:
              console.log("Invalid Role");         
                  
    }
  }
}

person.advanceUserManagement();