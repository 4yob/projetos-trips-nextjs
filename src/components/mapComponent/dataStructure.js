const exemploTripsReais = [
    {
        id: 1,
        photo: "paris.jpg",
        title: "Aventura em Paris",
        place: "Paris",
        country: "FR",
        main_attractions: "Torre Eiffel (especialmente a noite), o museu do Louvre, a majestosa Catedral de Notre-Dame (mesmo apos o incendio, sua imponencia permanece) e passeios romanticos pelo Rio Sena.",
        local_experience: "Perambular sem rumo em Saint-Germain-des-Pres, cheirar o croissant fresco das boulangeries e fazer um piquenique improvisado com vinho e queijos nos gramados perto da Torre foi realmente surreal. O charme esta no ritmo elegante dos parisienses.",
        start_date: "15/07/2021",
        end_date: "25/07/2021"
    },
    {
        id: 2,
        photo: "ipanema.jpg",
        title: "Vibes Cariocas",
        place: "Ipanema",
        country: "BR",
        main_attractions: "A propria Praia de Ipanema (e seu famoso Posto 9), assistir ao por do sol no Arpoador e visitar a Lagoa Rodrigo de Freitas para um fim de tarde relaxante.",
        local_experience: "Tomar uma agua de coco gelada na areia, ouvir o samba de roda vindo de algum quiosque e aproveitar a energia despreocupada e vibrante dos cariocas me deixaram tao tranquila que esqueci completamente dos meus problemas. As feiras de rua e os bares de boteco completaram o clima.",
        start_date: "10/01/2021",
        end_date: "20/01/2021"
    },
    {
        id: 3,
        photo: "kyoto.jpg",
        title: "Explorando Kyoto",
        place: "Kyoto",
        country: "JP",
        main_attractions: "O majestoso Kinkaku-ji (Pavilhao Dourado), a caminhada hipnotizante pelo Bosque de Bambu de Arashiyama e a area de Fushimi Inari-taisha com seus milhares de portoes torii.",
        local_experience: "Participar de uma tradicional cerimonia do cha, perambular pelas ruas historicas de Gion (o bairro das geishas) e me deliciar com o kaiseki, a culinaria tradicional da corte e algo que eu faria novamente. A experiencia e de total reverencia e paz.",
        start_date: "05/11/2022",
        end_date: "18/11/2022"
    },
    {
        id: 4,
        photo: "machupicchu.jpg",
        title: "Misterios Incas",
        place: "Machu Picchu",
        country: "PE",
        main_attractions: "A propria cidadela inca de Machu Picchu, as montanhas adjacentes Huayna Picchu e Montanha Machu Picchu (para vistas panoramicas), e o Templo do Sol e o Intihuatana Stone (relogios solares).",
        local_experience: "A sensacao indescritivel de ver a ruina surgir entre as nuvens ao nascer do sol. E um momento quase espiritual, de contemplacao silenciosa e profunda conexao com uma historia milenar. Respirar o ar puro dos Andes me fez sentir o misterio no ar.",
        start_date: "22/03/2022",
        end_date: "30/03/2022"
    },
    {
        id: 5,
        photo: "santorini.jpg",
        title: "Charme Grego",
        place: "Santorini",
        country: "GR",
        main_attractions: "O iconico por do sol de Oia, as vilas brancas de Fira e Imerovigli aninhadas na encosta da caldeira e as praias de areia vulcanica (como a Red Beach).",
        local_experience: "Perder-se nas ruelas labirinticas, descobrindo terracos escondidos e igrejas de cupula azul. Desfrutar da culinaria local, como tomatinis e fava, com um copo de vinho Assyrtiko da ilha. E um paraiso fotografico de paz e contemplacao, minha segunda casa!",
        start_date: "01/09/2023",
        end_date: "08/09/2023"
    },
    {
        id: 6,
        photo: "newyork.jpg",
        title: "Aventura na Big Apple",
        place: "Nova York",
        country: "US",
        main_attractions: "O espetaculo luminoso da Times Square, um passeio tranquilo pelo Central Park, a beleza da arquitetura no Rockefeller Center e a travessia historica da Ponte do Brooklyn.",
        local_experience: "Sentir o pulso da cidade no metro apressado, comer um street food classico, como um cachorro-quente de rua, e passar horas explorando as galerias de arte e as lojas vintage de Lower Manhattan ou a energia hipster do Brooklyn. Whats Up, NY city!",
        start_date: "12/05/2023",
        end_date: "20/05/2023"
    },
    {
        id: 7,
        photo: "barcelona.jpg",
        title: "Cores da Catalunha",
        place: "Barcelona",
        country: "ES",
        main_attractions: "A arquitetura fantastica da Sagrada Familia, o colorido e as vistas do Parque Guell, a agitacao da avenida La Rambla e o charme do antigo Bairro Gotico.",
        local_experience: "Passar a noite no bairro de El Born, provando uma variedade de tapas em pequenos bares com uma taca de cava ou sangria. O melhor e o almoco tardio seguido pela siesta e a energia que explode novamente a noite. Me senti como en casa.",
        start_date: "02/08/2024",
        end_date: "11/08/2024"
    },
    {
        id: 8,
        photo: "islandia.jpg",
        title: "Terra do Gelo e Fogo",
        place: "Islandia",
        country: "IS",
        main_attractions: "O circuito do Circulo Dourado (com a cascata Gullfoss e o geiser Strokkur), a Lagoa Azul (Blue Lagoon) e, claro, a busca pela espetacular Aurora Boreal.",
        local_experience: "A experiencia e de imersao total na natureza intocada. Dirigir por paisagens lunares, tomar um banho relaxante nas piscinas geotermicas e sentir a forca dos elementos. A hospitalidade dos islandeses, em contraste com a paisagem selvagem, e reconfortante.",
        start_date: "18/02/2024",
        end_date: "26/02/2024"
    },
    {
        id: 9,
        photo: "roma.jpg",
        title: "Historia Romana",
        place: "Roma",
        country: "IT",
        main_attractions: "O imponente Coliseu, o historico Forum Romano e o Monte Palatino, e jogar a moeda na barroca Fontana di Trevi.",
        local_experience: "Viver o dolce far niente em um cafe da praca. A melhor parte e jantar em uma trattoria simples no bairro de Trastevere, comendo um autentico Cacio e Pepe e ouvindo o barulho alegre dos locais. Caminhar por ruas estreitas e descobrir ruinas a cada esquina.",
        start_date: "10/10/2025",
        end_date: "17/10/2025"
    },
    {
        id: 10,
        photo: "bangkok.jpg",
        title: "Encantos Tailandeses",
        place: "Bangkok",
        country: "TH",
        main_attractions: "Os templos dourados do Grande Palacio e o Wat Arun, os barcos longos nos canais (khlongs) e o mercado flutuante de Damnoen Saduak.",
        local_experience: "O Street Food e o coracao da experiencia: provar Pad Thai e Mango Sticky Rice fresquinhos no calor da noite foram as minhas melhores decisoes. Alem de andar em um tuk-tuk pelo transito caotico e negociar nos mercados noturnos como o Asiatique The Riverfront e claro. E uma cidade de energia infinita e sabores exoticos.",
        start_date: "05/04/2025",
        end_date: "15/04/2025"
    }
];

export default exemploTripsReais;