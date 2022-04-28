var github_username = ""
var github_repository = ""
var note = ""

chrome.storage.sync.get(['github_repository'], function(result) {
    github_repository = result.github_repository;
    document.getElementById("github_repository").value = github_repository;
});

chrome.storage.sync.get(['github_username'], function(result) {
    github_username = result.github_username;
    document.getElementById("github_username").value = github_username;
});

chrome.storage.sync.get(['popup_note_textarea'], function(result) {
    document.getElementById("popup_note_textarea").value = result.popup_note_textarea;
});