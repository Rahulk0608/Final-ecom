
document.querySelector(".close-icon").addEventListener("click", function(){
    
    document.querySelector(".sidenav").style.marginLeft ="-300px";
    document.querySelector(".close-icon").style.opacity ="0";
    document.querySelector(".sidenav").style.boxShadow ="none";
    console.log("closed");

});

document.querySelector("#all-icon").addEventListener("click", function(){

    document.querySelector(".sidenav").style.marginLeft="0";
    document.querySelector(".close-icon").style.opacity ="1";
    document.querySelector(".sidenav").style.boxShadow ="5px 5px 40px #212529";
    console.log("opened");
    
});







    
