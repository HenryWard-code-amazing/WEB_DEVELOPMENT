function makeElementHidden(HTMLelementID) {
    try {
        document.getElementById(HTMLelementID).style.visibility = 'hidden';
    } catch (error) {
        console.info("There's an error: " + error)
    }
}