function changeCSS() {
var css = document.getElementById('css').getAttribute("href");
alert (css);
if (css=='css/temanight.css'){
    css = 'css/temalight.css'
}
else {
    css = 'css/temanight.css'
}
}