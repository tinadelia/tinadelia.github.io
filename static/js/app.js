// from data.js
var tableData = data;

//reference the table body  
var tbody = d3.select("tbody")


//append data to the table
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.html(value);
        });
    });
};

//display the table data
console.log(tableData);
tableDisplay(tableData);

//refresh function
function Refresh() {
    d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
    };

//select the filter button, stop refresh on the page
var button = d3.select("#filter-btn");
    button.on("click", function(event) {
    d3.event.preventDefault();
    Refresh();

//input value
var dateInput = d3.select("#datetime").property("value");
    if (dateInput.trim() === "" ) {
    var filteredTableData = tableData;
    } else {
    var filteredTableData = tableData.filter(ufoSighting => 
    ufoSighting.datetime === dateInput.trim());
};

  if (filteredTableData.length == 0) {
    d3.select("tbody")
    .append("tr")
    .append("td")
    .attr("colspan", 7)
    .html("<h4>No Records</h4>");
    };

    console.log(filteredTableData);
    tableDisplay(filteredTableData);
    });




