let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function() {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim(); // isse paragraph k aage or piche ka space khatam ho jata hai
    let words = text.split(" "); // iss ye characters ko space k jariye split kr dega
    let cleanlist = words.filter(function(elm) { // isse paragraph me words k bich ka space khatm ho jaega kyoki isse ye para k bich k space ko bhi words maan leta hai
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanlist.length;
});