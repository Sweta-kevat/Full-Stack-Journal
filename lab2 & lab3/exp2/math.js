

function SimpleIntrest( P , R , time ){
  SI = (P*R*time )/100
    console.log("SimpleIntrest = ",SI)
 return SI
}

function  CompoundIntrest(A,P,R,N,T){
 
 A = Math.floor(P*(1+(R/N))**N*T)
  return A
}


module.exports = {
    SimpleIntrest,
    CompoundIntrest
}