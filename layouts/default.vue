<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: 'http://www.codotype.io/',
      name: 'Codotype',
      author: {
        '@type': 'Person',
        name: 'Alexander Schwartzberg'
      },
      description: 'Configurable starter code for the modern web',
      publisher: 'Codotype.io'
    }
  },
  head() {
    return {
      title: 'Codotype - Loading...',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  mounted() {
    this.setupMailchimpPopup(process)
  },
  methods: {
    setupMailchimpPopup(process) {
      // Pull Mailchimp variables from process.env
      // const { MAILCHIMP_BASE_URL, MAILCHIMP_UUID, MAILCHIMP_LID } = process.env
      const { MAILCHIMP_BASE_URL, MAILCHIMP_UUID, MAILCHIMP_LID } = process.env

      // Short circuit if the required env variables aren't available
      if (!MAILCHIMP_BASE_URL || !MAILCHIMP_UUID || !MAILCHIMP_LID) return

      /* eslint-disable */

      // Add Mailchimp popup loader script
      const chimpPopupLoader = document.createElement("script")
      chimpPopupLoader.src = '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js'
      chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')

      // Load Mailchimp signup form script
      const chimpPopup = document.createElement("script")
      chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  MAILCHIMP_BASE_URL + '", "uuid": "' + MAILCHIMP_UUID + '", "lid": "' + MAILCHIMP_LID + '"})});'));

      // Add the Mailchimp loader when the page loads
      chimpPopupLoader.onload = function() {
        document.body.appendChild(chimpPopup)
      }

      document.body.appendChild(chimpPopupLoader)
    }
  }
}
</script>
