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
import { useToast } from "vue-toast-notification";
import ColorTable from "./ColorTable.json";

interface Color {
  tags: string;
  description: string;
  permission: string;
}

export default defineComponent({
  name: "ColorTable",
  data(): { colors: Color[] } {
    return {
      colors: ColorTable.ColorsTable,
    };
  },
  setup() {
    const $toast = useToast();
    return { $toast };
  },
  methods: {
    async copyToClipboard(text: string) {
      if (typeof text !== "string") {
        throw new Error("The 'text' parameter must be a string.");
      }

      try {
        await navigator.clipboard.writeText(text);
        this.$toast.success("Copied permission to clipboard!");
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    },
  },
});
</script>
