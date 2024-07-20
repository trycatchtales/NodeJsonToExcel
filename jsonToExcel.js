const XLSX = require('xlsx');

// Sample JSON data
const jsonData = [
  { "Name": "John", "Age": 30, "City": "New York" },
  { "Name": "Anna", "Age": 22, "City": "London" },
  { "Name": "Mike", "Age": 32, "City": "Chicago" }
];

// Function to convert JSON to Excel
function jsonToExcel(data, outputFilename = 'output2.xlsx') {
  // Convert JSON data to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the workbook to a file
  XLSX.writeFile(workbook, outputFilename);
  console.log("Excel Generated : Output2.xlsx");
}

// Convert the sample JSON data to Excel
jsonToExcel(jsonData);
