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

// Multiple data save in local storage

function addName() {
    var name = document.getElementById("name")
    var storageData = localStorage.getItem("students")
    storageData = JSON.parse(storageData)
    console.log(storageData)
    var student = {
        name: name.value
    }

    storageData.push(student)

    localStorage.setItem("students", JSON.stringify(storageData))

}



// Practice Login and Signup Page