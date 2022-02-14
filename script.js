function myColor() {
    var color = document.getElementById('color-panel').value;
    document.body.style.backgroundColor = color;
    document.getElementById('result').value = color;
}