console.log("Service worker started!");
// https://developer.chrome.com/docs/extensions/reference/alarms/#type-AlarmCreateInfo
// https://stackoverflow.com/questions/26883915/google-chrome-extension-alarm-at-specific-time
chrome.alarms.create('haroldAlarm', { delayInMinutes: 1, periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(function(alarm){
if (alarm.name === 'haroldAlarm') {
    try {
        console.log("haroldAlarm");
        console.log(new Date().toISOString());
        chrome.storage.sync.get(['popup_note_last_saved_date'], function(result) {
            let popup_note_last_saved_date = "";
            popup_note_last_saved_date = result.popup_note_last_saved_date;
            let today = new Date().toISOString().slice(0, 10);
            console.log(popup_note_last_saved_date);
            if(popup_note_last_saved_date != today){
                chrome.action.setBadgeBackgroundColor({color: "red"});
                chrome.action.setBadgeText({text: ':('});
            }
        });
    } catch (e) {
        console.log(e);
    } 
}
});