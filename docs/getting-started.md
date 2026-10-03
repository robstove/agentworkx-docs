---
title: Getting started
order: 1
pageClass: awx-steps
---

# Getting started

This page takes you from sign-in to your first agent answer. It takes about five minutes.

## Before you start

- An AgentWorkX account. Sign in with it when you open AgentWorkX.
- An API key for **OpenAI**, **Anthropic**, or **Google Vertex AI**, or a model that runs on your own computer in **LM Studio** or **Ollama**.

## Quick start

### Connect a model provider

Open **Home**. The **Connect a model provider** card asks for your key, or for the address of your local model. Paste it in and connect.

![The Connect a model provider card on Home](/screenshots/home-provider-card.svg)

You can add more providers later in [Settings → Language Models](/models#language-models).

### Start a chat

Type a question in the composer on **Home** and press Enter. AgentWorkX opens **Chat**, and the agent answers.

![The Home composer with a first question](/screenshots/home-composer.svg)

To pick a different agent first, press <kbd>Ctrl</kbd>+<kbd>K</kbd> (<kbd>Cmd</kbd>+<kbd>K</kbd> on a Mac) to open the **Launch Bay**.

### Pick up where you left off

Close the tab and open AgentWorkX again. Your conversation is in the thread rail on the left of **Chat**. Select it and keep going. The agent continues from the thread's history.

![The thread rail in Chat with a saved thread](/screenshots/chat-thread-rail.svg)

## What to do next

### Get work done

- [Rewrite or translate a draft](/chat#rewrite-and-translate) before you send it.
- [Attach files](/chat#the-composer) and ask about them.
- [Save prompts](/capture#prompts) you use often, and [capture ideas](/capture#ideas) as they come.
- [Give a thread a workspace](/workspaces#workspaces) of files to work on.

### Build and run agents

- [Create an agent](/agents-and-teams#create-something-new) by chatting with the Agent maker.
- [Tune a model profile](/models#model-profiles) for each kind of job.
- [Connect tools](/tools#agent-connectors) from MCP servers.
- [Run an agent on a schedule](/automation#schedules), and [check its actions with hooks](/automation#hooks).

## Find your way around

The left rail has three pages and a set of drawers:

| Item | What it opens |
|---|---|
| **Home** | Recent work and a quick composer |
| **Chat** | Your conversations with agents |
| **Board** | Your threads as a board, by status |
| **Approvals** | Tool calls that wait for your decision |
| **Schedules** | Agents that run on their own |
| **Ideas** and **Prompts** | Notes and saved prompts |
| **Templates** | Saved HTML layouts |
| **Workspaces** | Folders of files that agents can use |
| **Teams** | Agent teams and their projects |

![The left rail with its pages and drawers](/screenshots/left-rail.svg)

The account menu at the bottom of the rail opens your account and signs you out. Press <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>Cmd</kbd>+<kbd>,</kbd> on a Mac) to open **Settings**.
