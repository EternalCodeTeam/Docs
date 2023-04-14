<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="features in features" :key="features.name">
        <td>{{ features.name }}</td>
        <td>{{ features.descriptions.join(", ") }}</td>
        <td>{{ features.permissions.join(", ") }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'

interface Feature {
  name: string
  permissions: string[]
  descriptions: string[]
}

export default defineComponent({
  data() {
    return {
      features: [] as Feature[],
    }
  },
  async mounted() {
    const url = 'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_features_docs.json'
    try {
      const response = await axios.get(url)
      this.features = response.data
    } catch (error) {
      console.error(error)
    }
  },
})
</script>
