document.getElementById('start').addEventListener('click',()=>{
    start();
});
function start() {
    setInterval(printFunc, 10 * 1000);
}
function printFunc() {
    document.getElementById('displayOrganos').innerHTML = '';
    displayOrganos();
}