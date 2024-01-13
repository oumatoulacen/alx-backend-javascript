// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
  
// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "City A",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "City B",
};
  
// Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Vanilla JavaScript code for rendering a table
document.addEventListener("DOMContentLoaded", () => {
  // Get the table element from the HTML
  const table = document.getElementById("studentsTableBody");

  // Iterate through the studentsList array
  studentsList.forEach((student) => {
    // Create a new row for each student
    const row = document.createElement("tr");

    // Create cells for firstName and location
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement("td");
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
