
function sendDate(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/',
        type: 'POST',
        data: $('JSO').value,
        contentType: 'text/html',
        success: console.log('الحبببب'),
        
      });
}

$('#sumbitButten').on('click',sendDate);

function getData(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/',
        type: 'POST',
        data: $('JSO').value,
        contentType: 'text/html',
        success: console.log('الحبببب'),
        
      });
}
