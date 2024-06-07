document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    
    if (name && email && phone && service) {
        document.getElementById('message').textContent = `Obrigado, ${name}! Seu agendamento para o serviço ${service} foi recebido.`;
        document.getElementById('appointment-form').reset();
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});