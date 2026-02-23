
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    const mensagemDiv = document.getElementById('mensagemForm');

    if (!form || !mensagemDiv) {
        console.error('Formulário ou área de mensagem não encontrados');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        mensagemDiv.innerHTML = '';
        mensagemDiv.className = 'form-message'; 

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();

        const erros = [];

        if (nome.length < 3) {
            erros.push('O nome deve ter pelo menos 3 caracteres.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            erros.push('Por favor, insira um e-mail válido.');
        }

        if (mensagem.length < 10) {
            erros.push('A mensagem deve ter pelo menos 10 caracteres.');
        }

        if (erros.length > 0) {
            mensagemDiv.classList.add('error');
            const ul = document.createElement('ul');
            erros.forEach(erro => {
                const li = document.createElement('li');
                li.textContent = erro;
                ul.appendChild(li);
            });
            mensagemDiv.appendChild(ul);
            return; 
        }

        mensagemDiv.classList.add('success');
        mensagemDiv.innerHTML = `
            <strong>Obrigado, ${nome.split(' ')[0]}!</strong><br>
            Sua mensagem foi enviada com sucesso.<br>
            Em breve entraremos em contato pelo e-mail ${email}.
        `;

        form.reset();

        setTimeout(() => {
            mensagemDiv.innerHTML = '';
            mensagemDiv.className = 'form-message';
        }, 8000);
    });
});