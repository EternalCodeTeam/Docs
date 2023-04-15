<template>
  <div>
    <h2>Features</h2>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Permissions (Click to copy)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="feature in features" :key="feature.name">
        <td>{{ feature.name }}</td>
        <td>{{ feature.descriptions.join(", ") }}</td>
        <td>
          <div>
            <span v-for="(permission, index) in feature.permissions" :key="index" @click="copyToClipboard(permission)">
              <button @click="copyToClipboard(permission)">{{ permission }}</button>
              <span v-if="index < feature.permissions.length - 1">, </span>
            </span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <h2>Commands</h2>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Arguments</th>
        <th>Description</th>
        <th>Permissions (Click to copy)</th>
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
import pkg from 'vue-toastification';

const { useToast } = pkg;

interface Feature {
  name: string
  permissions: string[]
  descriptions: string[]
}

interface Command {
  name: string;
  permissions: string[];
  descriptions: string[];
  arguments: string[];
}

export default defineComponent({
  data() {
    return {
      features: [] as Feature[],
      commands: [] as Command[],
    };
  },
  async mounted() {
    const featuresUrl = 'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_features_docs.json';
    const commandsUrl = 'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_commands_docs.json';

    try {
      const [ featuresResponse, commandsResponse ] = await Promise.all([
        axios.get(featuresUrl),
        axios.get(commandsUrl)
      ]);
      this.features = featuresResponse.data;
      this.commands = commandsResponse.data;
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