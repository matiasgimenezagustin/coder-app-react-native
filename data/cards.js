const cards = [
    {
        id: 1,
        name: "Dragón Blanco de Ojos Azules",
        categoria: "Monstruo",
        categoryId: 1,
        tipo: "Dragón",
        nivel: 8,
        ataque: 3000,
        defensa: 2500,
        descripcion: "Este legendario dragón es una poderosa máquina de destrucción. Virtualmente invencible, muy pocos se han enfrentado a esta impresionante criatura y han vivido para contarlo.",
        image: "https://static.wikia.nocookie.net/yugiohenespanol/images/e/ef/Drag%C3%B3n_blanco_de_ojos_azules.jpg/revision/latest?cb=20200510222324&path-prefix=es"
    },
    {
        id: 16,
        name: "Mago del Tiempo",
        categoria: "Monstruo",
        categoryId: 1,
        tipo: "Lanzador de Conjuros",
        nivel: 2,
        ataque: 500,
        defensa: 400,
        descripcion:"Una vez por turno: puedes lanzar una moneda y elegir Cara o Cruz. Si aciertas, destruye todos los monstruos que controle tu adversario. Si fallas, destruye tantos monstruos que controles como sea posible y, si lo haces, recibes daño igual a la mitad del ATK total que esos monstruos destruidos tenían mientras estaban boca arriba en el Campo.",
        image: "https://static.wikia.nocookie.net/yugiohenespanol/images/0/08/Mago_del_tiempo.jpg/revision/latest?cb=20190204044646&path-prefix=es"
    },
    {
        id: 35,
        name: "Mago Oscuro",
        categoria: "Monstruo",
        categoryId: 1,
        tipo: "Lanzador de Conjuros",
        nivel: 7,
        ataque: 2500,
        defensa: 2100,
        descripcion:"El más grande de los magos en cuanto al ataque y la defensa.",
        image: "https://static.wikia.nocookie.net/yugiohenespanol/images/c/cc/Mago_oscuro.jpg/revision/latest?cb=20210709173414&path-prefix=es"
    },
    {
        id: 36,
        name: "Lu",
        categoria: "Monstruo",
        categoryId: 1,
        tipo: "Lanzador de Conjuros",
        nivel: 1,
        ataque: 2500,
        defensa: 2100,
        descripcion:"... que?",
        image: "https://static.wikia.nocookie.net/yugiohenespanol/images/0/08/Mago_del_tiempo.jpg/revision/latest?cb=20190204044646&path-prefix=es"
    },
    {
        id: 336,
        name: "Agujero Oscuro",
        categoryId: 2,
        categoria: "Mágica",
        descripcion:"Destruye todos los monstruos en el Campo.",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/0/02/Agujero_oscuro.jpg/revision/latest?cb=20180725220744&path-prefix=es"
    },
    {
        id: 337,
        name: "Raigeki",
        categoryId: 2,
        categoria: "Mágica",
        descripcion:"Destruye todos los monstruos que controle tu adversario.",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/3/37/Raigeki.jpg/revision/latest?cb=20201025074746&path-prefix=es",
    },
    {
        id: 348,
        name: "Espadas de la Luz Reveladora",
        categoryId: 2,
        categoria: "Mágica",
        descripcion:"Después de la activación de esta carta, ésta permanece en el Campo, pero debes destruirla durante la End Phase del 3er. turno de tu adversario. Cuando esta carta es activada: si tu adversario controla un monstruo boca abajo, voltea boca arriba todos los monstruos que controle. Mientras esta carta esté boca arriba en el Campo, los monstruos de tu adversario no pueden declarar un ataque.",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/1/10/Espadas_de_la_luz_reveladora.jpg/revision/latest?cb=20171011125001&path-prefix=es"
    },
    {
        id: 689,
        name: "Trampa de Inversión",
        categoryId: 3,
        categoria: "Trampa",
        descripcion:"Hasta la End Phase, todos los efectos que añaden o restan ATK o DEF son invertidos. (Las adiciones restan y las restas suman. Multiplicaciones y divisiones, incluyendo dividir a la mitad/duplicar, no son afectadas).",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/3/36/Trampa_de_inversi%C3%B3n.jpg/revision/latest?cb=20180129052058&path-prefix=es"
    },
    {
        id: 686,
        name: "Ruina Generalizada",
        categoryId: 3,
        categoria: "Trampa",
        descripcion:"Cuando un monstruo del adversario declara un ataque: destruye 1 monstruo en Posición de Ataque con el ATK más alto que controle tu adversario (si hay empate, eliges tú).",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/b/b8/Ruina_generalizada.jpg/revision/latest?cb=20170831213610&path-prefix=es"
    },
    {
        id: 690,
        name: "Trampa Falsa",
        categoryId: 3,
        categoria: "Trampa",
        descripcion:"Cuando tu adversario usa una Carta Mágica, de Trampa o de Monstruo de Efecto para destruir tu/s Carta/s de Trampa, esta carta es destruida como substituto de tu/s Carta/s de Trampa",
        image:"https://static.wikia.nocookie.net/yugiohenespanol/images/d/da/Trampa_falsa.jpg/revision/latest?cb=20110511010354&path-prefix=es"
    },
]

export default cards