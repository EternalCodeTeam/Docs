<script setup>
import DiscordSocialBlock from "./DiscordSocialBlock.vue";</script>

<template>
  <div class="socialblock">

    <div class="socialblock-info">
      <p>
        If you have any questions, feel free to join our Discord server and ask
        there.
      </p>
    </div>

    <DiscordSocialBlock/>
  </div>

</template>

<script>
export default {
  name: "SocialBlock",
};
</script>

<style scoped>

.socialblock {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 20px;
}

.socialblock-info {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.15em;
}
</style>