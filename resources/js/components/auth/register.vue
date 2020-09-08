<template>
<div>
     <div class="container">
     <div class="card card-login mx-auto mt-5">
      <div class="card-header">Register a new account</div>
      <div class="card-body">
        <form @submit.prevent="signup">
         <div class="form-group">
            <div class="form-label-group">
              <input type="text" id="fullName" v-model="form.name" class="form-control" placeholder="Full name"  autofocus="autofocus">
             <small class="text-danger" v-if="errors.password">{{ errors.name[0] }}</small>
              <label for="fullName">Full name</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" v-model="form.email" class="form-control" placeholder="Email address"  autofocus="autofocus">
              <small class="text-danger" v-if="errors.password">{{ errors.email[0] }}</small>
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputPassword" v-model="form.password" class="form-control" placeholder="Password" >
              <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
              <label for="inputPassword">Password</label>
            </div>
          </div>
           <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirm Password" v-model="form.password_confirmation" >
            
              <label for="inputConfirmPassword">Confirm Password</label>
            </div>
          </div>
         
          <button type=""submit class="btn btn-primary btn-block">Register</button>
        </form>
        <div class="text-center">
         
         <router-link to="/" class="d-block small mt-3">Already have an Account?</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>



export default{
 created()
  {
    if(User.loggedIn())
    {
      this.$router.push({name:'home'})
    }
  },
  data(){
    return{
      form:{
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors:{}
      
    }
  },
  methods:{
    signup(){
      axios.post('/api/auth/signup',this.form)
      .then(res=>{
        User.responseAfterLogin(res)
        Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
        this.$router.push({name : 'home'})
      
      })
      .catch(error => this.errors = error.response.data.errors)
      
    }
  }
}
</script>
<style>

</style>