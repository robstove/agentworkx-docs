---
title: Chat
order: 2
---

# Chat

Chat is where you work with an agent. Each conversation is a thread, and AgentWorkX keeps every thread so you can come back to it.

## The composer

Type a message and press Enter to send it. Shift+Enter starts a new line.

- **Send while an answer streams.** AgentWorkX queues your message and sends it when the answer ends. You can edit or cancel a queued message.
- **Stop** an answer that is still streaming.
- **Attach files.** Use the attach button, drag files onto the chat, or paste. Images (PNG, JPG, GIF, WebP) and documents (PDF, TXT, CSV, Word, Excel, PowerPoint) are supported.
- **Dictate** with your microphone. The button is available when your browser supports speech recognition.
- **Choose the agent, the model profile, and the tools** for the thread with the pickers under the composer.
- The **context chip** shows how full the model's context window is.

## Slash commands

Type `/` in the composer to open the command list.

| Command | What it does |
|---|---|
| `/skill` | Run a packaged skill |
| `/prompt` | Insert a saved prompt |
| `/agent` | Switch the agent |
| `/model` | Switch the model profile |
| `/takeover` | Have a supervisor agent watch the thread |
| `/clear` | Clear the composer |
| `/help` | List the commands |

## Rewrite and translate

The **prompt tools** menu rewrites your draft before you send it: Proofread, Shorten, Expand, Professional, Casual, Refine prompt, Add examples, or Structure as steps. A word diff shows what changed.

The **translate** menu translates your draft into another language. You can pin the languages you use most. You can also translate a single message in the conversation.

## Message actions

Hover over a message to:

- Mark it **Helpful** or **Not helpful**.
- **Copy** it.
- **Edit from here** to change your message.
- **Fork** the thread from that message into a new thread.
- Jump to your previous or next message.

## Rich answers

Agents can answer with more than text:

- Markdown, code blocks, and JSON.
- **Mermaid diagrams**, with a button to copy the source.
- **HTML layouts** such as dashboards and styled tables. Copy the HTML, or save it as a [template](/tools#html-templates).
- **Generated images**, which you can download.
- **Questions** with answers to pick from, and quick-reply buttons.

## Manage threads

The thread rail on the left of Chat lists your threads.

- **Search** thread titles, or search the full text of every message.
- **Filter** by date, status, and agent.
- **Pin** a thread, set its **status**, or **delete** it.
- **Select several threads** and delete them together.
- Edit a thread's **subject**, or let AgentWorkX write one for you.
- Open **thread details** to see when it started, how many messages it has, what it cost, and how much context it uses.

## The inspector

The panel on the right of Chat shows the thread's agent, model profile, task plan, notes, workspace, active tools, and artifacts.

## The board

**Board** in the left rail shows your threads as cards in four columns: **To do**, **In progress**, **Blocked**, and **Done**. Drag a card to change its status. Filter the board by agent and date.
