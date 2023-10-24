# EternalCombat API

As part of open-source community, we support developers who want to create their own plugins using our API. We provide a simple and easy to use API that allows you to create your own plugins using our API.

## 📚 Installation

To use our work in your plugin, You need to install correct artifact for your project. Our plugin supports Maven, Gradle Kotlin, Gradle Groovy and Gradle Groovy and SBT.
To use latest release check [maven repository](https://repo.eternalcode.pl/#/releases/com/eternalcode/eternalcombat-api).

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
compileOnly("com.eternalcode:eternalcombat-api:1.1.1")
```

For Maven:
```xml
<dependency>
    <groupId>com.eternalcode</groupId>
    <artifactId>eternalcombat-api</artifactId>
    <version>1.1.1</version>
    <scope>provided</scope>
</dependency>
```

You must also add dependency inside `plugin.yml` file, this is required to load our plugin before your plugin, so they can access our API.
```yaml
depend: [EternalCombat]
```

::: danger
:warning: **Remember to add dependency inside `plugin.yml` file, otherwise your plugin will not work!** :warning:
:::

## 📝 Usage
To use our API you need to create instance of `EternalCombatAPI` class. You can do it by using `EternalCombatAPI.getInstance()` method.

```java
EternalCombatAPI api = EternalCombatAPI.provide();
```

after creating instance of api, the User gets access to various classes used in our plugin and methods.
Our API includes:

| Class | Provide method                |
| --- |:------------------------------|
| FightManager | getFightManager()             |
| RegionProvider | getRegionProvider()           |
| FightPearlManager | getFightPearlManager()        |
| FightTagOutService | getFightTagOutService()       |
| FightEffectService | getFightEffectService()       |
| DropManager | getDropManager()              |
| DropKeepInventoryManager | getDropKeepInventoryManager() |
| PluginConfig | getPluginConfig()             |


The User can then use the methods of the given classes to create their own features. Here is an example of using the `FightManager` class:

```java
private EternalCombatApi eternalCombatApi;
private EternalCombatProvider eternalCombatProvider;

this.eternalCombatApi = eternalCombatProvider.provide();
FightManager fightManager = this.eternalCombatApi.getFightManager();

if (fightManager.isInCombat(uuID)) {
    server.getPlayer(uuID).sendMessage("You are in combat!");
}
```

## Event base API

Our plugin supports two types of events. 
The first type is the `FightTagEvent` that is called when the player enters the fight or extends duration of the fight. 
The second type is the `FightUnTagEvent` that is called when the player leaves the fight.

You can access both event types by using EventListeners.

```java
@EventHandler
void onTag(FightUntagEvent event) {
    CauseOfUnTag cause = event.getCause();
    
    if (cause == CauseOfUnTag.DEATH) {
        server.getPlayer(event.getPlayer()).sendMessage("You died!");
    }
}
```
