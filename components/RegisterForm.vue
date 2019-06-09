<template>
  <div id="signup" class="section">
    <div class="container">
      <div class="section-title text-center">
        <h3>Start your free trial</h3>
        <p>Signup now. Its free and takes less than 3 minutes</p>
      </div>
      <div class="row justify-content-md-center">
        <div class="col col-md-5">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Full Name" />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-xl btn-block btn-primary">
                GET STARTED FOR FREE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.form-control {
  height: 50px;
  border-radius: 30px;
  padding: 5px 20px;
  height: 55px;
  border-color: #ebebed;
  box-shadow: 0 0 5px rgba(38, 38, 76, 0.05);
}

.btn-block {
  padding: 15px 0;
}
</style>
