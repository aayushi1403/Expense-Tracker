let balance=document.querySelector("#balance")
let income=document.querySelector("#money-plus")
let expense=document.querySelector("#money-minus")
let userList=document.querySelector("#list")

let newTransactionDetail=document.querySelector("#text")
let newAmount=document.querySelector("#amount")
let addTransaction=document.querySelector(".btn")
let form = document.querySelector("#form");
let TransactionObj=
{
  description:"",
  amount:0
}
let TransactionArray=[]

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let des=newTransactionDetail.value;
  let userAmount=newAmount.value;
  
})