<template>
  <div>
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
              <button
                v-for="(permission, index) in command.permissions"
                :key="index"
                @click="copyToClipboard(permission)">
                {{ permission }}
                <span v-if="index < command.permissions.length - 1">, </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import * as pkg from "vue-toast-notification";
const { useToast } = pkg;

interface Command {
  name: string;
  permissions: string[];
  descriptions: string[];
  arguments: string[];
}

export default defineComponent({
  name: "CommandsTable",
  data(): { commands: Command[] } {
    return {
      commands: [] as Command[],
    };
  },
  async mounted() {
    const commandsUrl =
      "https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/HEAD/raw_commands_docs.json";

    try {
      const commandsResponse = await axios.get(commandsUrl);
      this.commands = commandsResponse.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async copyToClipboard(text: string) {
      if (typeof text !== "string") {
        throw new Error("The 'text' parameter must be a string.");
      }

      const $toast = useToast();

      try {
        await navigator.clipboard.writeText(text);
        $toast.success("Copied permission to clipboard!");
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    },
  },
});
</script>
