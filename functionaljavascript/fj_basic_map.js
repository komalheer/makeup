function doubleAll(number) 
{
  return number.map(function double(numbers) 
  {
   let num= numbers*2;
   return(num);
  })
}
module.exports=doubleAll;