// q#5
// document.write("<h1>Table of 5   </h1>")

// document.write("<h1>5*1=5  </h1>")

// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>   </h1>")
// document.write("<h1>  </h1>")
// document.write("<h1>   </h1>")


// JavaScript code to generate the multiplication table for 5
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('multiplication-table');
    const number = 5;
    
    // Create the table header
     let tableHtml = '<tr><th></th><th></th></tr>';
    
    // Generate rows for the table
    for (let i = 1; i <= 10; i++) {
        tableHtml += `<h1><tr><td>${number} × ${i}</td><td> =    ${number * i}</td></tr></h1>`;
    }
    
    // Set the innerHTML of the table to the generated HTML
    table.innerHTML = tableHtml;
    // tableHtml += `<tr><td>${number} \u00D7 ${i}</td><td>${number * i}</td>=</tr>`;

});










