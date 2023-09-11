// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Hello World!',
            picture: 'https://picsum.photos/200/300'
        }
    },

    // Bonus:
    // Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.
}).mount('#app')


