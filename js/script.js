const { createApp } = Vue
  
  createApp({

    // dentro data() abbiamo un oggetto che ci restituisce tutte le informazioni
    // che potremmo inserire, manipolare e leggere dal document
    data() {
      return {
        // dentro questo oggetto possiamo inserire tutte le proprietà che vogliamo
        title: "Aggiornamento: Vue con i Git Branch",
        nome: "Pippo",
        alunni: ["Luca", "Edoardo", "Niccolò", "Martina"],

        titleClass: '',
      }
    },


    methods: {
      
    },

}).mount('#app');