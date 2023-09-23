<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Tags</th>
          <th>Description</th>
          <th>Permissions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tag, key) in tags" :key="key">
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
    <br />
    <p>Other permissions included in plugin</p>
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button @click="copyToClipboard(tag.permission)">
              chatformatter.chat.reload
            </button>
          </td>
          <td>
            Permission to reload the plugin using the /chatformatter reload
            command.
          </td>
        </tr>
        <tr>
          <td>
            <button @click="copyToClipboard(tag.permission)">
              chatformatter.receiveupdates
            </button>
          </td>
          <td>Permission to receive update announcements for this plugin.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import TagsDescPermissions from "./TagsDescPermissions.json";
import { useToast } from "vue-toastification/dist/index.mjs";
import { defineComponent } from "vue";

const toast = useToast();

export default defineComponent({
  name: "PermissionsTable",
  data() {
    return {
      tags: TagsDescPermissions.TagsDescPermissions,
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
