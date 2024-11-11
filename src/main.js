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
        company: "FLARE SAS",
        job: "HTML Developer",
        area: "Desarrollo de software",
        duration: "mayo 2023 - actualmente",
        lead: "Andres Barreto",
        phone: "3298181",
        functions: "Escribir código semántico y estructurado en HTML para definir la estructura de una página web \n 2. Estilizar las páginas web utilizando hojas de estilo en cascada (CSS) para lograr el diseño deseado \n 3. Implementar la lógica del lado del cliente utilizando JavaScript para mejorar la interactividad y la experiencia del usuario. \n 4. Garantizar la compatibilidad entre diferentes navegadores y dispositivos. \n 5. Utilizar frameworks front-end (marco de trabajo) como Tailwind, Bootstrap y/o flowbite para facilitar el desarrollo y mejorar la eficiencia. \n 6. Diseñar y desarrollar sitios web que se adapten y sean funcionales en dispositivos y diferentes pantallas. \n 7. Administrar CMS (Sistema de gestión de contenidos) cargando contenido"
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
    },
    {
        id: 7,
        company: "AXITY",
        job: "Analista de operaciones junior",
        area: "Data center",
        duration: "enero 2022 - mayo 2023",
        lead: "Edwin José Parra",
        phone: "6381800",
        functions: "Realizar monitoreo a servidores a través de la web nagios validando que no se llene ningún volumen, ni que se detengan los servicios Resolver caso de mesa de ayuda nivel 2, realizar copias de seguridad de la información a ciertas horas del día, manejando librería IBM TS3200 y TSM4300. Ejecutar scripts en SQL SERVER que envían los desarrolladores, estar validando que no se generen bloqueos en las bases de datos, ejecutar consultas SQL y varias tareas que se deben realizar durante el turno en los servidores"
    }
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");


let studiesIndex = 0;

const placeStudie = document.getElementById("university");
const certificate = document.getElementById("certificate");
const durationStudie = document.getElementById("duration");
const cityStudie = document.getElementById("city-certificate");

//window.addEventListener("DOMContentLoaded", ()=>{
    function studieData(studiesIndex) {
        const studiesItem = studies[studiesIndex];
        placeStudie.textContent = studiesItem.school;
        certificate.textContent = studiesItem.career;
        duration.textContent = studiesItem.state;
        cityStudie.textContent = studiesItem.city;
        studiesIndex++;
    }
//});

//function renderDataStudies(studies) {
    const dataStudies = document.getElementById(".data-studies");


    if (studies < 0) {
        studiesIndex = studies.length - 1
        studieData(studiesIndex);
    }

    // for (let studiesIndex = 0; studiesIndex < studies.length; studiesIndex++) {
    //     studiesIndex = document.createElement("p");
    //     studiesIndex.textContent = '${studies.school}';
    //     console.log(dataStudies);
    // }
    
//}


arrowLeft.addEventListener("click", function(){
    studiesIndex--;
    if (studiesIndex < 0) {
        studiesIndex = studies.length - 1
    }
    studieData(studiesIndex);
});
arrowRight.addEventListener("click", function(){
    studiesIndex++;
    if (studiesIndex > studies.length - 1) {
        studiesIndex = 0;
    }
    studieData(studiesIndex);
});

// jobs

const company = document.getElementById("company");
const role = document.getElementById("role");
const area = document.getElementById("area-job");
const timeWorked = document.getElementById("time-worked");
const lead = document.getElementById("lead");
const phone = document.getElementById("phone");
const functionsJob = document.getElementById("functions");

// arrows

const leftExperience = document.getElementById("arrow-left-2");
const rightExperience = document.getElementById("arrow-right-2");

let experienceJobs = 0;


function experienceData (experienceJobs) {
    const experienceItem = experience[experienceJobs];
    company.textContent = experienceItem.company;
    role.textContent = experienceItem.job;
    area.textContent = experienceItem.area;
    timeWorked.textContent = experienceItem.duration;
    lead.textContent = experienceItem.lead;
    phone.textContent = experienceItem.phone;
    functionsJob.textContent = experienceItem.functions;
    experienceJobs++;
}

const dataExperience = document.getElementById(".data-jobs");


leftExperience.addEventListener("click", function(){
    experienceJobs--;
    if (experienceJobs < 0) {
        experienceJobs = experience.length - 1
    }
    experienceData(experienceJobs);
});

rightExperience.addEventListener("click", function(){
    experienceJobs++;
    if (experienceJobs > experience.length - 1) {
        experienceJobs = 0;
    }
    experienceData(experienceJobs);
});


