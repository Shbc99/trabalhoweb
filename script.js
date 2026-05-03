/* 
   ARQUIVO: script.js
   OBJETIVO: Persistência de tema (SVG) e Validação de Contato.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. LÓGICA DO TEMA COM PERSISTÊNCIA */
    const themeBtn = document.getElementById('theme-toggle');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Alterna a classe no nível superior (HTML)
            const isDark = document.documentElement.classList.toggle('dark-mode');
            
            // Salva a preferência no armazenamento local do navegador
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    /* 2. VALIDAÇÃO DO FORMULÁRIO E POPUP DE SUCESSO */
    const form = document.getElementById('form-contato');
    const modal = document.getElementById('modal-confirmacao');
    const btnFechar = document.getElementById('fechar-modal');
    const textoModal = document.getElementById('modal-texto');

    // Executa apenas se os elementos do formulário existirem na página
    if (form && modal) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome !== "" && email.includes('@') && mensagem !== "") {
                textoModal.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
                modal.style.display = "flex"; 
                form.reset();
            } else {
                alert("Por favor, preencha todos os campos corretamente.");
            }
        });

        // Controles de fechamento do Modal
        if (btnFechar) {
            btnFechar.onclick = () => modal.style.display = "none";
        }
        window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
    }
});