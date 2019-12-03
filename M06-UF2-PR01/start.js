document.getElementById('start').addEventListener('click',()=>{
    console.log("startgame");
    for (let i = 0; i < virus.length; i++) {
        virus[i].infectar();
    }
    start();
});


function start() {
    console.log("start");
    setInterval(printFunc, 10 * 1000);
}

function printFunc() {
        virus[0].atacar();
}