
    // Seleciona o botão de menu e o menu lateral
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Adiciona um evento de clique no botão de menu
    menuToggle.addEventListener('click', () => {
        // Alterna a classe "active" no menu lateral
        sidebar.classList.toggle('active');
    });

    // Opcional: Adiciona um evento de clique para fechar o menu ao clicar no botão de fechar
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

