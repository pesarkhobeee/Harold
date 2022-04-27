function github(){
    var url = "https://github.com/pesarkhobeee/TIL/edit/main/README.md"
    window.open(url, '_blank').focus();
}

const popup_note = document.querySelector('#popup_note_button');
popup_note.addEventListener('click', github);