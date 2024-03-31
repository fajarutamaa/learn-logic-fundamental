const sheetsTheater = (nCols, nRows, cols, rows) =>{
    const totalRows = nRows - rows
    const totalCols = nCols - cols + 1
    return totalCols * totalRows
}

console.log(sheetsTheater(16, 11, 5, 3))