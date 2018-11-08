function emailParts(email){
  return email.toLowerCase().split('@')
}

// console.log(emailParts('rahman.hasri@gmail.com'));

// forEach trial

var arr = ["ant", "bat", "cat", 42];
arr.forEach(arr => console.log(arr));
