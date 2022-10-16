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
const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT", "MALAGA", "DUBLIN", "ROME"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

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
            // Put flight info in table row
            tableRow.append(tableCell);
        }
        // Add row to table
        tableBody.append(tableRow);
    }
}

populateTable();

// Get random letters
function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Get random numbers
function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
};

function generateTime() {
  let displayHour = hour
  if (hour < 24) {
    hour++
  }
  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = "0" + hour
  }
  return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
};

function shuffleUp() {
  // Get rid of first flight in array
  flights.shift();
  // Insert new flight in array to show on the table
  // Create random flight details
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = "";
  populateTable();
};

setInterval(shuffleUp, 5000);