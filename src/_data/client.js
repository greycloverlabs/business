module.exports = {
    name: "Greycloverlabs",
    email: "help@greycloverlabs.com",
    phoneForTel: "97792-00653",
    phoneFormatted: "(+91) 97792-00653",
    address: {
        lineOne: "first address line",
        lineTwo: "Second Address Line",
        city: "Mohali",
        state: "Punjab",
        zip: "140307",
        country: "IN",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
	domain: "https://www.greycloverlabs.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
