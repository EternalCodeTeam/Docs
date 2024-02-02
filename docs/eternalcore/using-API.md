# EternalCore Developer API

As part of open-source community, we support developers who want to create their own plugins using our API. We provide a simple and easy to use API that allows you to create your own plugins using our API.

## 📚 Dependency Management

To use our work in your plugin, You need to install correct artifact for your project. Our plugin supports Maven, Gradle Kotlin, Gradle Groovy and Gradle Groovy and SBT.
To use latest release check [maven repository](https://repo.eternalcode.pl/#/releases/com/eternalcode/eternalcore-api).

### Add repository:

For Gradle:
```groovy
maven {
    url = uri("https://repo.eternalcode.pl/releases")
}
```

For Maven:
```xml
<repository>
    <id>eternalcode-reposilite-releases</id>
    <name>EternalCode Repository</name>
    <url>https://repo.eternalcode.pl/releases</url>
</repository>
```

### Add dependency:

For Gradle:
```groovy
compileOnly("com.eternalcode:eternalcore-api:1.1.0")
```

For Maven:
```xml
<dependency>
    <groupId>com.eternalcode</groupId>
    <artifactId>eternalcore-api</artifactId>
    <version>1.1.0</version>
    <scope>provided</scope>
</dependency>
```

You must also add dependency inside `plugin.yml` file, this is required to load our plugin before your plugin, so they can access our API.
```yaml
depend: [EternalCore]
```

::: danger
:warning: **Remember to add dependency inside `plugin.yml` file, otherwise your plugin will not work!** :warning:
:::

## 📝 Usage
To use our API you need to create instance of `EternalCoreAPI` class. You can do it by using `EternalCoreAPI.getInstance()` method.

```java
EternalCoreAPI eternalCoreAPI = EternalCoreProvider.provide();
```
After creating instance of api, the User gets access to various classes used in our plugin and methods.
Our API includes:

| Class      | Provide method  |
|------------|-----------------|
| AfkService | getAfkService() |


### AfkService usage examples

The User can then use the methods of the given classes to create their own use cases. Here is an example how to obtain instance of `AfkService`:

```java
public class YourPlugin extends JavaPlugin {

    private EternalCoreApi eternalCoreApi; // [!code focus]
    private AfkService afkService; // [!code focus]
    
    @Override
    public onEnable() {
        this.eternalCoreApi = EternalCoreProvider.provide(); // [!code focus]
        this.afkService = eternalCoreApi.getAfkService(); // [!code focus]
    }
}
```

Then pass down the `AfkService` to your classes. After that You can use examples shown below.

Check if the player is Afk by using `AfkService` Example:

```java
if (afkService.isAfk(player.getUniqueId())) {
    // checks if the players is away from keyboard
}
```

Tag player who is not already in the combat using `FightManager` class. Example:

```java
if (!afkService.isAfk(player.getUniqueId)) {
   Afk afkPlayer = afkService.markAfk(player.getUniqueId(), AfkReason.PLUGIN);
        
        //marks player as afk and creates afk instance
}
```

