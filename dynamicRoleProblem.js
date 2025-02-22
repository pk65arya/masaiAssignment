//Title: L1 - Dynamic User Role Message with Object Properties

function accessCheck(obj){
   let ro=obj.role;
   let status=obj.Active

  let message= ro=="Admin" && status==true ? "Admin Access Granted!":
                ro=="Admin" && status==false? "Admin Access Revoked":
                ro=="User"  && status==true? "User Access Granted!":
                ro=="User" && status==false? "User Access Revoked":
                "Access Denied";

                console.log(message);

}

let user={
  name: "alice",
  role: "Us",
  Active: true
}

accessCheck(user)

