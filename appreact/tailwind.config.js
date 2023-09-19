/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/{*.jsx, *.js}"],
  theme: {
    extend: {
      backgroundColor: {
        'light-color' : '#FDF8E7', //Couleur claire du projet
        'light-color-lightened' : '#FDF8E7', //Couleur très claire du projet
        'light-color-dark' : '#FDF8E7', //Couleur claire légèrement foncée du projet
        'light-color-shadow' : '#FDF8E7', //Couleur ombragée de la light couleur
        'dark-color' : '#121517', //Couleur foncée du projet
        'primary-color' : '#63579E', //Couleur vivante du projet
        'error-color' : '#E7888C',
        'valid-color' : '#80DBAC'
      },
      textColor: {
        'dark-color' : '#121517', //Couleur foncée du projet
        'light-color' : '#FDF8E7', //Couleur très claire du projet
        'primary-color' : '#63579E', //Couleur vivante du projet
      },
      boxShadow: {
        'inner-shadow': 'inset 0 0 12px #FDF8E7', // Ombre interne
        'outer-shadow': '0 0 8px #FDF8E7',      // Ombre externe
        'button-shadow': '0 8px 16px #FDF8E7',      // Ombre externe décalée
      },
    },
  },
  plugins: [],
}

