const links = document.querySelectorAll("nav a");

const desativarTodosLinks = () => {
    links.forEach(link => link.classList.remove("active"));
}

const ativarLinkClicado = link => {
    link.classList.add("active");
}

links.forEach(link => {
    link.addEventListener("click", () => {
        desativarTodosLinks();
        ativarLinkClicado(link);
    });
});


links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
