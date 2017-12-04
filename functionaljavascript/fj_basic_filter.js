function getShortMessages(message) 
{
    return (message.filter(function(list)
        {
    if(list.message.length<50)
    {
        return(list.message.length);
    }
  })).map(function(array)
  {
    return(array.message);
  })
}
module.exports=getShortMessages;