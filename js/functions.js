'use strict'

let totalRowsGenerated = 0

document.getElementById('TeeNumerot').addEventListener('click', generateRows)

function generateRows() {
    const table = document.getElementById('Numerot')
    const rowCountDisplay = document.getElementById('rivimaara')

   
    const row = document.createElement('tr')

    for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td')
        const randomNum = Math.floor(Math.random() * 10)
        cell.textContent = randomNum

        cell.style.border = "1px solid #000"
        cell.style.padding = "10px"
        cell.style.textAlign = "center"
        cell.style.backgroundColor = "beige"
        cell.style.borderRadius = "10px"
        table.cellSpacing = "20px"

        row.appendChild(cell)
    }

    table.appendChild(row)

    totalRowsGenerated += 1
    rowCountDisplay.textContent = totalRowsGenerated
}

