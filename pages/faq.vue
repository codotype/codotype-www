<template>
  <section class="container">
    <b-row class="mt-3 mb-5">
      <b-col sm="12">
        <h2 class="mb-0">{{ title }}</h2>
        <p class="text-muted">
          {{ subtitle }}
        </p>
      </b-col>

      <b-col sm="12">
        <b-row sm="12">
          <b-col class="mb-2">
            <div
              v-for="faq in faqs"
              :key="faq.question"
              class="card card-body border-light shadow-sm mb-3"
            >
              <b-row class="row">
                <b-col sm="12">
                  <p class="lead mb-0 w-100">
                    {{ faq.question }}
                  </p>
                </b-col>
                <b-col sm="12" class="mt-2">
                  <p class="card-text mb-2" v-html="faq.answer"></p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
/* eslint-disable */
import { createClient } from '~/plugins/contentful.js'
import { getPageMeta } from '~/assets/meta.js'

const client = createClient()

export default {
  async asyncData({ env }) {
    try {
      const response = await client.getEntries({
        content_type: 'faqPage'
      })

      // Isolates data from Contentful response
      const { fields } = response.items[0]
      const title = fields.title
      const subtitle = fields.subtitle
      const faqs = fields.faqs.map(i => i.fields)

      return { title, subtitle, faqs }
    } catch (e) {
      console.error(e)
    }
  },
  head() {
    return {
      title: 'Codotype - FAQ',
      meta: getPageMeta({})
    }
  }
}
</script>
