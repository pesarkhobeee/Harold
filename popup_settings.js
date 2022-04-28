var popeup_main = true;

function setting(){
    if(popeup_main){
        document.getElementById("popeup_note_window").style.display = "none";
        document.getElementById("popeup_setting_window").style.display = "block";
        popeup_main = false;
    } else {
        document.getElementById("popeup_note_window").style.display = "block";
        document.getElementById("popeup_setting_window").style.display = "none";
        popeup_main = true;        
    }
}

const popup_settings = document.getElementById('popup_settings_icon');
popup_settings.addEventListener('click', setting);

function saveSetting() {
    var github_username = document.getElementById("github_username").value
    chrome.storage.sync.set({"github_username": github_username}, function() {
        console.log('github_username is set to ' + github_username);
    });
    
    var github_repository = document.getElementById("github_repository").value
    chrome.storage.sync.set({"github_repository": github_repository}, function() {
        console.log('github_repository is set to ' + github_repository);
    });
}

const popup_settings_button = document.getElementById('settings_button');
popup_settings_button.addEventListener('click', saveSetting);
