var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users =[] , chatLog=[];

chat.on('message',function(message){
	chatLog.push(message);
});

chat.on('join', function(nickName){
	users.push(nickName);
});

chat.emit('join', 'Abhay');
chat.emit('join', 'Manya');
chat.emit('message','Hi Abhay');
chat.emit('message', 'Hello Manya');

console.log('------ messages --------');
for(var msg in chatLog){
console.log(chatLog[msg]);
}

console.log('------- Users ----------');
for(var user in users){
console.log(users[user]);
}
