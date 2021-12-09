
let taboleiro = ['','','','','','','','',''];
let playerTime = 0;
let simbolo = ['o','x'];
let GameOver = false;

let winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position)
{
    if(GameOver)
    {
        return;
    }

    if(taboleiro[position] == '')
    {
        taboleiro[position] = simbolo[playerTime];

        GameOver = isWin();

        if(GameOver == false)
        {
            if(playerTime == 0)
            {
                playerTime = 1;
            }
            else 
            {
                playerTime = 0;
            }
        }

    }

    return GameOver;

}

function isWin()
{

    for (let i = 0; i < winState.length; i++)
    {
        let seq = winState[i];

        let position1 = seq[0];
        let position2 = seq[1];
        let position3 = seq[2];

        if(taboleiro[position1] == taboleiro[position2] && taboleiro[position1] == taboleiro[position3]
            && taboleiro[position1] != '')
        {
            return true;
        }
    }

    return false;
}
