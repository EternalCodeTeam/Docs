<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Permissions</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="command in commands" :key="command.name">
        <td>{{ command.name }}</td>
        <td>{{ command.permissions.join(", ") }}</td>
        <td>{{ command.descriptions.join(", ") }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'

interface Command {
  name: string
  permissions: string[]
  descriptions: string[]
}

export default defineComponent({
  data() {
    return {
      commands: [] as Command[],
    }
  },
  async mounted() {
    const url = 'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_commands_docs.json' // Link do pliku JSON
    try {
      const response = await axios.get(url)
      this.commands = response.data
    } catch (error) {
      console.error(error)
    }
  },
})
</script>
