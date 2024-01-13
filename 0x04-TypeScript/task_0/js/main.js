// Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "City A"
};
var student2 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "City B"
};
// Create an array named studentsList
var studentsList = [student1, student2];
// Vanilla JavaScript code for rendering a table
document.addEventListener("DOMContentLoaded", function () {
    // Get the table element from the HTML
    var table = document.getElementById("studentsTableBody");
    // Iterate through the studentsList array
    studentsList.forEach(function (student) {
        // Create a new row for each student
        var row = document.createElement("tr");
        // Create cells for firstName and location
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        // Append cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        // Append the row to the table
        if (table) {
            table.appendChild(row);
        }
    });
});
