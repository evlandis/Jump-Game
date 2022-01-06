var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");

/* creates the ability to call this function and jump*/
function jump(){
    /*makes it so the player cannot jump until the animatin is done*/
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    /*makes it so the jump animation can be called more than once*/
    setTimeout(function(){
        player.classList.remove("animate");
    },400);
    
}
/*checks if the player touches the obstacle*/
var checkContact = setInterval(function(){
    /*checks the position of the top position of the player*/
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    /*checks the position of the left position of the obstacle*/
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<20 && obstacleLeft>0 && playerTop>=130){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("You Lose!");
    }
},10);