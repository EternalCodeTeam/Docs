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
              <span
                v-for="(permission, index) in command.permissions"
                :key="index">
                <button @click="copyToClipboard(permission)">
                  {{ permission }}
                </button>
                <span v-if="index < command.permissions.length - 1">, </span>
              </span>
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
import { useToast } from "vue-toastification/dist/index.mjs";

const toast = useToast();

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
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Successfully copied permission!", {
          position: "bottom-right",
          timeout: 1029,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    },
  },
});
</script>
