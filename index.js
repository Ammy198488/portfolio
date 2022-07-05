// const menu = document.getElementById("menu_bar");
const header = document.getElementById("header");

// console.log(header);
header.addEventListener('click', () => {
  header.classList.toggle('active');
})

// email js
// const sendBtn = document.getElementById("send_btn");
// const form = document.getElementById("form_contact");

// sendBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//    sendBtn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_0mlp5ma';

//    emailjs.sendForm(serviceID, templateID, form)
//     .then(() => {
//       sendBtn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       sendBtn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// })

// scroll to the top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
