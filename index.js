/*

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//changing background color
//NavBar
*/
$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$(function(){
    $("#nav-placeholder").load("navigation.html");
  });

function gitBasicsDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitBasicsInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}

function gitCommitDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitCommitInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}

function gitBranchDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitBranchInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}
function gitPullDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitPullInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}
function gitPushDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitPushInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}
function gitRestoreDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitRestoreInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}
function gitGithubDisplayToggle() {

    var gitBasicsHeader = document.getElementById("gitGithubInfo");
    
    if (gitBasicsHeader.style.display === "none") {
    gitBasicsHeader.style.display = "block";
    } else {  
    gitBasicsHeader.style.display = "none";
    }  
}