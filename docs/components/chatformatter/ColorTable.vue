<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Color</th>
        <th>Description</th>
        <th>Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(tag, key) in colors" :key="key">
        <td>{{ tag.tags }}</td>
        <td>{{ tag.description }}</td>
        <td>
          <button @click="copyToClipboard(tag.permission)">{{ tag.permission }}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import ColorTable from "./ColorTable.json";
import {useToast} from "vue-toastification/dist/index.mjs";
import {defineComponent} from "vue";

const toast = useToast();

export default defineComponent({
  name: "PermissionsTable",
  data() {
    return {
      colors: ColorTable.ColorsTable
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
          rtl: false
        });
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    },
  },
});
</script>
<style scoped>

</style>