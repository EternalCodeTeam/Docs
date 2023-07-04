<script setup>
const name = "EternalCore";
const url = "https://github.com/EternalCodeTeam/EternalCore";
</script>

# You are welcome to contribute to {{ name }}! 🤝

## How to contribute to {{ name }}?

Our repository you can find by checking our [GitHub](https://github.com/EternalCodeTeam) and selecting the project you want to contribute to, in this case: {{name}}.
Or you can just follow this link directly to the <a :href="url" target="_blank" rel="noreferrer">{{name}}</a>.

### Step 1: Fork the repository 🍴
Fork the repository by clicking the "Fork" button on the top, right corner of the page. This will create a copy of the repository in your account.

### Step 2: Clone the repository 🛎️
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button, and then click the copy to clipboard icon.

Open a terminal and run the following git command:
```bash
git clone "url you just copied"
```

### Step 3: Create a branch 🌿
Change to the repository directory on your computer (if you are not already there):

```bash-vue
cd {{ name }}
```

Now create a branch using the git checkout command:
```bash
git checkout -b <your-new-branch-name>
```

### Step 4: Make changes and commit 📝
Now open the project in your favorite code editor and make the required changes. You can use the git status command to check the changes.

Once you have made the changes, commit them.

### Step 5: Push changes to GitHub 📤
Push your changes using the command git push:
```bash
git push origin add-your-branch-name
```

### Step 6: Submit your changes for review 📩
If you go to your repository on GitHub, you will see a Compare & pull request button. Click on that button.

Now submit the pull request. After that, our team will review your code and merge it if it passes the tests.

### Step 7: 🎉 Congratulations! 🎉
You have successfully made a contribution to this project. :>
