function timeConversion(s) {
    // Write your code here
     s = '12:05:00AM'; //"19:05:45PM"
    
    // destructuring assignment
    // let arr = ['12', '05', '00AM']
    // let [a,c,last] = arr;
    // console.log()
    let [hour,minute,last] = s.split(':');
    
    // let arr = s.split(':');
    // arr = [12, 05, 00AM];
    // let hour = arr[0];

    // object destructuring
    // let obj = { a:1, b:2, c:3};
    // let newA = obj.a;
    // let newC = obj.c;
    // new === 1

    // let { c } = obj;
    // console.log(c);

    let newHour = [hour,minute];
    let newLast = last.split('');
    if(hour === '12'){
        for(let i=0;i<newLast.length;i++){
            if(newLast[i]==='P'){
                hour = '12';
                break;
            }else{
                hour = '00';
            }
        }
        newHour.splice(0,1,hour);
    }else{
        for(let i=0;i<newLast.length;i++){
            if(newLast[i]==='P'){
                hour = parseInt(hour) +12;
                break;
            }else{
                hour;
            }
        }
        newHour.splice(0,1,hour);
    }
    newHour.push(newLast.slice(0,-2).join(''));
    let final24hour = newHour.join(':');
    console.log(final24hour);

}
timeConversion();
