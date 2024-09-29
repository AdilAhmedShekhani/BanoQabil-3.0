// Object Created

var obj = {
    "name": "Adil",
    "email": "adil@gmail.com"
}

console.log(obj.name)

// object convert in String

var obj = {
    name: "Adil",
    rollno: 123
}

console.log(JSON.stringify(obj))

// string convert in object

console.log(JSON.parse(obj))

// Save Data on Local Storage

localStorage.setItem("name", "Adil")

// get data from local storage

localStorage.getItem("name")

// Practice Login and Signup Page