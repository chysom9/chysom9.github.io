// Function to execute once the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize arrays for persons and salaries
    const persons = [];
    const salaries = [];

    // Get DOM elements
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");
    const addButton = document.getElementById("addButton");
    const resultsTable = document.getElementById("results_table");
    const averageSalary = document.getElementById("averageSalary");
    const highestSalary = document.getElementById("highestSalary");

    // Function to add a person and salary to the arrays
    function addSalary() {
        const name = nameInput.value.trim();
        const salary = parseFloat(salaryInput.value);

        // Validation
        if (name === "" || isNaN(salary)) {
            alert("Please enter a valid name and numeric salary.");
            return;
        }

        // Add values to respective arrays
        persons.push(name);
        salaries.push(salary);

        // Clear input fields
        nameInput.value = "";
        salaryInput.value = "";

        // Update displayed salaries and results
        displaySalaries();
        calculateAndDisplayResults();
        nameInput.focus();
    }

    // Function to display salaries in the table
    function displaySalaries() {
        // Clear the table
        resultsTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        `;

        // Populate the table with persons and their salaries
        for (let i = 0; i < persons.length; i++) {
            resultsTable.innerHTML += `
                <tr>
                    <td>${persons[i]}</td>
                    <td>${salaries[i]}</td>
                </tr>
            `;
        }
    }

    // Function to calculate and display average and highest salary
    function calculateAndDisplayResults() {
        // If there are no salaries, display zeros
        if (salaries.length === 0) {
            averageSalary.textContent = "0";
            highestSalary.textContent = "0";
            return;
        }

        // Calculate average and highest salary
        const average = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
        const highest = Math.max(...salaries);

        // Display the calculated values
        averageSalary.textContent = average.toFixed(2);
        highestSalary.textContent = highest.toFixed(2);
    }

    // Attach click event handlers
    addButton.addEventListener("click", addSalary);

    // Initial focus on the name input field
    nameInput.focus();

    // Display results initially
    calculateAndDisplayResults();
});
