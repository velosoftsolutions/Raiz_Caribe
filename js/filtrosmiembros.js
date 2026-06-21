document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-btn");
    const productos = document.querySelectorAll(".producto-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filtro = button.dataset.filter;

            productos.forEach(producto => {

                const categoria = producto.dataset.filter;

                if (filtro === "Todos" || categoria === filtro) {
                    producto.style.display = "";
                } else {
                    producto.style.display = "none";
                }

            });

        });

    });

});