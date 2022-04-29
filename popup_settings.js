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
    var long_term_saving_location = document.getElementById("long_term_saving_location").value
    chrome.storage.sync.set({"long_term_saving_location": long_term_saving_location}, function() {
        console.log('long_term_saving_location is set to ' + long_term_saving_location);
    });

    setting();
    initialer();
}

const popup_settings_button = document.getElementById('settings_button');
popup_settings_button.addEventListener('click', saveSetting);
