//home tab
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

//Plots tab
function openPlot(evtTwo, plotName) {
  var i, tabcontentTwo, tablinksTwo;
  tabcontentTwo = document.getElementsByClassName("tabcontentTwo");
  for (i = 0; i < tabcontentTwo.length; i++) {
    tabcontentTwo[i].style.display = "none";
  }
  tablinksTwo = document.getElementsByClassName("tablinksTwo");
  for (i = 0; i < tablinksTwo.length; i++) {
    tablinksTwo[i].className = tablinksTwo[i].className.replace(" active", "");
  }
  document.getElementById(plotName).style.display = "block";
  evtTwo.currentTarget.className += " active";
}
document.getElementById("defaultOpenTwo").click();

//Commercial tab
function openCommercial(evtThree, CommercialName) {
  var j, tabcontentThree, tablinksThree;
  tabcontentThree = document.querySelectorAll(".tabcontentThree");
  for (j = 0; j < tabcontentThree.length; j++) {
    tabcontentThree[j].style.display = "none";
  }
  tablinksThree = document.querySelectorAll(".tablinksThree");
  for (j = 0; j < tablinksThree.length; j++) {
    tablinksThree[j].className = tablinksThree[j].className.replace(" active", "");
  }
  document.getElementById(CommercialName).style.display = "block";
  evtThree.currentTarget.className += " active";
}
document.getElementById("defaultOpenThree").click();

