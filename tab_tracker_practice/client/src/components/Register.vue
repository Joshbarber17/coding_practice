<template>
  <div>
    <span>Registering</span>
    <br>
    <input type='email' name='email' placeholder='email' v-model='email'/>
    <input type='password' name='password' placeholder='password' v-model='password'/>
    <br>
    <button @click='register'>Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
