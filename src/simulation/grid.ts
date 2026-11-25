export type Cell = 'empty' | 'zombie' | 'human' | 'dead';
export type Grid = Cell[][];

export function createGrid(rows: number, cols: number, density: number): Grid {
    const grid: Grid = [];
    for (let r = 0; r < rows; r++) {
        const row: Cell[] = [];
        for (let c = 0; c < cols; c++) {
            if (Math.random() < density) {
                row.push('human');
            } else {
                row.push('empty');
            }
        }
        grid.push(row);
    }
    return grid;
}

export function infect(grid: Grid, row: number, col: number): Grid {
  // used by click AND by random start (for automated plays)
  // checks if clicked, if clicked it throws an error to notify the user
  // checks if cell is empty. if cell is empty try another cell
  // set a zombie at row/col
  // return a NEW grid (infectedGrid), do not change the old one
  return grid.map((r, rIndex) => r.map((cell, cIndex) => {
    if (rIndex === row && cIndex === col) {
      if (cell === 'human') {
        throw new Error('Cannot infect a human cell directly.');
      }
      return 'zombie';
    }
    return cell;
  }
}

export function nextBoardState(grid: Grid): Grid {
  // one round
  // every cell only READS from the old grid
  // human -> zombie neighbour? -> becomes zombie
  // zombie -> no human neighbour? -> dead (E-06)
  // write results into a NEW grid
  // return the new grid
}