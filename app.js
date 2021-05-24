// import the data from data.js
const tableData = data;
// reference the html table using d3
var tbody = d3.select("tbody");
// create new function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    //Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
     );

    });

}
// create handleClick() {} function
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check if date was entered and filter with entered date
    if (date) {
        //Apply filter to the table data to only keep rows
        //where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild table using filtered data
    //@NOTE: if no data entered, filteredData will be original tableData
    buildTable(filteredData);
}
//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
//Build the table when the page loads
buildTable(tableData);
//psuedocode practice
// if (a date is entered) {
    // Filter the default data to show only the date eentered
//}; 

