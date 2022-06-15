// Add your code here
/*const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
    body: JSON.stringify(formData),  
};
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
     });
*/

const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
    body: JSON.stringify(formData),  
};

function submitData (formData) {
    let fetchedData = fetch('http://localhost:3000/users',configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    });
    console.log(fetchedData)
} 
submitData(formData)    
