

function reverseStr(str){
    var listOfChars=str.split('');
    var reverseListOfChars=listOfChars.reverse();
    var reversedStr=reverseListOfChars.join('');
    return reversedStr;
    }
    
    function isPalindrome(str){
      var reverse=reverseStr(str);
    
    if(str===reverse)
    {
      return true;
    }
      else{
    return false;
      }
    }
    
    console.log(isPalindrome("101"));
    console.log(isPalindrome("lol"));
    console.log(isPalindrome("racecar"));
    console.log(isPalindrome("one"));
    
    
    function convertDateToStr(date){
    
      var dateStr = {day:'',month:'',year:''};
    
      if(date.day<10){
    
        dateStr.day='0'+date.day;
      }
      else{
        dateStr.day=date.day.toString();
      }
    if(date.month<10){
    
        dateStr.month='0'+date.month;
      }
      else{
        dateStr.month=date.month.toString();
      }
      dateStr.year=date.year.toString();
      
    
    return dateStr;
    }
    
    function getAllDateFormats(date){
      var dateStr=convertDateToStr(date);
    
      var ddmmyyyy=dateStr.day + dateStr.month+dateStr.year;
      var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
      var yyyymmdd=dateStr.year+dateStr.month+dateStr.year;
      var ddmmyy=dateStr.day + dateStr.month+dateStr.year.slice(-2);
      var mmddyy=dateStr.month + dateStr.day+dateStr.year.slice(-2);
      var yymmdd=dateStr.year.slice(-2) + dateStr.month+dateStr.day;

return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

//palindrome if it matches atleast one date formats 
function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes=getAllDateFormats(date);
    var flag=false;
    for(var i=0;i<listOfPalindromes.length;i++){
    if(isPalindrome(listOfPalindromes[i]))
    {
      flag=true;
      break;
    }
    }
    return flag;
    }
    
    function isLeapYear(year){
      if(year % 400 === 0){
        return true;
      }
      if(year%100===0){
        return false;
      }
      if(year%4===0){
        return true;
      }
      return false;
    }
    
    function getNextDate(date)
    {
      var day=date.day+1;
      var month=date.month;
      var year=date.year;
      var daysInMonth= [31,28,31,30,31,30,31,31,30,31,30,31];
      //Trying to add days
    if(month===2)
    {
    if(isLeapYear(year))
    {
      if(day>29){
      day=1;
      month++;
      }
    }
    else{
      if(day>28){
      day=1;
      month++;
      } 
    }
    }
    else{//Max day check-if date is exceeding the monthly maxm day
      if(day>daysInMonth[month-1]){
        day=1;
        month++;
    }
    }
    if(month>12){
    month=1;
    year++;
    }
    return{
      day:day,
      month:month,
      year:year
    };
    }
    
    function getPreviousDate(date)
    {
      var day=date.day;
      var month=date.month;
      var year=date.year;
      var daysInMonth= [31,28,31,30,31,30,31,31,30,31,30,31];
      if(day===1)
      {
      month--;
      day=daysInMonth[month];
      }
      else
      {
      day--;
      }
    if(month<1){
    month=12;
    year--;
    }
    
    return{
      day:day,
      month:month,
      year:year
    };
    }
    
    function getNextPalindromeDate(date)
    {
    var ctr1=0;
    var nextDate=getNextDate(date);
    while(1)
    {//Day counter for next date
    ctr1++;
    var isPalindrome=checkPalindromeForAllDateFormats(nextDate);
    if(isPalindrome){
      break;
    }
    nextDate=getNextDate(nextDate);
    }
    return [ctr1,nextDate];
    }
    
    function getPreviousPalindromeDate(date)
    {
    var ctr2=0;
    var previousDate=getPreviousDate(date);
    while(1)
    {//Day counter for next date
    ctr2++;
    var isPalindrome=checkPalindromeForAllDateFormats(previousDate);
    if(isPalindrome){
      break;
    }
    previousDate=getPreviousDate(previousDate);
    }
    return [ctr2,previousDate];
    }
    
    var dateInputRef=document.querySelector('#bday-input');
    var showBtnRef=document.querySelector('#show-btn');
    var resultRef=document.querySelector('#result-next');
    var resultRef1=document.querySelector('#result-next1');
    var resultRef2=document.querySelector('#result-previous');
    function clickHandler(e)
    {
      
      var bdayStr=dateInputRef.value;
      if(bdayStr !== '')
      {
      var listOfDate = bdayStr.split('-');
      var date={day:Number(listOfDate[2]),
                month:Number(listOfDate[1]),
                year:Number(listOfDate[0])};
      }
      
    var isPalindrome = checkPalindromeForAllDateFormats(date);
    if(isPalindrome){
    resultRef.innerText='Yay! Your birthday is a palindrome!🥳'
    }
    else{
      var [ctr1,nextDate] = getNextPalindromeDate(date);
      var [ctr2,previousDate]=getPreviousPalindromeDate(date);
      resultRef.innerText='Sorry! Your birthday is not a palindrome!😔'
      resultRef1.innerText=`The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year},you missed it by ${ctr1} days! 😔`
      resultRef2.innerText=`The previous palindrome date is ${previousDate.day}-${previousDate.month}-${previousDate.year},you missed it by ${ctr2} days! 😮`
    }
    }
    
    showBtnRef.addEventListener('click',clickHandler);
    
      
    
    
    
    
    