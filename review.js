function timeConversion(s) {
    // Write your code here
     s = '02:05:00PM'; //"19:05:45PM"
    let [hour,minute,last] = s.split(':');

    //check index
    if (last.indexOf("AM") === 2) {
        // ternary expression
        hour = hour === '12' ? '00' : hour;
    } else {
        // handle PM case
        hour = hour === '12' ? hour : parseInt(hour, 10) + 12;
    }

    // hour = last.indexOf("AM") == 2 ? 
    //     hour === '12' ? '00' : hour :
    //     hour === '12' ? hour : parseInt(hour, 10) + 12;

    return hour +':'+minute + ":" + last.slice(0,2);    
}
let res = timeConversion();
console.log(res);