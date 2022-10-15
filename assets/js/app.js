const tableBody = document.getElementById('table-body');

// Flights information
let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
   },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
   },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED"
  }
]

// More details to make the table update itself
const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

// Populate the widget with the information
function populateTable() {
    // For loop to go through each flight and create a table row
    for (const flight of flights) {
        const tableRow = document.createElement('tr');

        for (const flightInfo in flight) {
            // Create each table row for flight info
            const tableCell = document.createElement('td');
            // Get each letter of the flight info value
            const word = Array.from(flight[flightInfo]);
            
            // Put the letters in a div in the table cells
            for (const [index, letter] of word.entries()) {
              const letterElement = document.createElement('div');

              // Make each letter flip one after the other
              setTimeout(() => {
                letterElement.classList.add('flip');
                letterElement.textContent = letter;
                tableCell.append(letterElement);
              }, 100 * index);
      
            }
            tableRow.append(tableCell);     // Put flight info in table row
        }

        // Add row to table
        tableBody.append(tableRow);
    }
}

populateTable()