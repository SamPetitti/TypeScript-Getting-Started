function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMatch! Starting new game...';
}

document.getElementById('startGame')?.addEventListener('click', startGame);