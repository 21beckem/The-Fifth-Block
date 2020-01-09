var input = document.getElementById('messageInput');
var that = this;
while (document.getElementById("sendTypingData").checked == true) {
    if (input.value != "") {
        that.socket.emit('starttyping');
        while(input.value != "") {}
        that.socket.emit('stoptyping');
    }
}