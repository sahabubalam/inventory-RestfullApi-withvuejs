<template>
<div>
     <div class="container">
     <div class="card card-login mx-auto mt-5">
      <div class="card-header">Register a new account</div>
      <div class="card-body">
        <form>
         <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="fullName" class="form-control" placeholder="Full name" required="required" autofocus="autofocus">
              <label for="fullName">Full name</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus">
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required">
              <label for="inputPassword">Password</label>
            </div>
          </div>
           <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="Re-type Password" required="required">
              <label for="inputPassword">Confirm Password</label>
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
</script>
<style>

</style>