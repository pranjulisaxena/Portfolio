const buttons = document.querySelectorAll('button');
const social_media = document.querySelectorAll('.social-account i');
const follow = document.querySelector('.follow');
const body = document.querySelector('body');
const mode = document.querySelector('#mode');
const modeImage = document.querySelector('#mode img');
const first_left_main = document.querySelector('.first-left-main');
const first_right_main = document.querySelector('.first-right-main');
const second_left_main = document.querySelector('.second-left-main');
const second_right_main = document.querySelector('.second-right-main');
const second_main = document.querySelector('.second-main');
const first_main = document.querySelector('.first-main');
const btn_container = document.querySelector('#btn-container');
const About = document.querySelector('#About');
const span = document.querySelector('.first-left-main-top div span');
const type = document.querySelector('#type');
const boxes = document.querySelectorAll('.box');
const skillspercentage = document.querySelectorAll('.skills-percentage div');
const portfoliobtn = document.querySelector('#Portfolio');
const third_main = document.querySelector('.third-main');
const third_right_main = document.querySelector('.third-right-main');
const btn_container2 = document.querySelector('#btn-container2');
const btn_container2_div = document.querySelector('#btn-container2 div');
const fourth_main = document.querySelector('.fourth-main');
const fourth_left_main = document.querySelector('.fourth-left-main');
const Contact = document.querySelector('#Contact');
const Contact_me = document.querySelector('.contact-me');
const Contact_goto = document.querySelector('#contact-goto');
const menu = document.querySelector('.fa-bars');
const slide = document.querySelector('.slide');
const slideButton = document.querySelectorAll('.btns button');
// const send = document.querySelector('#send');
const inputs = document.querySelectorAll('.form input');
console.log(inputs);
const textarea = document.querySelector('.form textarea');




menu.addEventListener('click', () => {
 if(menu.classList.contains('fa-xmark')){
    menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    menu.style.position = 'absolute';
    menu.style.left = '70%';
    menu.style.top = 'auto';
      slideButton.forEach((button) => {
        button.style.display = 'none';
      });
    slide.style.display = 'none';
 }
 else{
      menu.classList.remove('fa-bars');
      menu.classList.add('fa-xmark');
      menu.style.position = 'absolute';
      menu.style.left = '0';
      menu.style.top = 'auto';
      slideButton.forEach((button) => {
        button.style.display = 'flex';
      });
       slide.style.display = 'block';
  }

window.addEventListener('resize', function() {
  // Show buttons when orientation changes
     if (window.matchMedia("(orientation: landscape)").matches) {
        slideButton.forEach((button) => {
        button.style.display = 'flex';
      });
  }
  if (window.matchMedia("(orientation: portrait)").matches) {
            menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    menu.style.position = 'absolute';
    menu.style.left = '70%';
    menu.style.top = 'auto';
      slideButton.forEach((button) => {
        button.style.display = 'none';
      });
    slide.style.display = 'none';
  }
});
});


boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'rotateZ(20deg)';
  })
  box.addEventListener('mouseout', () => {
    box.style.transform = 'rotateZ(0deg)';
  })
})

portfoliobtn.addEventListener('click',()=>{
first_main.style.display = 'none';
second_main.style.display = 'none';
fourth_main.style.display = 'none';
body.style.overflowY = 'none';
third_main.style.display = 'flex';
})

About.addEventListener('click', ()=>{
first_main.style.display = 'none'
third_main.style.display = 'none'
fourth_main.style.display = 'none'
second_main.style.display = 'flex'
body.style.overflowY = 'none'
})

Contact.addEventListener('click', ()=>{
  first_main.style.display = 'none'
  second_main.style.display = 'none'
  third_main.style.display = 'none'
  fourth_main.style.display = 'flex'
  body.style.overflowY = 'none';
})
Contact_me.addEventListener('click', ()=>{
  first_main.style.display = 'none'
  second_main.style.display = 'none'
  third_main.style.display = 'none'
  fourth_main.style.display = 'flex'
  body.style.overflowY = 'none';
})

btn_container.addEventListener('click', ()=>{
  second_main.style.display = 'none'
  // first_main.style.display = 'block'
  first_main.style.display = 'flex'
  body.style.overflowY = 'none';
})

btn_container2.addEventListener('click', ()=>{
  third_main.style.display = 'none';
  first_main.style.display = 'flex';
  body.style.overflowY = 'none';
})
btn_container2.addEventListener('mouseover', () => {
    follow.style.display = 'none';
})
btn_container2.addEventListener('mouseout', () => {
    follow.style.display = 'block';
})
Contact_goto.addEventListener('click', ()=>{
  first_main.style.display = 'flex';
  second_main.style.display = 'none';
  third_main.style.display = 'none';
  fourth_main.style.display = 'none';
  body.style.overflowY = 'none';
})

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    follow.style.display = 'none';
  })
  button.addEventListener('mouseout', () => {
    follow.style.display = 'block';
  })
})
social_media.forEach((button) => {
  button.addEventListener('mouseover', () => {
    follow.style.display = 'none';
  })
  button.addEventListener('mouseout', () => {
    follow.style.display = 'block';
  })
})
fourth_left_main.addEventListener('mouseover', () => {
  follow.style.backgroundColor = 'orangeRed';
})
fourth_left_main.addEventListener('mouseout', () => {
  follow.style.backgroundColor = 'chartreuse';
})

function light(){
  modeImage.src = './img/moon.png';

  first_left_main.classList.remove('dark-mode');
  first_left_main.classList.add('light-mode');
   
  first_left_main.style.backgroundColor = '#D5D5E0';
  first_left_main.style.color = 'black';
  second_right_main.style.backgroundColor = '#D5D5E0';
  second_right_main.style.color = 'black';
   third_right_main.style.backgroundColor = '#D5D5E0';
   btn_container2_div.style.color = 'black';
     btn_container2_div.style.color  = "black";
     btn_container2_div.addEventListener('mouseover', () => {
    btn_container2_div.style.color = "white"
  })
   btn_container2_div.addEventListener('mouseout', () => {
    btn_container2_div.style.color = "black"
  })

  fourth_left_main.style.backgroundColor = '#D5D5E0';
    inputs.forEach((input) => {
    // input.style.backgroundColor = '#01011F';
    input.style.color = 'black';
    input.style.borderColor = 'black';
  });

  textarea.style.borderColor = 'black';
    textarea.style.color = 'black';


  buttons.forEach((button) => {
   button.style.color  = "black"
   button.style.borderColor = "black"
   button.addEventListener('mouseover', () => {
    button.style.color = "white"
  })
   button.addEventListener('mouseout', () => {
    button.style.color = "black"
  })
  })
  social_media.forEach((button) => {
   button.style.color = 'black';
  })
 
  span.style.borderColor = 'black';
  type.style.borderColor = 'black';
  skillspercentage.forEach((skill) => {
    skill.style.borderColor = 'rgba(0, 0, 0, 0.34)';
  })
}

function dark(){
    
  modeImage.src = './img/sun-xxl.png';

  second_right_main.style.backgroundColor = '#01011F';
  second_right_main.style.color = 'white';
  first_left_main.classList.add('dark-mode');
  first_left_main.classList.remove('light-mode');
  first_left_main.style.backgroundColor = '#01011F';
  first_left_main.style.color = 'white';
  third_right_main.style.backgroundColor = '#01011F';
   btn_container2_div.style.color = 'white';
    btn_container2_div.style.borderColor = "white"
        btn_container2_div.addEventListener('mouseover', () => {
      btn_container2_div.style.color = "white"
    })
     btn_container2_div.addEventListener('mouseout', () => {
      btn_container2_div.style.color = "white"
    });

  fourth_left_main.style.backgroundColor = '#309898';
  inputs.forEach((input) => {
    // input.style.backgroundColor = '#01011F';
    input.style.color = 'white';
    input.style.borderColor = 'white';
  })

  textarea.style.borderColor = 'white';
  textarea.style.color = 'white';

   
  buttons.forEach((button) => {
    button.style.color  = "white"
    button.style.borderColor = "white"

    button.addEventListener('mouseover', () => {
      button.style.color = "white"
    })
     button.addEventListener('mouseout', () => {
      button.style.color = "white"
    })
   })
   social_media.forEach((button) => {
    button.style.color = 'gray';
   })

   span.style.borderColor = 'white';
   type.style.borderColor = 'white';
   skillspercentage.forEach((skill) => {
    skill.style.borderColor = 'rgba(255, 255, 255, 0.354)';
  })
}


mode.addEventListener('click', () => {
  if (first_left_main.classList.contains('dark-mode')) {
    
   light()
   
  } else {

    dark()
  }
});

body.addEventListener('mousemove', (e) => {
    const X = e.pageX ;
    const Y = e.pageY;
    // console.log(e)
    // console.log(e.pageX);
    // console.log(e.pageY);
    follow.style.left = `${X}px`;
    follow.style.top = `${Y}px`;
});

function sendEmail() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("msg").value;
        let errorMessage = document.getElementById("error");
        
        if (!name || !email || !message) {
            errorMessage.innerHTML = "Please fill in all fields !";
            errorMessage.classList.remove('green');
            errorMessage.classList.add('red');
            return;
        }
        
        let subject = encodeURIComponent("Contact Request from " + name);
        let body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nReason: " + message);
        let mailtoLink = `mailto:pranjulisaxena3@gmail.com?subject=${subject}&body=${body}`;
        console.log(mailtoLink);
        
        window.location.href = mailtoLink;
        setTimeout(()=>{
            errorMessage.innerHTML = "Opening your email client...";
                        errorMessage.classList.remove('red');
            errorMessage.classList.add('green');
        },2000)
       
}
document.addEventListener('DOMContentLoaded', function () {
    const send = document.querySelector('#send');
    send.addEventListener('click', sendEmail);
});
// send.addEventListener('click', () => {
//     sendEmail();
// })

inputs.forEach((input) => {
  input.addEventListener('mouseover', () => {
    follow.style.display = 'none';
  })
  input.addEventListener('mouseout', () => {
    follow.style.display = 'block';
  })
})

textarea.addEventListener('mouseover', () => {
  follow.style.display = 'none';
})
textarea.addEventListener('mouseout', () => {
  follow.style.display = 'block';
})

console.log(window.innerWidth);
console.log(window.innerHeight);