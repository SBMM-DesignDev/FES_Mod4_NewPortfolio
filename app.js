//template_me2bwgu
//service_382mk8t
//So7N716RG64Uodeq


/*function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            "service_382mk8t",
            "template_tnwb22c",
            event.target,
            "So7N716RG64Uodeq"

        ).then(() => {
            console.log('this worked')
        })
    
}*/

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle){
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
  
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
  
    emailjs
      .sendForm(
        "service_382mk8t",
        "template_me2bwgu",
        event.target,
        "-So7N716RG64Uodeq"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

  
  function toggleModal() {
    
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true
    document.body.classList += " modal--open";
  }