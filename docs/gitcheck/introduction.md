# GitCheck wiki's
* [Features and Usage](features.md)

# 📩❗️ Installation of GitCheck

## 🐘 Installation for Gradle builds

For projects based on Gradle add the following to your build.gradle file:

``` java
maven { url = uri("https://repo.eternalcode.pl/releases") }
```
``` java
implementation("com.eternalcode:gitcheck:1.0.0")
```
After that, you can use GitCheck in your project.

## 🪶 Installation for Maven builds

For projects based on Maven add the following to your pom.xml file:

```xml
<repository>
    <id>eternalcode-releases</id>
    <url>https://repo.eternalcode.pl/releases</url>
</repository>
```

```xml
<dependency>
    <groupId>com.eternalcode</groupId>
    <artifactId>gitcheck</artifactId>
    <version>1.0.0</version>
</dependency>
```

After that, you can use GitCheck in your project.



