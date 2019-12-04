document.getElementById('start').addEventListener('click',()=>{
    start();
});
function start() {
    setInterval(printFunc, 10 * 1000);
}
function printFunc() {
    for (let i = 0; i < virusArray.length; i++) {
        virusArray[i].infectar();
        virusArray[i].atacar();
    }
    document.getElementById('displayOrganos').innerHTML = '';
    displayOrganos();
}
