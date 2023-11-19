// var user1 = 'abc@gmail.com ';
// var user2 = "abc1@gmail.com";

// var getEmail = prompt('Enter email ');

// if (getEmail === user1) {
//     alert('userLogin success with this email address ' + user1);

// } else if (getEmail === user2) {
//     alert('userLogin success with this email address ' + user1);
// } else {
//     alert('user not found');

// }
// var users = ["abc@gmail.com", "abc1@gmail.com", ["abc3@gmail.com"]]
// var allclasses = [['std11 ', 'std22'], ['std1 ', 'std2']]
// console.log(users.length)
// console.log(allclasses[2])

// console.log(typeof users[1])

// if (typeof users[2] === 'string') {
//     console.log(users[2])
// } else {
//     console.log('it in not string value ')
//     console.log(typeof users[2])
// }

// console.log(users[1])
// document.write(users[1])

// let userEmail = prompt('Enter your email');


function loginBtn() {

    var isFound = false;
    var signupId = document.getElementById("signupId").value;
    var loginId = document.getElementById("loginId").value;
    // console.log(signupId);
    // console.log(loginId);
    
    var users = ["abc@gmail.com", "abc1@gmail.com", "abc3@gmail.com"];
    users.push(signupId)
    for (var i = 0; i < users.length; i++) {
        // document.write(users[i] + '</br>')
        if(loginId ===  users[i]){
            isFound = true;
            alert('login success');
        }
    }
    if(isFound == false){
        alert("login failed")
    }
    // console.log(users[2])
    // console.log(users.length)



}