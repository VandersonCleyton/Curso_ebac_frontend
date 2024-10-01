$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        
        var taskInput = $('#task-input').val(); 
        $('#task-list').append('<li>' + taskInput + '</li>');
        $('#task-input').val('');
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); 
    });
});
