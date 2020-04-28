let login = prompt('Enter your login'); 
login = login ? login.trim() : ''; 
 
const MIN_PASS_LENGTH = 4; 
const MIN_NEW_PASS_LENGTH = 4; 
const passwords = { 
  'User': 'UserPass', 
  'Admin': 'RootPass' 
}; 
 
if (!login.length) { 
  alert('Canceled.'); 
} else if (login.length < MIN_PASS_LENGTH) { 
  alert("I don't know any users having name length less than 4 symbols"); 
} else if (login !== 'User' && login !== 'Admin') { 
  alert('I don’t know you'); 
} else { 
  let userPassword = prompt('Enter your password', ''); 
  userPassword = userPassword ? userPassword.trim() : ''; 
 
  if (!userPassword.length) { 
    alert('Canceled.'); 
  } else if (userPassword !== passwords[login]) { 
    alert('Wrong password'); 
  } else { 
    if (new Date().getHours() < 20) {
      alert("Good day, dear " + login + "!");
    } else {
      alert("Good evening, dear " + login + "!");
    }  
  } 
}