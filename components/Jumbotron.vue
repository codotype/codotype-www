<template>
  <section class="jumbotron-two">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-5">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="display-3">{{ title }}</h1>
            </div>
          </div>
          <h1 class="display-5">{{ subtitle }}</h1>

          <p class="text-muted mb-3">{{ body }}</p>

          <div class="row py-2">
            <div class="col-lg-12 d-flex flex-column">
              <!-- <p> -->
              <!-- <a href="#generators" class="btn btn-xl btn-outline-primary"> -->
              <!-- Tell me more -->
              <!-- </a> -->
              <!-- </p> -->
              <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-7 my-3 my-md-lg">
          <div class="card-deck">
            <GeneratorCard :model="generators[0]" />
            <GeneratorCard :model="generators[1]" />
          </div>

          <div class="row mt-4 d-flex justify-content-center">
            <div class="col-lg-6">
              <b-button
                to="/generators"
                size="lg"
                variant="outline-primary"
                block
              >
                Browse Generators
              </b-button>
            </div>
          </div>
          <!-- <div
            class="youtube cast-shadow"
            data-video-id="rm5sdAYCqqc"
            data-params="modestbranding=1&amp;showinfo=0&amp;controls=1&amp;vq=hd720"
          >
            <img
              src="~assets/images/codotype-dashboard-01.png"
              alt="image"
              class="img-fluid"
            />
            <div class="play">
              <span class="pe-7s-play pe-3x"></span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GeneratorCard from './GeneratorCard.vue'
import generators from '~/assets/content/generators.json'

export default {
  name: 'Jumbotron',
  components: {
    GeneratorCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      generators
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

.jumbotron {
  width: 100%;
  background-color: transparent;
  margin-bottom: 0;
  @include media-breakpoint-up(sm) {
    padding: 2rem 0;
    &.sub-page {
      padding: 0 0 2rem 0;
    }
  }
  &.sub-page {
    min-height: 290px;
    background: #f8faff;
  }
  .lead {
    max-width: 600px;
    margin: auto;
  }
  .btn-lg {
    padding: 17px 35px;
  }
  .btn {
    margin: 10px;
  }
}

.jumbotron-two {
  padding: 2rem 0;
  .lead {
    max-width: 500px;
    margin: 0;
  }
}

// /*-----------------------------------
//  * YOUTUBE VIDEO
//  *-----------------------------------*/

iframe {
  display: block;
}

.youtube {
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  transition: all 200ms ease-out;
  cursor: pointer;
}

.youtube .play {
  background: #fff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 9px 68px 0px rgba(62, 57, 107, 0.2);
  text-align: center;
  padding: 17px 20px;
  span {
    color: $brand-primary;
  }
}

.bg-video video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  // background: url('../images/agency/poster.jpg') no-repeat;
  background-size: cover;
  transition: 1s opacity;
}

.bg-video.align-bottom video {
  top: auto;
  bottom: 0;
  transform: translateX(-50%) translateY(0);
}
</style>
