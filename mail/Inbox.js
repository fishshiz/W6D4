const MessageStore = require("./message_store")

class Inbox{
  constructor(){

  }
  
  render() {
    let messages = document.createElement('ul');
    messages.className = messages;
    let messagesArr = MessageStore.getInboxMessages();
    for (var i = 0; i < messagesArr.length; i++) {
      console.log(messagesArr[i]);
    }
    return messages;
  }
  
  
}

module.exports = Inbox;