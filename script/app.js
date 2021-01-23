if (window.Worker) {
    const worker = new Worker('/script/worker.js')
    worker.postMessage('')
  
  
    const App = {
      data () {
        return {
            randomImage: null,
          counter: 0
        }
      },
      mounted () {
        this.getImage()
  
        worker.addEventListener("message", this.onMessageFromWorker);
      },
      methods: {
        onMessageFromWorker (e) {
            this.counter = e.data
            if (this.counter % 10 === 0) {
              this.getImage()
            }
        },
        getImage () {
            const random = Math.floor((Math.random() * 100) + 1)
            this.randomImage = 'https://picsum.photos/200/300?random=' + random
        }
      }
    }
  
    Vue.createApp(App).mount('#app')
  }