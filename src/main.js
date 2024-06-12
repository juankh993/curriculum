//Hamburguer menu
const nav = document.querySelector(".buttons-container");
const open = document.getElementById("open-button");
const close = document.getElementById("close-button");
open.addEventListener("click", function(){
    nav.classList.toggle("visible");
   
    open.style.display ="none"
});

close.addEventListener("click", function(){
    nav.classList.toggle("visible");
    if (open.style.display = "block" ) {
        open.style.display = "none" ;
    } else {
        open.style.display = "block" ;
    }
    open.style.display ="block"
});

//object studies
const studies = [
    {
        id: 1,
        school: "Servicio Nacional de Aprendizaje - SENA",
        career: "Tecnologo en Análisis y Desarrollo de Sistemas de Información",
        state: "Culminado en Abril de 2024",
        city: "Bogota, Colombia"
    },
    {
        id: 2,
        school: "Servicio Nacional de Aprendizaje - SENA",
        career: "Técnico en Mantenimiento de equipos de cómputo",
        state: "Culminado en Marzo de 2014",
        city: "Cali, Colombia"
    },
    {
        id: 3,
        school: "Institución educativa Liceo Departamental",
        career: "Bachiller académico",
        state: "Culminado en Noviembre de 2011",
        city: "Cali, Colombia"
    }
];


//object work experience

const experience = [
    {
        id: 1,
        company: "AXITY",
        job: "Analista de operaciones junior",
        area: "Data center",
        duration: "enero 2022 - mayo 2023",
        lead: "Edwin José Parra",
        phone: "6381800",
        functions: "Realizar monitoreo a servidores a través de la web nagios validando que no se llene ningún volumen, ni que se detengan los servicios Resolver caso de mesa de ayuda nivel 2, realizar copias de seguridad de la información a ciertas horas del día, manejando librería IBM TS3200 y TSM4300. Ejecutar scripts en SQL SERVER que envían los desarrolladores, estar validando que no se generen bloqueos en las bases de datos, ejecutar consultas SQL y varias tareas que se deben realizar durante el turno en los servidores"
    },
    {
        id: 2,
        company: "SUMIMAS - SCALAS",
        job: "Técnico de soporte",
        area: "Mantenimiento y Soporte técnico en sitio",
        duration: "agosto 2021 - enero 2022",
        lead: "Abelardo Baquero",
        phone: "8773399",
        functions: "Técnico de soporte para Outsourcing de Impresión con contrato en la Policía Nacional, atendiendo casos vía correo electrónico, vía WhatsApp, vía SIGMA (Sistema de información de gestión de casos), creación y asignación de cuota de impresión a usuarios en el aplicativo NddPrint y realizando soporte presencial y remoto. Gestión de inventarios y manejo de suministros de las impresoras. Gestión de reportes e informes de los usuarios ante el proveedor."
    },
    {
        id: 3,
        company: "SUMIMAS - SCALAS",
        job: "Auxiliar logístico",
        area: "Bodega de almacenamiento",
        duration: "junio 2020 - julio 2021",
        lead: "Elcy Duarte",
        phone: "8773399",
        functions: "Realizar cargue y descargue de mercancía, inventarios, estibado, picking, packing, conteo de mercancía y auxiliar de ruta."
    },
    {
        id: 4,
        company: "SUMIMAS - SCALAS",
        job: "Técnico de soporte",
        area: "Mantenimiento y Soporte técnico en sitio",
        duration: "enero 2019 - abril 2020",
        lead: "Abelardo Baquero",
        phone: "8773399",
        functions: "Técnico de soporte para Outsourcing de Impresión con contrato en la Policía Nacional, atendiendo casos vía correo electrónico, vía WhatsApp, vía SIGMA (Sistema de información de gestión de casos), creación y asignación de cuota de impresión a usuarios en el aplicativo NddPrint y realizando soporte presencial y remoto. Gestión de inventarios y manejo de suministros de las impresoras. Gestión de reportes e informes de los usuarios ante el proveedor."
    },
    {
        id: 5,
        company: "TELEPERFORMANCE",
        job: "Asesor call center",
        area: "Soporte técnico y de servicio al cliente",
        duration: "mayo 2015 - abril 2018",
        lead: "Brenda Diaz",
        phone: "4049080",
        functions: "Atender clientes extranjero vía telefónica para la campaña de Vodafone España, realizando soporte técnico y servicio al cliente en cuanto a su servicio de internet móvil, llamadas y SMS y configuraciones del móvil."
    },
    {
        id: 6,
        company: "ATENTO",
        job: "Asesor call center",
        area: "Soporte técnico y de servicio al cliente",
        duration: ":julio 2014 - marzo 2015",
        lead: "Yeison Quiroga",
        phone: "5940000",
        functions: "Atender clientes vía telefónica para la campaña de claro hogar, realizando soporte técnico a fallas y/o configuraciones para telefonía fija, televisión e internet."
    }
];

console.log(experience);


