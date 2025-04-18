function myButton() {
    var username = document.getElementById('username').value;
    var birthday = document.getElementById('birthday').value;
    var age = document.getElementById('age').value;
    var bloodgroup = document.getElementById('bloodgroup').value;
    var qualification = document.getElementById('qualification').value;
  
    if (username === "") {
      alert('Enter your Name');
      return;
    } else if (birthday === "") {
      alert('Enter your Birthday');
      return;
    } else if (age === "") {
      alert('Enter your Age');
      return;
    } else if (bloodgroup === "") {
      alert('Enter your Blood Group');
      return;
    } else if (qualification === "") {
      alert('Enter your Qualification');
      return;
    }
  
    var data = {
      username: username,
      dob: birthday,
      age: age,
      bloodgroup: bloodgroup,
      qualification: qualification
    };
  
    var students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(data);
    localStorage.setItem("students", JSON.stringify(students));
  
    alert("Signup successfully!");
  
    document.getElementById('username').value = "";
    document.getElementById('birthday').value = "";
    document.getElementById('age').value = "";
    document.getElementById('bloodgroup').value = "";
    document.getElementById('qualification').value = "";
  }
  function showButton() {
    window.location.href = "details.html"; 
  }
    