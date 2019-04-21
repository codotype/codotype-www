// Doc: https://nuxtjs.org/faq/google-analytics/

/* eslint-disable */

export default ({ app }) => {
  // Only run on client-side and only in production mode
  if (process.env.NODE_ENV !== 'production') return

  // Short circuit if the required env variables aren't available
  if (!process.env.MAILCHIMP_BASE_URL || !process.env.MAILCHIMP_UUID || !process.env.MAILCHIMP_LID) return

  // Pull Mailchimp variables from process.env
  const { MAILCHIMP_BASE_URL, MAILCHIMP_UUID, MAILCHIMP_LID } = process.env

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
