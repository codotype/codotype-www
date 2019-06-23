<template>
  <div class="section bg-grey">
    <div class="container">
      <div class="section-title text-center">
        <h3>What our users say</h3>
        <p>They love it. Read what our customers had to say!</p>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="embed-tweet-item">
            <blockquote
              class="twitter-tweet"
              data-cards="hidden"
              lang="en"
              data-width="550"
              data-link-color="#7642FF"
              data-align="center"
            >
              <a href="https://twitter.com/kmin/status/943914224329347072"></a>
            </blockquote>
          </div>
        </div>
        <div class="col-md-4">
          <div class="embed-tweet-item">
            <blockquote
              class="twitter-tweet"
              data-cards="hidden"
              lang="en"
              data-width="550"
              data-link-color="#7642FF"
              data-align="center"
            >
              <a
                href="https://twitter.com/halarewich/status/954224121784688640"
              >
              </a>
            </blockquote>
          </div>
        </div>
        <div class="col-md-4">
          <div class="embed-tweet-item">
            <blockquote
              class="twitter-tweet"
              data-cards="hidden"
              lang="en"
              data-width="550"
              data-link-color="#7642FF"
              data-align="center"
            >
              <a
                href="https://twitter.com/scottbelsky/status/921417663859052544"
              >
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials'
}
</script>

<style lang="scss">
@import '@/assets/sass/main.sass';

.embed_twitter iframe {
  margin: 0 auto !important;
}

.embed-tweet-item {
  min-height: 200px;
  margin-bottom: 20px;
}

.EmbeddedTweet {
  height: 200px !important;
}

.embed-tweet-item {
  width: 100%;
  blockquote {
    width: 100%;
    min-height: 200px;
    // background: url(../images/twitter-placeholder.png) no-repeat center top;
    background-size: contain;
    border: none;
  }
}
</style>
