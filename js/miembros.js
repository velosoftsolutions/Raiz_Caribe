//array dianmico de miembros
const miembros = [
    {
        nombre: "Batatica Fit",
        categorias: ["Productos Naturales", "Alimentos Saludables"],
        descripcion: "Alimentos saludables a base de batata, sin conservantes, azúcar, lactosa ni harinas refinadas, ideales para personas.",
        imagen: "../assets/miembros/batatica.JPG",
        enlace: "batatica.html"
    },
    {
        nombre: "Sampui",
        categorias: ["Bebidas"],
        descripcion: "Licores, aguardientes y cervezas artesanales inspiradas en la cultura Zenú.",
        imagen: "../assets/miembros/sampui.JPG",
        enlace: "sampui.html"
    },
    {
        nombre: "Vinos Frutos de la Sabana",
        categorias: ["Bebidas"],
        descripcion: "Empresa dedicada a la producción y comercialización de vinos artesanales elaborados con frutas autóctonas de la región.",
        imagen: "../assets/miembros/vinosf.JPG",
        enlace: "sampui.html"
    },
    {
        nombre: "Nutreform",
        categorias: ["Productos Naturales", "Alimentos Saludables"],
        descripcion: "Empresa dedicada a la producción y distribución de alimentos 100% naturales, nutritivos y sostenibles, enfocados en el bienestar y la calidad de vida.",
        imagen: "../assets/miembros/nunifood.JPG",
        enlace: "#"
    },
    {
        nombre: "Nuova Vita",
        categorias: ["Productos Naturales", "Alimentos Saludables"],
        descripcion: "Especializada en cremas de frutos secos 100% naturales, elaboradas sin conservantes y adaptadas a estilos de vida saludables.",
        imagen: "../assets/miembros/nouva.JPG",
        enlace: "#"
    },
    {
        nombre: "Patillera",
        categorias: ["Productos Naturales"],
        descripcion: "Empresa dedicada a la producción y transformación de la patilla en productos innovadores y sostenibles con identidad sucreña.",
        imagen: "../assets/miembros/patillera.png",
        enlace: "#"
    },
    {
        nombre: "Amaiwa",
        categorias: ["Productos Naturales", "Alimentos Saludables"],
        descripcion: "Especializada en la comercialización de miel proveniente del bosque seco tropical, destacada por su sabor único y origen natural.",
        imagen: "../assets/miembros/Amaiwa.JPG",
        enlace: "#"
    },
    {
        nombre: "María Bonita",
        categorias: ["Panadería y Repostería", "Transformados"],
        descripcion: "Empresa de producción y comercialización de productos de panadería, pastelería y repostería elaborados con tradición y sabor local.",
        imagen: "../assets/miembros/mariab.JPG",
        enlace: "#"
    },
    {
        nombre: "Foodies Chips",
        categorias: ["Alimentos Congelados", "Transformados"],
        descripcion: "Transforma tubérculos y cereales en innovadores alimentos congelados elaborados con ingredientes típicos del Caribe colombiano.",
        imagen: "../assets/miembros/tahine.JPG",
        enlace: "#"
    },
    {
        nombre: "Briggie Congelados",
        categorias: ["Pasabocas", "Transformados"],
        descripcion: "Fabricante de deditos de queso y pasabocas congelados con altos estándares de calidad y sabor artesanal.",
        imagen: "../assets/miembros/bringi.JPG",
        enlace: "#"
    },
    {
        nombre: "Interagro del Caribe",
        categorias: ["Agroindustria"],
        descripcion: "Empresa dedicada a la producción, transformación y comercialización de productos agrícolas con enfoque en calidad y tradición.",
        imagen: "../assets/miembros/inteagro.png",
        enlace: "#"
    },
    {
        nombre: "Serena W Plant",
        categorias: ["Productos Naturales", "Alimentos Saludables"],
        descripcion: "Produce y comercializa especias y plantas aromáticas deshidratadas, libres de agroquímicos y orientadas al consumo saludable.",
        imagen: "../assets/miembros/serania.JPG",
        enlace: "#"
    },
    {
        nombre: "Preservar",
        categorias: ["Servicios"],
        descripcion: "Empresa especializada en asesorías, trámites, capacitación y acompañamiento para el sector agroalimentario.",
        imagen: "../assets/miembros/preservar.png",
        enlace: "#"
    }
];



const grid = document.getElementById("miembrosGrid");

function pintarMiembros(lista) {

    grid.innerHTML = "";

    lista.forEach(miembro => {

        grid.innerHTML += `

        <div class="miembro-card">

            <div class="miembro-image">
                <img src="${miembro.imagen}" alt="${miembro.nombre}">
            </div>

            <div class="miembro-content">

                <span class="categoria">
                    ${miembro.categorias.join(" • ")}
                </span>

                <h3>${miembro.nombre}</h3>

                <p>
                    ${miembro.descripcion}
                </p>

                <a href="${miembro.enlace}" class="btn-detalle">
                    Ver detalles
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>

        </div>

        `;
    });

}

// Mostrar todos al cargar
pintarMiembros(miembros);

// Filtros
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const filtro = btn.dataset.filter;

        if (filtro === "Todos") {

            pintarMiembros(miembros);

        } else {

            const filtrados = miembros.filter(miembro =>
                miembro.categorias.includes(filtro)
            );

            pintarMiembros(filtrados);

        }

    });

});