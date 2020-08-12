import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMailBulk, faUsers, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPython, faCss3, faGit, faJs, faTwitter, faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faCoffee,
  faUsers,
  faMailBulk,
  faPython,
  faCss3,
  faHtml5,
  faGit,
  faJs,
  faTwitter,
  faGithub
)
// library.add(fas)

Vue.component('fa-icon', FontAwesomeIcon)
