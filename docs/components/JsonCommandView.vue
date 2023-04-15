<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Arguments</th>
        <th>Description</th>
        <th>Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="command in commands" :key="command.name">
        <td>{{ command.name }}</td>
        <td>{{ command.arguments.join(", ") }}</td>
        <td>{{ command.descriptions.join(", ") }}</td>
        <td>
          <div>
            <span v-for="(permission, index) in command.permissions" :key="index">
              <button @click="copyToClipboard(permission)">{{ permission }}</button>
            </span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Command {
  name: string;
  permissions: string[];
  descriptions: string[];
  arguments: string[];
}

export default defineComponent({
  data() {
    return {
      commands: [] as Command[],
    };
  },
  async mounted() {
    const url =
        'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_commands_docs.json';
    try {
      const response = await axios.get(url);
      this.commands = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async copyToClipboard(text: string) {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
      } catch (error) {
        console.error('Failed to copy text: ', error);
      }
    },
  },
});
</script>