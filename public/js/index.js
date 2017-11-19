// We are fetching messages from our own server, therefore we define the relative path starting with /.
const path = "/api/messages/";

/*
 * The fetchData() function fetches data from a path and appends it to the div with id 'messages'.
 * It does so by issuing a GET request on the /api/messages/ endpoint.
 */
function fetchData() {
    $.get(path, function(data) {
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

/*
 * When the button with id 'submit' is called, the name is extracted from our input with id 'name'
 * and the message is extracted from our input with id 'message'. Together, they are sent with the
 * POST method to the /api/messages endpoint.
 */
$('#submit').click(function() {
    var data = {
        "name" : $('#name').val(),
        "message" : $('#message').val()
    }
    $.ajax({
        type: "POST",
        url: path,
        data: data,
        success: function() {
            console.log("That worked!");
            fetchData();
        }
    });
});

// Once the document is fully loaded, we fetch data from the server and set an interval to fetch it again every 5 seconds.
$(document).ready(function() {
    fetchData();
    setInterval(function() {
        fetchData();
    }, 5000);
});