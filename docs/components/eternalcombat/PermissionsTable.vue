<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
          <th>Command</th>
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
import PermissionsTable from "./PermissionsTable.json";
import { useToast } from "vue-toastification/dist/index.mjs";
import { defineComponent } from "vue";

const toast = useToast();

export default defineComponent({
  name: "PermissionsCommandTable",
  data() {
    return {
      permissions: PermissionsTable.PermissionsTable,
    };
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
