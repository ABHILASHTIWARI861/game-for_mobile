
var color_clicked=[];
var bloom_color=[];
var a=["red", "green", "blue","yellow"];
var level=0;
var flag=0;
$(".size").click(function(){
    if (flag==1){
    var num=$(this).attr("id");
    click_boom(num);
    color_clicked.push(num);
    final_function(color_clicked.length-1);
};
});

$("h1").click(function(){
if(flag==0){
    next_boom_without_click();
    flag=1;
}
})

$(document).keypress(function(){
    if(flag==0){
        next_boom_without_click();
        flag=1;
    }
    })
    
function next_boom_without_click(){
    color_clicked=[]
var random_number=Math.floor(Math.random()*4);
var random_color=a[random_number];
let soundi=new Audio("sounds/"+random_color+ ".mp3");
soundi.play();
$("#"+random_color).fadeIn(100).fadeOut(100).fadeIn(100);
level=level+1;
$("h1").text("LEVEL"+level);
bloom_color.push(random_color);
}

function click_boom(c){
    let a=new Audio("sounds/"+c+ ".mp3");
    a.play();
    $("#"+c).addClass("bright");
    $("#"+c).css("background-color", "grey");
    setTimeout(function(){
        $("#"+c).removeClass("bright");
        $("#"+c).css("background-color", c);
    }, 100);
}
function final_function(color_index){
    if(color_clicked[color_index]===bloom_color[color_index]){
  if(color_clicked.length===bloom_color.length){
        setTimeout(function(){
            next_boom_without_click();
        },1000);
    }
}
    else{
    flag=0;
    level=0;
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game over,click me");
    }
}
