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
        <tr v-for="permission in permissions" :key="permission">
          <td>{{ permission.tags }}</td>
          <td>{{ permission.description }}</td>
          <td>
            <button @click="copyToClipboard(permission.permission)">
              {{ permission.permission }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagsDescPermissions from "./TagsDescPermissions.json";
import * as pkg from "vue-toast-notification";
const { useToast } = pkg;

interface Permission {
  tags: string;
  description: string;
  permission: string;
}

export default defineComponent({
  data() {
    return {
      permissions: TagsDescPermissions.TagsDescPermissions,
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
