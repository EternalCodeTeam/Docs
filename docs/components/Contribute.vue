<template>
  <div>
    <h1>You are welcome to contribute to our project! 🤝</h1>
    <h2>📝 How to contribute to {{ name }}?</h2>
    <p>
      Our repository you can find by checking our <a href="https://github.com/EternalCodeTeam">GitHub</a> and selecting
      the project
      you want to contribute to.
      Or you can access this repository directly, by clicking on the project name here:
      <a :href='`https://github.com/EternalCodeTeam/${name}`' target="_blank">{{ name }}</a>
    </p>
    <h3> Step 1: Fork the repository 🍴 </h3>
    <p>
      Fork the repository by clicking the "Fork" button on the top, right corner of the page. This will create a copy of
      the repository in your account.
    </p>
    <h3> Step 2: Clone the repository 🛎️ </h3>
    <p>
      Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on
      the
      code button and then click the copy to clipboard icon.
    </p>
    <p>
      Open a terminal and run the following git command:
    </p>
    <code>
      git clone "url you just copied"
    </code>
    <h3>Step 3: Create a branch 🌿</h3>
    <p>
      Change to the repository directory on your computer (if you are not already there):
    </p>
    <code class="language-bash">
      ```bash
      cd {{ name }}
      ```
    </code>
    <p>
      Now create a branch using the `git checkout` command:
    </p>
    <code>
      git checkout -b
      your-new-branch-name
    </code>

    <h3> Step 4: Make changes and commit 📝 </h3>
    <p>
      Now open the project in your favorite code editor and make the required changes. You can use the `git status`
      command to check the changes.
    </p>
    <p>
      Once you have made the changes, commit them.
    </p>
    <h3> Step 5: Push changes to GitHub 📤 </h3>
    <p>
      Push your changes using the command `git push`:
    </p>
    <code class="language-bash">
      git push origin
      add-your-branch-name
    </code>
    <h3> Step 6: Submit your changes for review 📩 </h3>
    <p>
      If you go to your repository on GitHub, you will see a `Compare & pull request` button. Click on that button.
    </p>
    <p>
      Now submit the pull request. After that our team will review your code and merge it if it passes the tests.
    </p>
    <h3> Step 7: 🎉 Congratulations! 🎉 </h3>
    <p>
      You have successfully made a contribution to this project. :>
    </p>

  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Contribute",
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

</style>