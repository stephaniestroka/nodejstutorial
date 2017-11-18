//const URL = "https://psbackend.herokuapp.com/api/messages/";
const URL = "localhost:8080/api/messages/";

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
});