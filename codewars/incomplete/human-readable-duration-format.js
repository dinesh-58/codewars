// link: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {
  // Complete this function
    if (seconds === 0) return 'now';
    const SECONDS_IN_HOUR = 60**2;
    const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365; 

    let remaining;
    let year = Math.trunc(seconds / SECONDS_IN_YEAR);
    remaining = seconds % SECONDS_IN_YEAR; 
    let day = Math.trunc(remaining / SECONDS_IN_DAY);
    remaining %= SECONDS_IN_DAY; 
    let hour = Math.trunc(remaining / SECONDS_IN_HOUR);
    remaining %= SECONDS_IN_HOUR; 
    let minute = Math.trunc(remaining / 60);
    remaining %= 60; 

    let result='';
    if(year) result+=year;
    if(day) result+=day;
    if(hour) result+=hour;
    if(minute) result+=minute;

    // got ideas for solving somewhere in emacs
}


