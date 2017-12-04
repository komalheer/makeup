function checkUsersValid(validUsers) 
{
     return(function allUsersValid(submittedUsers) 
     {
        return(submittedUsers.every(function(submittedUser)
        {
           return validUsers.some(function(validUser) 
      {
       if(validUser.id==submittedUser.id){
           return(validUser.id);
       }
      })
  }))
     })
}
module.exports=checkUsersValid;