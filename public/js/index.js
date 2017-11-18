const URL = "https://psbackend.herokuapp.com/api/messages/";
//const URL = "http://localhost:8080/api/messages/";

function fetchData() {
    $.get(URL, function(data) {
        $('#messages').html("");
        for (msgData of data) {
            var name = msgData.name;
            var message = msgData.message;
            var nameDiv = $('<div>', { 'class': 'name' }).text(name);
            var messageDiv = $('<div>', { 'class': 'message' }).html(message);
            var messageGroup = $('<div>', { 'class': 'message-group' }).append(nameDiv).append(messageDiv);
            $('#messages').append(messageGroup);
        }
    });
}

$(document).ready(function() {
    
    $('#submit').click(function() {
        var data = {
            "name" : $('#name').val(),
            "message" : $('#message').val()
        }
        $.ajax({
            type: "POST",
            url: URL,
            data: data,
            success: function() {
                alert("That worked!");
            },
            dataType: "json"
        });
    });
    
    fetchData();
    setInterval(function() {
        fetchData();
    }, 5000);
});