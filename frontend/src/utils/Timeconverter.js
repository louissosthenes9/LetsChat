export function TimeConverter(dateString){

   const date = new Date(dateString)
   const hrs = padZero(date.getHours())
   const mins = padZero(date.getMinutes())

   const now = new Date();
 
   return `${hrs}:${mins}`
      
}

// helper function to pad a single digit number with leading zero

function padZero(number)
{
    return  number.toString().padStart(2,"0")

}
