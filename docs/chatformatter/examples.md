# Tips and useful links

## 🌐 Web UI

We highly recommend using web interface for MiniMessage formatting. Website below contains many styles for your Minecraft messages. Check them out yourself by clicking the link below: 

[MiniMessage Viewer](https://webui.advntr.dev/)

![MiniMessage Viewer](/assets/chatformatter/example1.png)


## ✍️ Standard formatting and examples

Our plugin allows users to create custom styles for messages sent inside Minecraft chat. You can read the documentation for standard formats down below:

[Formats and styles for MiniMessage](https://docs.advntr.dev/minimessage/format.html)

![Example for transition](/assets/chatformatter/example2.png)

## 📚 Example configuration

One of our discord members created amazing configuration for chatformatter. Created by @pfandleiher. Check it out below:

```yaml
#    ____ _           _   _____      ChatFormatter       _   _            
#   / ___| |__   __ _| |_|  ___|__  _ __ _ __ ___   __ _| |_| |_ ___ _ __ 
#  | |   | '_ \ / _` | __| |_ / _ \| '__| '_ ` _ \ / _` | __| __/ _ \ '__|
#  | |___| | | | (_| | |_|  _| (_) | |  | | | | | | (_| | |_| ||  __/ |   
#   \____|_| |_|\__,_|\__|_|  \___/|_|  |_| |_| |_|\__,_|\__|\__\___|_|   


# Do you want to receive updates about new versions of ChatFormatter?
receiveUpdates: true

# Chat format for ranks (Vault) Support mini-messages and legacy colors

# We're recommending to use webui for mini-messages: https://webui.adventure.kyori.net/

# documentation is here: https://docs.adventure.kyori.net/minimessage/format.html

# You can check LuckPerms setup and placeholders here: https://luckperms.net/wiki/Placeholders
# 
# Example usages:
# 
# Hover message:
# One line: <hover:show_text:'<red>test'>TEST
# Multiple lines: <hover:show_text:'<red>test'>Test<newline>Test2</hover>
# 
# Click message:
# Open URL: <click:open_url:'https://webui.adventure.kyori.net'>TEST</click>
# Run command: <click:run_command:/say hello>Click</click> to say hello
# Suggest command: <click:suggest_command:'/msg {displayname}'></click>
# 
# RGB and gradient message usage: 
# <color:#ff00ee>Example message</color>
# <gradient:#ff00ee:#f79459>Example message</gradient>
# 
# You can use three more internal placeholders: <displayname> <name> <message>
# 
defaultFormat: "$hoverWorld({world}) $hoverRank({player_rank}) &7| $hoverName({displayname})&r: $hoverChat({message})"

# Here you can set different formats for each rank.
# Remember! Rank name must be exactly the same as in you permission plugin configuration.
# If player have more than one rank remember to correctly setup rank weight configuration
format:
  vip: "{vip} &f$hoverName({displayname}) <dark_gray>» <gradient:#ffd270:white>{message}"
  mod: "{mod} &f$hoverName({displayname}) <dark_gray>» <gradient:#a3ff9e:white>{message}"
  admin: "{admin} &f$hoverName({displayname}) <dark_gray>» <gradient:#bac8ff:white><b>{message}"
  owner: "{owner} &f$hoverName({displayname}) <dark_gray>» <gradient:#ff9195:white><b>{message}"

# Placeholders, it allows you to make a shorter text, you can use some prefixes, characters etc. 
# You can use here PAPI placeholders.
placeholders:
  {world}: "%multiverse_world_name_colored%"
  {world_info}: "%multiverse_world_name_colored% %multiverse_world_color%%multiverse_world_name%"
  {rank}: "%luckperms_prefix%"
  {rank_info}: "&#00bbffPlayer Ranking\n&7Calculated based on:\n▪&#22c55e ⛏ In-game statistics\n&7▪&#ef4444 🗡 PvP stats\n&7▪&#ec4899 ⌚ Play Time\n\n&#f97316» &7Click to open Leaderboard"
  {displayname}: "<displayname>"
  {name}: "<name>"
  {player_info}: "&#00bbffPlayer Info &7» %luckperms_meta_ucolor%<name> &7(&#7cd3fc#%minetrax_player_id%&7)\n&7Joined %minetrax_player_first_seen_at%\n\n&#22c55e⭐ Position: &f#%minetrax_player_position%\n&#ef4444🗡 Kills: &f%minetrax_player_total_player_kills%\n&7☠ Deaths: &f%minetrax_player_total_deaths%\n\n&#f97316» &7Click to send private message"
  {message}: "<message>"
  {report_message}: "&4» &cReport <displayname>"

# This section is made for experienced users
# It is used to shorten the text even more and keep the clean file!
templates:
  - "$hoverWorld($world) -> '<hover:show_text:'{world_info}'>{world}</hover>'"
  - "$hoverRank($rank) -> '<hover:show_text:'{rank_info}'><click:open_url:'https://rockg.de/stats'>{rank}</click></hover>'"
  - "$hoverName($name) -> '<hover:show_text:'{player_info}'><click:suggest_command:'/msg {displayname} '>{displayname}</click></hover>'"
  - "$hoverChat($chat) -> '<hover:show_text:'{report_message}'><click:suggest_command:'/report {displayname} '>{message}</click></hover>'"
```

In game examples:
```yaml
"&#00bbffPlayer Ranking\n&7Calculated based on:\n▪&#22c55e ⛏ In-game statistics\n&7▪&#ef4444 🗡 PvP stats\n&7▪&#ec4899 ⌚ Play Time\n\n&#f97316» &7Click to open Leaderboard"
```

![img.png](/assets/chatformatter/pfandleiher_example.png)


```yaml
"&#00bbffPlayer Info &7» %luckperms_meta_ucolor%<name> &7(&#7cd3fc#%minetrax_player_id%&7)\n&7Joined %minetrax_player_first_seen_at%\n\n&#22c55e⭐ Position: &f#%minetrax_player_position%\n&#ef4444🗡 Kills: &f%minetrax_player_total_player_kills%\n&7☠ Deaths: &f%minetrax_player_total_deaths%\n\n&#f97316» &7Click to send private message"
```
![img_1.png](/assets/chatformatter/pfandleiher_example2.png)
