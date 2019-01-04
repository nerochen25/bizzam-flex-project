module.exports = function hasWon(data) {
    
    // 3 x 3 board
    let won = false
    // first row
    if (data[0].checked && data[1].checked && data[2].checked) {
        won = true
    }
    // second row
    if (data[3].checked && data[4].checked && data[5].checked) {
        won = true
    }
    // third row
    if (data[6].checked && data[7].checked && data[8].checked) {
        won = true
    }

    // first column
    if (data[0].checked && data[3].checked && data[6].checked) {
       won = true
    }
    // second column
    if (data[1].checked && data[4].checked && data[7].checked) {
        won = true
    }
    // third column
    if (data[2].checked && data[5].checked && data[8].checked) {
        won = true
    }

    // diagonal top left
    if (data[0].checked && data[4].checked && data[8].checked) {
        won = true
    }
    // diagonal top right
    if (data[2].checked && data[4].checked && data[6].checked) {
        won = true
    }
    //  // 5 x 5 board
    //  const won = false
    //  // horizontal row checks
    //  if (data[0].checked && data[1].checked && data[2].checked && data[3].checked && data[4].checked) {
    //      won = true
    //  }
    //  if (data[5].checked && data[6].checked && data[7].checked && data[8].checked && data[9].checked) {
    //      won = true
    //  }
    //  if (data[10].checked && data[11].checked && data[12].checked && data[13].checked && data[14].checked) {
    //      won = true
    //  }
    //  if (data[15].checked && data[16].checked && data[17].checked && data[18].checked && data[19].checked) {
    //      won = true
    //  }
    //  if (data[20].checked && data[21].checked && data[22].checked && data[23].checked && data[24].checked) {
    //      won = true
    //  }

    //  // vertical column checks
    //  if (data[0].checked && data[5].checked && data[10].checked && data[15].checked && data[20].checked) {
    //      won = true
    //  }
    //  if (data[1].checked && data[6].checked && data[11].checked && data[16].checked && data[21].checked) {
    //      won = true
    //  }
    //  if (data[2].checked && data[7].checked && data[12].checked && data[17].checked && data[22].checked) {
    //      won = true
    //  }
    //  if (data[3].checked && data[8].checked && data[13].checked && data[18].checked && data[23].checked) {
    //      won = true
    //  }
    //  if (data[4].checked && data[9].checked && data[14].checked && data[19].checked && data[24].checked) {
    //      won = true
    //  }

    //  // diagonal checks
    //  if (data[0.checked && data[6].checked && data[12].checked && data[18].checked && data[24].checked) {
    //      won = true
    //  }
    //  if (data[4].checked && data[8].checked && data[12].checked && data[16].checked && data[20].checked) {
    //      won = true
    //  }
    
    return won;
};