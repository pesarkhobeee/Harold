function goToGithub(){
    window.open(long_term_saving_location, '_blank').focus();
    chrome.action.setBadgeBackgroundColor({color: "green"});
    chrome.action.setBadgeText({text: ':)'});
}
const popup_note = document.getElementById('popup_note_button');
popup_note.addEventListener('click', goToGithub);

function saveNote() {
    console.log("popup_note_textarea");
    var popup_note_textarea = document.getElementById("popup_note_textarea").value
    chrome.storage.sync.set({"popup_note_textarea": popup_note_textarea}, function() {
        console.log('popup_note_textarea is set to ' + popup_note_textarea);
    });

    let today = new Date().toISOString().slice(0, 10);
    //today = "2022-04-28";
    chrome.storage.sync.set({"popup_note_last_saved_date": today}, function() {
        console.log('popup_note_last_saved_date is set to ' + today);
    });
}
const popup_note_textarea = document.getElementById('popup_note_textarea');
popup_note_textarea.addEventListener('change', saveNote);
