
document.addEventListener('DOMContentLoaded',()=>
{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>
    {
        square.addEventListener('click', handleClik);
    })

})

function handleClik(event)
{
    let square = event.target;
    let position = square.id;
    if (handleMove(position))
    {
        var resultado = "";
        if (playerTime == 0)
        {
            resultado = "🔥";
        }
        else
        {
            resultado = "💧";
        }

        setTimeout(() =>
        {
            alert (" o jogo acabou - o vencedor foi o  " + resultado);
        }, 20);
    };
    updateSquares();
}

function updateSquares()
{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>
    {
        let position = square.id;
        let simbolo = taboleiro[position];

        if(simbolo != '')
        {
            square.innerHTML = `<div class='${simbolo}'></div>`
        }
    })
}

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});




