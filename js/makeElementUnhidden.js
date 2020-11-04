function makeElementUnhidden(HTMLElementID) {
    try{
        document.getElementById(HTMLElementID).style.visibility = 'visible';
    }catch(error){
        console.info("There's an error: " + error);
    }
}