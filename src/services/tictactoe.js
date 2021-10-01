const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const getTrophy = () => {
    return (
        <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
        </div>
    );
}

export const getWinningLine = (squares) => {
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] & squares[a] === squares[c]) {
            return winningLines[i];
        }
    }
    return null
}

export const getWinner = (squares) => {
    const line = getWinningLine(squares);
    if (line) { return squares[line[0]]; }
    return null;
}

export const getEmptyBoard1D = () => {
    return [{
        squares: Array(9).fill(null)
    }];
}

export const getEmptyBoard2D = () => { // todo
    return [{
        squares: Array(3).fill(null).map(() => new Array(3).fill(null))
    }];
}