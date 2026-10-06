const buyProspective = ()=>{
    return AdmissionProcess("prospector bought",1000)
}

const FillAdmissionform = ()=>{
    return AdmissionProcess("form filled",1000)
}

const submitAdmissionform = ()=>{
     return AdmissionProcess("Admission form Submited ",1000)
}
const answerTheExam = ()=>{
     return AdmissionProcess("Exam Answered ",1000)
}

const AdmissionSuccessfull =()=>{
  return AdmissionProcess("admission Success ",1000)
}
const AdmissionProcess = (text,time)=>{
    let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
             resolve(text)
            },time)
    })
    return promise
}

module.exports = {
    buyProspective ,
    FillAdmissionform ,
    submitAdmissionform,
    answerTheExam ,
    AdmissionSuccessfull,
    AdmissionProcess
}