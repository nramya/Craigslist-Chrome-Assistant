//function createElement(type, parent, innerTML, className) {
//    var element = document.createElement(type);
//    if (parent) parent.appendChild(element);
//    if (innerHTML) element.innerHTML = innerHTML;
//    if (className) element.className = className;
//    return element;
//}


var btnReply = document.querySelector('.reply_button');
var btnSchedule = document.createElement('button');
btnSchedule.textContent = 'Schedule';
btnSchedule.classList.add('inserted_button');
btnReply.parentNode.insertBefore(btnSchedule, btnReply.nextSibling);

btnSchedule.addEventListener('click', function (event) {
    console.log('clicked!');
    extractEmail();
    extractPhone();
    prepareEmailDraft();
    showCalendar();
});

function extractEmail () {

}

function extractPhone () {

}

function prepareEmailDraft () {

}

function showCalendar () {

}