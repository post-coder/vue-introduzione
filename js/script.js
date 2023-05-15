const { createApp } = Vue
  
  createApp({

    // dentro data() abbiamo un oggetto che ci restituisce tutte le informazioni
    // che potremmo inserire, manipolare e leggere dal document
    data() {
      return {
        // dentro questo oggetto possiamo inserire tutte le proprietà che vogliamo
        title: "Primo approccio a Vue",
        nome: "Edoardo",
        alunni: ["luca", "edoardo", "niccolò"],
      }
    },


    methods: {
      
    },

}).mount('#app');