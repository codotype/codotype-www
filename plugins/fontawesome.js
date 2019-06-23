import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub, faOsi } from '@fortawesome/free-brands-svg-icons'
import {
  faBook,
  faCog,
  faArrowRight,
  faChevronRight,
  faDollarSign,
  faHeart,
  faInfoCircle,
  faQuestionCircle,
  faShippingFast,
  faTimes,
  faProjectDiagram,
  faTasks
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// Doc: https://github.com/FortAwesome/vue-fontawesome

// FontAwesome Core Icons
library.add(faBook)
library.add(faCog)
library.add(faArrowRight)
library.add(faChevronRight)
library.add(faDollarSign)
library.add(faHeart)
library.add(faInfoCircle)
library.add(faQuestionCircle)
library.add(faShippingFast)
library.add(faTimes)
library.add(faProjectDiagram)
library.add(faTasks)

// FontAwesome Brand Icons
library.add(faTwitter)
library.add(faGithub)
library.add(faOsi)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
