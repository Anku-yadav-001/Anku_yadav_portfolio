var typed=new Typed(".text",{
    strings:["Aspiring Frontend Developer.","Problem Solver.","Hard Worker."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const from=document.querySelector('form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let number=document.getElementById("phone");
let message=document.getElementById('messagesend');
let file=document.getElementById('file');

function sendEmail(){
    let messagebody=`Full Name:     ${name.value} <br>
                     Mobile Number: ${number.value}<br>
                     Email Address: ${email.value}<br>
                     Resume:        ${file.value}<br>
                     Message :      ${message.value} `
            
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amany49751@gmail.com",
        Password : "FF172C23AF276A4BB0869C65D9E41A217CAD",
        To : 'amany49751@gmail.com',
        From : "amany49751@gmail.com",
        Subject : "Portfolio Contact Request",
        Body : messagebody
    }).then(
      message => {
            if(message=="OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
           
      }
    );
}

// function sendEmail() {
//     let messagebody=`Full Name:     ${name.value} <br>
//                         Mobile Number: ${number.value}<br>
//                         Email Address: ${email.value}<br>
//                         Resume:        ${file.value}<br>
//                         Message :      ${message.value} `
//     const reader = new FileReader();
//     reader.readAsDataURL(file.FILES[0]);

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "amany49751@gmail.com",
//         Password : "FF172C23AF276A4BB0869C65D9E41A217CAD",
//         To : 'amany49751@gmail.com',
//         From : "amany49751@gmail.com",
//         Subject : "Portfolio Contact Request",
//         Body : messagebody,
//         Attachments: [
//             {
//                 name: "File_Name_with_Extension",
//                 path: reader.result``
//             }]
//     })
//         .then(function (message) {
//             alert("Mail has been sent successfully")
//         });
// }

from.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendEmail();    
})

// let id=document.getElementById('meriid')
// let id1=document.getElementById('meriid1')
// if(innerWidth>300 && outerWidth<499){
//        id.innerHTML="👋";
//        id1.innerHTML="👋"

// }

