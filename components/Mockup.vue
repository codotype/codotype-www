<template>
  <div id="features" class="section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-8">
          <div class="browser-window limit-height my-5 mr-0 mr-sm-5">
            <div class="top-bar">
              <div class="circles">
                <div class="circle circle-red"></div>
                <div class="circle circle-yellow"></div>
                <div class="circle circle-blue"></div>
              </div>
            </div>
            <div class="content">
              <img
                src="~assets/images/codotype-schema-editor.png"
                alt="image"
              />
            </div>
          </div>
          <img
            src="images/codotype-dashboard-02.png"
            alt="image"
            class="img-fluid cast-shadow my-5"
          />
        </div>
        <div class="col-sm-4">
          <div class="media">
            <div class="media-body">
              <div class="media-icon mb-3">
                <font-awesome-icon
                  icon="heart"
                  class="text-primary"
                  size="2x"
                />
              </div>
              <h3 class="mt-0">Powerful Code Generation</h3>
              <p>
                Reprehenderit nemo quod tempore doloribus ratione distinctio
                quis quidem vitae sunt reiciendis, molestias omnis soluta?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row align-items-center mt-5">
        <div class="col-sm-4">
          <div class="media">
            <div class="media-body">
              <div class="media-icon mb-3">
                <font-awesome-icon
                  icon="heart"
                  class="text-primary"
                  size="2x"
                />
              </div>
              <h3 class="mt-0">Charts, Diagrams & more</h3>
              <p>
                Reprehenderit nemo quod tempore doloribus ratione distinctio
                quis quidem vitae sunt reiciendis, molestias omnis soluta?
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-8">
          <img
            src="~assets/images/codotype-dashboard-01.png"
            alt="image"
            class="img-fluid cast-shadow my-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mockup'
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.browser-window {
  display: inline-block;
  text-align: left;
  min-height: 200px;
  max-width: 100%;
  border-radius: 5px;
  background-color: #f1f3f5;
  box-shadow: 0 19px 38px rgba(137, 149, 199, 0.15),
    0 15px 12px rgba(137, 149, 199, 0.08);
  margin-bottom: 60px;
  overflow: hidden;
  &.limit-height {
    max-height: 500px;
  }
  .top-bar {
    height: 40px;
    border-radius: 5px 5px 0 0;
    border-top: thin solid #f1f3f5;
    border-bottom: thin solid #f1f3f5;
    background: rgb(248, 250, 255);
    width: 100%;
  }
  .circle {
    height: 13px;
    width: 13px;
    margin-right: 5px;
    display: inline-block;
    border-radius: 50%;
    background-color: #fff;
  }
  .circles {
    margin: 12px 12px;
  }
  .content {
    display: inline-block;
    margin: 0;
    border-radius: 0 0 5px 5px;
    background-color: #fafafa;
    max-height: 500px;
  }
  .content img {
    max-width: 100%;
    height: auto;
  }
  .circle-red {
    background: #fbbbf5;
  }
  .circle-yellow {
    background: #f8e397;
  }
  .circle-blue {
    background: #79cfd5;
  }
}

.cast-shadow {
  border-radius: 10px;
  box-shadow: 0px 9px 68px 0px rgba(62, 57, 107, 0.2);
}

.media-icon i {
  min-width: 50px;
  color: $brand-primary;
}

.color-icon i {
  color: $brand-primary;
}
</style>
