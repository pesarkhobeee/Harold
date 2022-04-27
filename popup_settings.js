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

const popup_settings = document.querySelector('#popup_settings_icon');
popup_settings.addEventListener('click', setting);