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
      <tr v-for="feature in features" :key="feature.name">
        <td>{{ feature.name }}</td>
        <td>{{ feature.descriptions.join(", ") }}</td>
        <td>
          <div>
            <span v-for="(permission, index) in feature.permissions" :key="index" @click="copyToClipboard(permission)">
              <button @click="copyToClipboard(permission)">{{ permission }}</button>
              <span v-if="index < feature.permissions.length - 1">, </span>
            </span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification/dist/index.mjs'

const toast = useToast();

interface Feature {
  name: string
  permissions: string[]
  descriptions: string[]
}

export default defineComponent({
  data() {
    return {
      features: [] as Feature[],
    };
  },
  async mounted() {
    const featuresUrl = 'https://raw.githubusercontent.com/EternalCodeTeam/EternalCore/setup-auto-docs-system/raw_features_docs.json';

    try {
      const featuresResponse = await axios.get(featuresUrl);
      this.features = featuresResponse.data;
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
          rtl: false
        });
      } catch (error) {
        console.error('Failed to copy text: ', error);
      }
    },
  },
});
</script>
