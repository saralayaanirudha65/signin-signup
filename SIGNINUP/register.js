function signinn()
{
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let retypepassword=document.getElementById('retypepassword').value

    let exp1=/^[A-Za-z]+$/
    if(firstname == "abc" && lastname == "xyz" && email == "abc@gmail.com" && password == "bye" && retypepassword == "bye"){
    alert("Registered Succeessfully")

}
else if(firstname == "" && lastname == "" && email == "" && password == "" && retypepassword == ""){
    document.getElementById("warn1").innerHTML="please fill out the field";
    document.getElementById("warn2").innerHTML="please fill out the field";
    document.getElementById("warn3").innerHTML="please fill out the field";
    document.getElementById("warn4").innerHTML="please fill out the field";
    document.getElementById("warn5").innerHTML="please fill out the field";
}
}