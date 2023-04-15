<script setup>
  import FeaturesTable from '../components/FeaturesTable.vue';
  import CommandsTable from '../components/CommandsTable.vue';
</script>

# 🔥🚀😎 All EternalCore Commands and Features 

## 🌟 All EternalCore Features 
<FeaturesTable />

## 🤖👨‍💻💬 All EternalCore Commands 
<CommandsTable />

## 🧙‍♂️📝 The magic docs system for developers 
::: tip
If you are developer, you can use our docs system in your [PR's! 😍🙌](https://github.com/EternalCodeTeam/EternalCore/compare)
:::

Docs system is a tool that allows developers to place information about their code directly into the source file using
annotations. These annotations are then processed by the system and converted into JSON files that can be used to create
a graphical documentation of the project. 🤓💻📚

::: code-group
```java{12-19,1-8} [Standard feature]
@FeatureDocs(
    name = "ExampleFeatureDocsService", // Name of feature
    permission = "example.feature.docs.service", // If feature has permission, please add it here
    description = { // Short description of feature
        "Creates a PackageStack from a package.",
        "Returns a PackageStack."
    }
)
class ExampleFeatureDocsService {
    
    
    @FeatureDocs(
        name = "ExampleFeatureDocs", // Name of feature 
        permission = "example.feature.docs.service.exampleMethod", // If feature has permission, please add it here
        description = { // Short description of feature
            "This is a description of the feature",
            "This is a description of the feature"
        }
    )
    public void exampleMethod() {} 
    
    public void exampleMethod2() {}
}
```

```java{2,8-9,14,20} [LiteCommands Standard]
@Route(name = "tpa", aliases = { "tprequest" }) 
// ^^^ see https://docs.rollczi.dev/documentation/litecommands/features/route-and-execute for more information
@Permission("eternalcore.tpa")
public class TpaCommand {

    @Execute
    @Permission("eternalcore.tpa.send")
    @DocsDescription(description = "Sends tpa request", arguments = "<player>") 
    // ^^^ Description of command and if command has arguments, please add it here
    public void send(@Arg String player) {}

    @Execute(route = "accept")
    @Permission("eternalcore.tpa.accept")
    @DocsDescription(description = "Accepts tpa request") // Description of command without arguments
    public void accept() {}


    @Execute(route = "deny")
    @Permission("eternalcore.tpa.deny")
    @DocsDescription(description = "Denies tpa request") // Description of command without arguments
    public void deny() {}

}
```

```java{2,9,15-16} [LiteCommands with @RootRoute usage]
@RootRoute 
// ^^^ see https://docs.rollczi.dev/documentation/litecommands/features/root-route for more information
@Permission("permissions.root")
@Permission("permissions.root2")
public class RootTestCommand {

    @Execute(route = "test-root")
    @Permission("permissions.root.execute")
    @DocsDescription(description = "This is descriptions") // Description of command without arguments
    public void execute() {}


    @Execute(route = "test-root other")
    @Permission("permissions.root.execute.other")
    @DocsDescription(description = "This is descriptions", arguments = "<player>") 
    // ^^^ Description of command and if command has arguments, please add it here
    public void executeOther(@Arg Player player) {}

}
```
:::

If you need more information, search for [@FeatureDocs](https://github.com/search?q=repo%3AEternalCodeTeam%2FEternalCore%20%40FeatureDocs&type=code) and [@DocsDescription](https://github.com/search?q=repo%3AEternalCodeTeam%2FEternalCore+%40DocsDescription&type=code) annotations in our repository.
