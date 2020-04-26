let messageForm = document.querySelector('.sendMessage');
let chatInput = document.querySelector('.chatInput');
let messageList = document.querySelector('.message-list')

messageForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newMessage = document.createElement('span');
    newMessage.textContent = chatInput.value;
    chatInput.value = '';
    messageList.prepend(newMessage);

}