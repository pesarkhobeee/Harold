function goToGithub(){
    var url = "https://github.com/" + github_username + "/" + github_repository + "/edit/main/README.md"
    window.open(url, '_blank').focus();
}
const popup_note = document.querySelector('#popup_note_button');
popup_note.addEventListener('click', goToGithub);

function saveNote() {
    var popup_note_textarea = document.getElementById("popup_note_textarea").value
    chrome.storage.sync.set({"popup_note_textarea": popup_note_textarea}, function() {
        console.log('popup_note_textarea is set to ' + popup_note_textarea);
    });
}
const popup_note_textarea = document.querySelector('#popup_note_textarea');
popup_note_textarea.addEventListener('change', saveNote);
