

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
      var ddmmyy=dateStr.day + dateStr.month+dateStr.year;
      
    
    
    
    
    }