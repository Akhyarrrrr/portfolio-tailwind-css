//Darkmode toggle
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

//Toggle 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 checkbox.checked = true;
} else {
  checkbox.checked = false;
}

//job
var typed= new Typed(".text", {
    strings:["Frontend Developer", "Freelancer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; 
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

//Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Send Message to Email
function SendMail(){
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
        emailjs.send("service_ioopzjo", "template_4kx0cvo", params).then(function (res) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully.'
        });
      });
}
