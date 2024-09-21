const title = "PLAYA Y RIO";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "PLAYA Y RIO es tu destino para encontrar las mejores camisetas, tenins, chanclas, blusas y confección. Ofrecemos una amplia variedad de productos que combinan moda y funcionalidad, ideales para disfrutar de la playa y la aventura.",
        description2: "Con nuestro lema 'Moda y Aventura', en PLAYA Y RIO nos dedicamos a ofrecer prendas que se adaptan a tu estilo de vida activo y a tus momentos de relax. Explora nuestra colección en nuestra página web y encuentra los artículos perfectos para cada ocasión."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Moda y Aventura",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
