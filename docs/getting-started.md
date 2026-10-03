---
title: Getting started
order: 1
group: Start here
pageClass: awx-steps
---

# Getting started

This page takes you from sign-in to an agent that uses a tool for you. It takes about five minutes.

## Before you start

- An AgentWorkX account
- A model to connect: an API key from a provider, or a local model

| Provider | What you need |
|---|---|
| OpenAI, Anthropic | An API key |
| Google Vertex AI | A service account key, a project, and a region |
| LM Studio, Ollama | The address of the running model server |

## Quick start

### Connect a model provider

Open **Home**. The **Connect a model provider** card asks for your key, or for the address of your local model. Paste it in and connect.

![The Connect a model provider card on Home](/screenshots/home-provider-card.svg)

You can add more providers later in [Settings → Language Models](/models#language-models).

### Start a chat

Type a question in the composer on **Home** and press Enter. AgentWorkX opens **Chat**, and the agent answers.

![The Home composer with a first question](/screenshots/home-composer.svg)

To pick a different agent first, press <kbd>Ctrl</kbd>+<kbd>K</kbd> (<kbd>Cmd</kbd>+<kbd>K</kbd> on a Mac) to open the **Launch Bay**.

### Let the agent use a tool

1. Open the tool picker under the composer, and turn on a tool category.
2. Ask for something that needs one of those tools.
3. If the call needs your approval, a card appears in the chat. Choose **Approve**.

The agent runs the tool and uses the result in its answer.

![An approval card in the chat](/screenshots/tool-approval-card.svg)

## When something goes wrong

### The provider card does not accept your key

- Check that the key belongs to the provider you picked. An OpenAI key does not work for Anthropic.
- Check that the key is still active, and that your provider account has billing set up.
- Copy the key again. A space or a missing character at either end makes it fail.

### AgentWorkX cannot reach your local model

AgentWorkX connects to the model from its server, not from your browser. If AgentWorkX runs on a server and LM Studio or Ollama runs on your computer, `localhost` points at the server.

- Check that LM Studio or Ollama is running and that its server is turned on.
- Use an address that the AgentWorkX server can reach.

### The agent stops with an error

Open [Settings → Language Models](/models#language-models), open the provider, and run its check again. If the check fails, replace the key.

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
