<<<<<<< HEAD
var request = new XMLHttpRequest();
var table = document.getElementById("students");

request.open('GET', 'students.json', true);
request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var students = JSON.parse(request.responseText);

            students.forEach(function (student) {
              let tr = document.createElement('tr');
              tr.innerHTML = `<td>${student.firstname}</td>
                              <td>${student.lastname}</td>
                              <td>${student['postal-code']}</td>`;
              table.appendChild(tr);
              console.log(student.firstname);

            });

        } else {
            dump("Erreur pendant le chargement de la page.\n");
        }
    }
};
request.send();
=======
// IIFE (Immediately-Invoked Function Expression)
(function () {
    'use strict'

    // Get table from DOM elements
    var table = document.getElementById('students');

    // Create HttpRequest
    let getStudent = new XMLHttpRequest();
    getStudent.open("GET", 'students.json', true);

    // When Request state change
    getStudent.onreadystatechange = function () {

      // 0:UNSENT 1:OPENED 2:HEADERS_RECEIVED 3:LOADING 4:DONE
      // this correspond to getStudent
      if (this.readyState == 4) {
        // HTTP Status code 200:OK
        if (this.status == 200) {
            // this.responseText: response content
            let students = JSON.parse(this.responseText); // JSON.parse() transform json string in javascript object

            //For each students create row in table
            students.forEach(function (student) {
              let tr = document.createElement('tr');
              tr.innerHTML = `<td>${student.firstname.toUpperCase()}</td>
                              <td>${student.lastname.toUpperCase()}</td>`;
              table.appendChild(tr);
            });

        } else {
          alert("Erreur pendant le chargement de la page");
        }
      }
    };

    // Send request
    getStudent.send();
}) ();
>>>>>>> c80cec7c2f6028ff16a226ca09768a3015db7ea4
