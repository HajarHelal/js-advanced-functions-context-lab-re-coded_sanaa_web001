/* Your Code Here */
// Your code here
function createEmployeeRecord(row){
  return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
 function createEmployeeRecords(employeeData){
   return employeeData.map(function(row){
         return createEmployeeRecord(row)
     })
 }
function createTimeInEvent(employee, dateStamp){
      let [date, hour] = dateStamp.split(' ')

      employee.timeInEvents.push({
          type: "TimeIn",
          hour: parseInt(hour, 10),
          date,
      })

      return employee
  }
function createTimeOutEvent(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ')

   employee.timeOutEvents.push({
       type: "TimeOut",
       hour: parseInt(hour, 10),
       date,
   })

   return employee
}


function hoursWorkedOnDate(employee, soughtDate){

let hoursWorkedOnDate = function(employee, soughtDate){

    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })
    let outEvent = employee.timeOutEvents.find(function(e){
     return e.date === soughtDate
 })

 return (outEvent.hour - inEvent.hour) / 100
}


 function wagesEarnedOnDate(employee, dateSought){

let wagesEarnedOnDate = function(employee, dateSought){

    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}


 function allWagesFor(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

let payable = eligibleDates.reduce(function(memo, d){
    return memo + wagesEarnedOnDate(employee, d)
}, 0)

return payable
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
