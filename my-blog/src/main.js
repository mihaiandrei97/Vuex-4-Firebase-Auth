import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from './firebase/config'

// global styles
import './assets/main.css'
let app;

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (!app) {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    app = createApp(App).use(router).use(store).mount('#app')
    unsubscribe()
  }
})
