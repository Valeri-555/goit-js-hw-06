
const form = document.querySelector('.login-form');
console.dir(form);


form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { username, password }
  } = event.currentTarget;
    console.log(username.value, password.value);
    
     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
     }
    const userDetails = { email: email.value, Password: password.value }

  console.log(userDetails);
  event.currentTarget.reset();
};

