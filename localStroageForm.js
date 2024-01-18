// localStorage.setItem("name","val");



let form=document.querySelector("form");
let main=document.querySelector(".main");

form.addEventListener("submit",(e)=>{
    // console.log(e);
    let name=e.target.uname.value;
    let email=e.target.email.value;
    let phone=e.target.phone.value;
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    let userDate=JSON.parse(localStorage.getItem("userDeatils")) ?? [];
    userDate.push({
        "name":name,
        "email":email,
        "phone":phone
    })
    localStorage.setItem("userDeatils",JSON.stringify(userDate));
    displayData();
    e.preventDefault();
})

function displayData(){
    let userDate=JSON.parse(localStorage.getItem("userDeatils")) ?? [];
   let finalData='';
   userDate.forEach((element,i)=>{
finalData +=`<div class="items">
			<span>&times;</span>
			<h5>Name</h5>
			<div>${element.name}</div>
		
			<h5>Email</h5>
			<div>${element.email}</div>

			<h5>Phone-no</h5>
			<div>${element.phone}</div>
		</div>`
   });
  main.innerHTML+finalData
}
displayData();