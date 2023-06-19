# Features and Usage

## 💫 Features

- Simple and easy-to-use API
- Lightweight and efficient
- Supports Java 9 and above
- Utilizes the GitHub API for retrieving release information


## 💯 API Usage

To use GitCheck, you need to create an instance of the `GitCheck` class. Create `GitRepository` and `GitTag` objects to specify the repository and the current version of your application. Then, call the `checkRelease` method to check for updates.

```java
public class MyApplication {

    public static void main(String[] args) {
        GitCheck gitCheck = new GitCheck();
        GitRepository repository = GitRepository.of("Owner", "Project");

        GitCheckResult result = gitCheck.checkRelease(repository, GitTag.of("v1.0.0"));

        if (!result.isUpToDate()) {
            GitRelease release = result.getLatestRelease();
            GitTag tag = release.getTag();

            System.out.println("A new version is available: " + tag.getTag());
            System.out.println("See release page: " + release.getPageUrl());
            System.out.println("Release date: " + release.getPublishedAt());
        }
        
        // ...
    }

}
```
In this example, `GitCheck` is used to check for updates to the repository `Owner/Project` with the current version `v1.0.0`. If a new version is available, the details of the release are printed to the console.