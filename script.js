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
let index=0;
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let des=newTransactionDetail.value;
  let userAmount=newAmount.value;
  let transaction={
    id:index,
    description:des,
    amount:Number(userAmount)
  }
  index++;
    
    TransactionArray=[...TransactionArray,transaction]
    displayTransaction();
})

function displayTransaction() {
  TransactionArray.forEach((element) => {
    userList.insertAdjacentHTML(
      "beforeend",
      `<li>
        ${element.description} ${element.amount}
        <button class="deleteButton" data-id=${element.id}>
          <i class="fa fa-trash"></i>
        </button>
      </li>`
    );
  });
}
userList.addEventListener('click',(e)=>{deleting(e.target.closest('.deleteButton').dataset.id,e.target.closest('li'))})
function deleting(id,item){
  const temp=TransactionArray.filter((element)=>element.id!=Number(id))
  TransactionArray=temp;

  item.remove();
}
