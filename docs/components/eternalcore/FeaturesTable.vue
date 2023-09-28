<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="feature in features" :key="feature.name">
        <td>{{ feature.name }}</td>
        <td>{{ feature.descriptions.join(", ") }}</td>
        <td>
          <div>
            <button
              v-for="(permission, index) in feature.permissions"
              :key="index"
              @click="copyToClipboard(permission)">
              {{ permission }}
              <span v-if="index < feature.permissions.length - 1">, </span>
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
import pkg from 'vue-toast-notification/dist/index.min.js';
const { useToast } = pkg;

interface Feature {
  name: string;
  permissions: string[];
  descriptions: string[];
}

export default defineComponent({
  name: "FeaturesTable",
  data() {
    return {
      features: [] as Feature[],
    };
  },
  async mounted() {
    const featuresUrl =
      "https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/HEAD/raw_features_docs.json";

    try {
      const featuresResponse = await axios.get(featuresUrl);
      this.features = featuresResponse.data;
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