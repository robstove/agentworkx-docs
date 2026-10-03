---
title: Automation
order: 6
---

# Automation

Agents can work without you in the chat. Schedules run them on a timer, and hooks check what they do.

## Schedules

Open **Schedules** in the left rail.

![The schedule editor](/screenshots/schedule-editor.svg)

A schedule has:

- A **name**, an **agent**, and a **prompt**.
- A **repeat** rule. Write it in plain words, such as "every 30 minutes", or as a cron expression. A preview shows the next runs.
- A **time zone**.
- An **output**: a new thread for each run, or one thread that each run adds to.
- A **model profile**.
- **Enabled** or **paused**.

From the list you can **run a schedule now**, edit it, or delete it. Each schedule shows its health (Healthy, Failing, Waiting on approval, Auto-paused) and a history of its runs.

When a scheduled run needs a tool approval, it waits in the [Approvals drawer](/tools#approvals-drawer).

## Hooks

Hooks are rules that check an agent's actions and can block them. Open **Settings → Hooks**.

![Settings, Hooks, with a hook and its last run](/screenshots/settings-hooks.svg)

A hook runs at one point in a turn:

| Hook point | When it runs |
|---|---|
| **Prompt sent** | When a message goes to the agent |
| **Before a tool** | Before a tool call runs |
| **After a tool** | After a tool call returns |
| **Turn ends** | When the agent finishes its answer |

A hook checks with an **HTTP** call, a **prompt** to a model, or a **TypeSafe** check. You choose what happens when the check fails or times out: block the action or let it run.

- **Describe a hook** in plain words, and an agent drafts it for you.
- **Test** a hook before you save it.
- Drag hooks to set their order. Each hook shows how its last run went.
- Turn on **Show every run in chat** to see a hook's result in the conversation.

If the pane says **Hooks are off on this server**, your administrator has turned hooks off.
