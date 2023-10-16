# EternalCombat API

As part of open-source community, we support developers who want to create their own plugins using our API. We provide a simple and easy to use API that allows you to create your own plugins using our API.

## 📚 Installation

To use our work in your plugin, You need to install correct artifact for your project. Our plugin supports Maven, Gradle Kotlin, Gradle Groovy and Gradle Groovy and SBT.

To use latest release check [our repository](https://repo.eternalcode.pl/#/releases/com/eternalcode/eternalcombat-api).

Maven example:
```xml
<dependency>
  <groupId>com.eternalcode</groupId>
  <artifactId>eternalcombat-api</artifactId>
  <version>1.1.1</version>
</dependency>
```

Copy and paste this code to your `pom.xml` file.

## 📝 Usage

To use our API you need to create instance of `EternalCombatAPI` class. You can do it by using `EternalCombatAPI.getInstance()` method.

NEEDS CHECKING IF IT WORKS
```Java
import com.eternalcode.eternalcombat.api.EternalCombatAPI;
import com.eternalcode.eternalcombat.api.FightTagManager;

public class main {
    EternalCombatAPI api = EternalCombatApi.provide();
    FightManager fightManager = api.getFightManager();
}
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
