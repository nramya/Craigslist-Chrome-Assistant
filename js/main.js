var btnReply = document.querySelector('.reply_button');
var btnSchedule = document.createElement('button');
btnSchedule.textContent = 'Schedule';
btnSchedule.classList.add('inserted_button');
btnReply.parentNode.insertBefore(btnSchedule, btnReply.nextSibling);
btnReply.click();
var returnemail = document.querySelector('.returnemail');
btnReply.click();
var emailObj = {};
//var contact_info = returnemail.querySelector('.reply_options').querySelectorAll('ul');

btnSchedule.addEventListener('click', function (event) {
    emailObj = extractEmailFromPost();
    extractPhoneFromPost();
    console.log(emailObj);
    if(emailObj.emailid) prepareEmailDraft();
    showCalendar();
});

function extractEmailFromPost () {
    return {
        link: document.querySelector('#replylink').href,
        postid: document.querySelector('#replylink').href.split('/').pop(),
        subject: returnemail.querySelector('title').innerHTML,
        emailid: (returnemail.querySelector('.anonemail')) ? returnemail.querySelector('.anonemail').innerHTML : null
    }
}

function extractPhoneFromPost () {
    emailObj.phone = returnemail.querySelector('.reply_options').querySelectorAll('ul')[2].querySelector('li').innerHTML;
}

function prepareEmailDraft () {
    var mailtoString = 'mailto:'+ encodeURIComponent(emailObj.emailid)
        + '?subject=' + encodeURIComponent(emailObj.subject) + '&body=' + encodeURIComponent(emailObj.link);
    console.log(mailtoString);

    returnemail.querySelector('.reply_options').querySelectorAll('ul')[3]
        .querySelector('li').querySelector('a').href = mailtoString;

    console.log(returnemail.querySelector('.reply_options').querySelectorAll('ul')[3]
        .querySelector('li').querySelector('a').href);
}

function showCalendar () {

}