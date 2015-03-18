var btnReply = document.querySelector('.reply_button');

var btnSchedule = document.createElement('button');
btnSchedule.textContent = 'Send Email';
btnSchedule.classList.add('inserted');

var btnTemplate = document.createElement('button');
btnTemplate.textContent = 'Email Template';
btnTemplate.classList.add('inserted');

btnReply.parentNode.insertBefore(btnSchedule, btnReply.nextSibling);
btnReply.parentNode.insertBefore(btnTemplate, btnReply.nextSibling);

btnReply.click(); // To enable the drop down menu -- to read contact information
var returnemail = document.querySelector('.returnemail');
btnReply.click(); // To close the menu to hide the effect of simulated click

var emailObj = {};

btnSchedule.addEventListener('click', function (event) {
    emailObj = extractEmailFromPost();
    extractPhoneFromPost();
    if(emailObj.emailid) prepareEmailDraft();
    showCalendar();
});

btnTemplate.addEventListener('click', function (event) {
    window.open('email_dialog.html');
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

    returnemail.querySelector('.reply_options').querySelectorAll('ul')[3]
        .querySelector('li').querySelector('a').href = mailtoString;

    sendEmail(mailtoString);
}

function sendEmail(mailto) {
    window.location = mailto;
}

function showCalendar () {

}