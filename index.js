// defining some JavaScript consts
function webSection(evnt, section){
    let i, tabcontent, tablinks;
    // get all the tabcontent element and set their display = none
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }
    document.getElementById(section).style.display = "block";
    evnt.currentTarget.className += " active";

}

 // default open 
 document.getElementById("defaultOpen").click();


 
