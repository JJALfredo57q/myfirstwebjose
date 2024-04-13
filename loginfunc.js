document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById ('username').value;
    var password = document.getElementById ('password').value;

    if (username === '123' && password === '8562') {
        document.getElementById('message').textContent = 'loading...';
        window.location.href = 'HTML.html';

    
        


    }
        
    else {
        document.getElementById('message').textContent = 'wrong password or number';
        alert('Wrong password or number you entered, please try it again. Hello pls contact the owner of this website to have account on this website. Sorry for that the owners is poor of knowladge to have database access. ')

    }

    



});