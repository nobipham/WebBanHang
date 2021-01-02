function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }
  function moreText() {
    var x = document.getElementById("moreInfor");

    if(x.style.height === "100vh")
    {
      x.style.height = "auto";
    }
    else
    x.style.height ="100vh";
      

  }