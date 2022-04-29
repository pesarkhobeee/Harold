var long_term_saving_location = ""
var note = ""

function initialer() {
    chrome.storage.sync.get(['long_term_saving_location'], function(result) {
        long_term_saving_location = result.long_term_saving_location;
        if(long_term_saving_location){
            document.getElementById("long_term_saving_location").value = long_term_saving_location;
            document.getElementById("popup_note_button").style.visibility = "visible";
        }
    });
    
    chrome.storage.sync.get(['popup_note_textarea'], function(result) {
        if(result.popup_note_textarea) {
            document.getElementById("popup_note_textarea").value = result.popup_note_textarea;
        }
    });
    
    chrome.action.setBadgeText({text: ''}); 
}

initialer();
