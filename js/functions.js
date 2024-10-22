'Use Strict'
let totalRowsGenerated = 0;

document.getElementById('TeeNumerot').addEventListener('click', generateRows)

function generateRows() {
    const table = document.getElementById('Numerot')
    const rowCountDisplay = document.getElementById('rivimaara');
    
    table.innerHTML = ''

    
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr')

        
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('td')
            const randomNum = Math.floor(Math.random() * 10)
            cell.textContent = randomNum

            
            cell.style.border = "1px solid #000"
            cell.style.padding = "10px"
            cell.style.textAlign = "center"

            row.appendChild(cell)
        }

        table.appendChild(row)
    }

    totalRowsGenerated += 3
    rowCountDisplay.textContent = totalRowsGenerated
}
