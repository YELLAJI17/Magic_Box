/**
 *  MagicBox : 
 *  idhi magic box ni thayaru chese function
 * @param {*} matrix 
 */
function MagicBox() {
   let matrix = [[,,],[,,],[,,]]
   let n = matrix.length
   let numList = Array.from({ length: n * n }, (_, i) => i + 1)
   numList.sort(() => Math.random() - 0.5)
   let num = 0;
   for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
        matrix[i][j] = numList[num]
           num++
       }
   }
   return matrix
}

/**
 *  Matrix OutPut : 
 *  Ee function manaki oka matrix ni chudataniki correct ga print chesi isthaadhi
 * @param {} matrix 
 */
function MatrixOP(square) {
   console.log("-------------")
   for (let i = 0; i < square.length; i++) {
       let row = square[i]
       let rowString = ""
       for (let j = 0; j < row.length; j++) {
           rowString += ("| " + row[j] + " ")
       }
       console.log(rowString + "|")
       if (i === square.length - 1) {
           console.log("-------------")
       } else {
           console.log("----+---+---")
       }
   }
}
/**
 *  Checking Function : 
 *  Idhi magic box ni check chesthaadhi
 * @param {*} matrix 
 */
function Check(grid) {
    //Sum of all rows, columns, and diagonals
    let Total = 15;     
    //Row Check
    for (let i = 0; i < 3; i++) {
      let rowSum = 0;
      for (let j = 0; j < 3; j++) {
        rowSum += grid[i][j];
      }
      if (rowSum !== Total) {
        return false;
      }
    }
    // Column Check
    for (let j = 0; j < 3; j++) {
      let columnSum = 0;
      for (let i = 0; i < 3; i++) {
        columnSum += grid[i][j];
      }
      if (columnSum !== Total) {
        return false;
      }
    } 
    //Diagnol check
    let D1 = grid[0][0] + grid[1][1] + grid[2][2];
    let D2 = grid[0][2] + grid[1][1] + grid[2][0];
    if (D1 !== Total || D2 !== Total) 
    {
      return false;
    }
    else
    {
    return true;
    }
}
/**
 * OutPut Matrix:
 * Last lo manam sadhinchina Magic Box
 */
function OPMatrix() {
    while (true) {
        let matrix = MagicBox()
         
        if (Check(matrix)) {
            MatrixOP(matrix)
            break;
        }
    }
}
OPMatrix()


