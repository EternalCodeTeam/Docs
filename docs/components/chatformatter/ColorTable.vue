<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Permissions (Click to copy)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tag in colors" :key="tag.tags">
          <td>{{ tag.tags }}</td>
          <td>{{ tag.description }}</td>
          <td>
            <button @click="copyToClipboard(tag.permission)">
              {{ tag.permission }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorTable from "./ColorTable.json";
import * as pkg from "vue-toast-notification";
const { useToast } = pkg;

interface Color {
  tags: string;
  description: string;
  permission: string;
}

export default defineComponent({
  data(): { colors: Color[] } {
    return {
      colors: ColorTable.ColorsTable,
    };
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
