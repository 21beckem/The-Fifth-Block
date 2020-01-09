var input = document.getElementById('messageInput');
var that = this;
if (input.value != "") {
    that.socket.emit('starttyping');
    while(input.value != "") {}
    that.socket.emit('stoptyping');
}