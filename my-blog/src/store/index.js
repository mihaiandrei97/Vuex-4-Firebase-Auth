import { createStore } from 'vuex'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth'


const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signup(context, {email, password}) {
      console.log('singup user')
      
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('Could not complete signup')
      }
      
    },
    async login(context, { email, password }) {
      console.log('login user')

      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('Could not complete login')
      }
    },
    async logout(context) {
      console.log('logout action')
      await signOut(auth)
      context.commit('setUser', null)
    }
  },
})

// const unsubscribe = onAuthStateChanged(auth, (user) => {
//   store.commit('setAuthIsReady', true)
//   store.commit('setUser', user)
//   unsubscribe()
// })

export default store