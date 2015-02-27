$(document).ready(function(){
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');

    socket.on('my response', function(msg) {
		$('#log div:nth-child(6)').fadeOut();
        $('#log').prepend('<div class="alert alert-info" role="alert"><p><strong>Received : </strong> ' + msg.data + '</p></div>');
    });

    $('form#emit').submit(function(event) {
        socket.emit('my event', {data: $('#emit_data').val()});
        return false;
    });

    $('form#broadcast').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
        return false;
    });
});