function adduser(){
    var player1name=document.getElementById("player1_name_input").value;
    var player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1",player1name);
    localStorage.setItem("player2",player2name);
    window.location="gamepage.html";
    
}