
function createEmployeeRecord([firstName,familyName,title,payPerH]){
   let emplObject = {
       firstName : firstName,
       familyName : familyName,
       title : title,
       payPerHour : payPerH,
       timeInEvents : [],
       timeOutEvents : [],
   }
   return emplObject;
}
function createEmployeeRecords(emplRecords){
    return emplRecords.map(createEmployeeRecord);
}
function createTimeInEvent(emplRecords,timeIn){
    let dateTab = timeIn.split(" ");
    let timeStamp = {
        type : "TimeIn",
        date : dateTab[0],
        hour : parseInt(dateTab[1]),
    }
    emplRecords.timeInEvents.push(timeStamp);
    return emplRecords;
}
function createTimeOutEvent(emplRecords,timeOut){
    let dateTab = timeOut.split(" ");
    let timeStamp = {
        type : "TimeOut",
        date : dateTab[0],
        hour : parseInt(dateTab[1]),
    }
    emplRecords.timeOutEvents.push(timeStamp);
    return emplRecords;
}
function hoursWorkedOnDate(emplRecords,date){
     let timeIn= emplRecords.timeInEvents.filter(elem => elem.date=date).map(elem =>  elem.hour/100);      
     let timeOut= emplRecords.timeOutEvents.filter(elem => elem.date=date).map(elem => elem.hour/100);     
    return timeOut - timeIn;
}      
function wagesEarnedOnDate(emplRecords,date){
    return hoursWorkedOnDate(emplRecords,date)* emplRecords.payPerHour;
}
function allWagesFor(emplRecords){
        let pay = 0 ;
        for (let time of emplRecords.timeInEvents){
            let payday = wagesEarnedOnDate(emplRecords, time.date )
            console.log(wagesEarnedOnDate(emplRecords, time.date ))
            pay += payday;
        }
        return pay;       
}
function calculatePayroll(){

}