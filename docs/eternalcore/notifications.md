# Notifications 💬🔔

This plugin allows sending messages to different parts of Minecraft, including the chat, action bar, title, and
subtitle. All messages can be formatted using [🔍 MiniMessages](https://docs.adventure.kyori.net/minimessage/format.html) or standard color codes. You can also
use an online [🌐 message generator](https://webui.adventure.kyori.net/)

## Notification Types 📌

Messages can be sent with a prefix that defines where the message will be displayed. Available prefixes include:

| Notification Type | Description                        |
|-------------------|------------------------------------|
| `CHAT`            | Sends a message to the chat.       |
| `ACTIONBAR`       | Sends a message to the action bar. |
| `TITLE`           | Sends a message to the title.      |
| `SUBTITLE`        | Sends a message to the subtitle.   |
| `DISABLED`        | Turns off the message.             |

## Example usage 📝

**Single messages can be sent using the following syntax:**

::: code-group

```yaml [CHAT]
# Displays a message in the chat.
example: "[CHAT] Hello world!"
```

```yaml [ACTIONBAR]
# Displays a message in the action bar.
example: "[ACTIONBAR] Hello world!"
```

```yaml [TITLE]
# Displays a message in the title.
example: "[TITLE] Hello world!"
```

```yaml [SUBTITLE]
# Displays a message in the subtitle.
example: "[SUBTITLE] Hello world!"
```

```yaml [DISABLED]
# Does not display a message.
example: "[DISABLED]" 
```

:::

**Prefixes can be combined to display messages in different places at the same time. For example:**

::: code-group

```yaml [CHAT + ACTIONBAR]
 # Displays a message in the chat and action bar.
 example: "[CHAT, ACTIONBAR] Hello world!"
```

```yaml [TITLE + SUBTITLE]
# Displays a message in the title and subtitle.
example: "[TITLE, SUBTITLE] Hello world!" 
```

```yaml [CHAT + ACTIONBAR + TITLE + SUBTITLE]
# Displays a message in the chat, action bar, title, and subtitle.
example: "[CHAT, ACTIONBAR, TITLE, SUBTITLE] Hello world!" 
```

```yaml [DISABLED]
# Does not display a message.
example: "[DISABLED]" 
```

:::

**If no prefix is entered, the message will be sent to the chat. So, be sure to include your desired prefix when sending
messages! 🙌**