<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Permission (Click to copy)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(permission, key) in permissions" :key="key">
          <td>{{ permission.command }}</td>
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
import PermissionTable from "./PermissionsTable.json";
import * as pkg from "vue-toast-notification";
const { useToast } = pkg;

interface Permission {
  command: string;
  description: string;
  permission: string;
}

export default defineComponent({
  data(): { permissions: Permission[] } {
    return {
      permissions: PermissionTable.PermissionsTable,
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
