<template>

  <a class="social-discord scrollable-place" href="https://discord.gg/FQ7jmGBd6c">
    <img src="/assets/discord.svg" alt="Discord banner image">
  </a>

</template>

<script>
export default {
  name: 'DiscordSocialBlock',
}
</script>

<style scoped>

.social-discord {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 51px;
  border-radius: 10px;
  cursor: pointer;
}

.scrollable-place {
  overflow: hidden;
}

</style>