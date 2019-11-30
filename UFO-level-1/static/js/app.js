// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");
  
  data.forEach((d_row) => {
  var row = tbody.append("tr");
  Object.values(d_row).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}

function handleClick() {
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

    if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
