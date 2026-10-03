---
title: Tools and connectors
order: 5
---

# Tools and connectors

Agents act through tools. You decide which tools a thread can use, which outside services agents can reach, and which tool calls need your approval.

## Choose tools for a thread

Open the tool picker under the composer. Tools are grouped by category. Select all or clear a category at once.

![The tool picker with tool categories](/screenshots/tool-picker.svg)

## Agent Connectors

Agent Connectors add tools from outside services that speak the Model Context Protocol (MCP). Open **Settings → Agent Connectors**, or go to **Home → Connectors**.

![Settings, Agent Connectors, with a connected server](/screenshots/settings-agent-connectors.svg)

- **Browse** the public registry and add a server, or **add one by URL**.
- Choose how it signs in: none, an API key, or a sign-in with the service.
- **Connect**, **reconnect**, or **disconnect** it.
- Turn **Available to agents** on or off.
- See the tools each connector offers.

## Integrations

Open **Settings → Integrations** to connect one or more **Microsoft 365** mailboxes so agents can work with your Outlook mail. You can add another account or disconnect one.

## Tool approvals

Some tool calls stop and wait for you. An approval card appears in the chat.

![An approval card in the chat](/screenshots/tool-approval-card.svg)

- **Approve** or **decline** each call, or approve them all at once.
- Choose whether an approval covers **this call only** or **the rest of the conversation**.
- Some tools always ask, every time.
- Turn on **Reasons for tool calls** in **Settings → Chat** to see a short, plain-language reason with each call.

## Approvals drawer

**Approvals** in the left rail collects every call that waits for you, including calls from [schedules](/automation#schedules). A badge shows how many wait.

![The Approvals drawer with waiting calls](/screenshots/approvals-drawer.svg)

- Filter by **Waiting on you** or **Schedules**.
- For a scheduled run: approve once, approve for that schedule's thread, decline, dismiss, or resume now.
- Select several and approve them together.
- Open the thread or run that made the call.

## HTML templates

When an agent shows an HTML layout, such as a dashboard, choose **Save as template**. **Templates** in the left rail lists them.

![The Templates drawer](/screenshots/templates-drawer.svg)

- **Use in chat** to fill the template with new data.
- Edit its name, description, tags, and variables, or view its source.
- Delete a template you no longer need.
