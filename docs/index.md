---
title: AgentWorkX
layout: home
pageClass: awx-home

hero:
  name: AgentWorkX
  text: Agents that keep working.
  tagline: Every thread is saved. Every risky tool call waits for you. Every schedule runs while you're away.
  image:
    src: /logo.svg
    alt: AgentWorkX
  actions:
    - theme: brand
      text: Get started in 5 minutes
      link: /getting-started
    - theme: alt
      text: Browse features
      link: "#all-features"

features:
  - title: Chat
    details: Threads that keep their history, with attachments, voice, slash commands, rewrite tools, and rich answers.
    link: /chat
    linkText: Chat guide
  - title: Agents and teams
    details: Launch built-in agents, build your own by chatting with a maker agent, and run teams with projects.
    link: /agents-and-teams
    linkText: Agents and teams
  - title: Models and providers
    details: Connect OpenAI, Anthropic, Vertex AI, or a compatible service, and tune model profiles for each job.
    link: /models
    linkText: Models guide
  - title: Tools and connectors
    details: Give agents tools from MCP servers and Microsoft 365, and approve the calls that matter.
    link: /tools
    linkText: Tools guide
  - title: Automation
    details: Run agents on a schedule, and check their actions with hooks that can block a step.
    link: /automation
    linkText: Automation guide
  - title: Workspaces and terminal
    details: Folders of files for you and your agents, a terminal in the browser, and shell variables.
    link: /workspaces
    linkText: Workspaces guide
  - title: Ideas and prompts
    details: Capture a thought in one step, and keep a library of prompts to reuse and compare.
    link: /capture
    linkText: Ideas and prompts
  - title: Personalization
    details: Themes, backgrounds, a theme studio, and chat preferences that fit how you work.
    link: /personalization
    linkText: Personalization guide
---

## Choose your path

### I want to get work done

- [Start your first chat](/getting-started#start-a-chat)
- [Rewrite and translate](/chat#rewrite-and-translate)
- [Ideas and prompts](/capture#prompts)
- [Workspaces](/workspaces#workspaces)
- [The board](/chat#the-board)

### I build and run agents

- [Create an agent](/agents-and-teams#create-something-new)
- [Model profiles](/models#model-profiles)
- [Agent Connectors](/tools#agent-connectors)
- [Schedules](/automation#schedules)
- [Hooks](/automation#hooks)

## All features

### Start here

- [Before you start](/getting-started#before-you-start)
- [Connect a model provider](/getting-started#connect-a-model-provider)
- [Start a chat](/getting-started#start-a-chat)
- [Pick up where you left off](/getting-started#pick-up-where-you-left-off)
- [Find your way around](/getting-started#find-your-way-around)

### Chat

- [The composer](/chat#the-composer)
- [Slash commands](/chat#slash-commands)
- [Rewrite and translate](/chat#rewrite-and-translate)
- [Message actions](/chat#message-actions)
- [Rich answers](/chat#rich-answers)
- [Manage threads](/chat#manage-threads)
- [The inspector](/chat#the-inspector)
- [The board](/chat#the-board)

### Agents and teams

- [Launch an agent](/agents-and-teams#launch-an-agent)
- [Create something new](/agents-and-teams#create-something-new)
- [Teams](/agents-and-teams#teams)
- [Take over](/agents-and-teams#take-over)

### Models and providers

- [Language Models](/models#language-models)
- [Model profiles](/models#model-profiles)
- [AI Powered features](/models#ai-powered-features)
- [Help on any setting](/models#help-on-any-setting)
- [Lab](/models#lab)

### Tools and connectors

- [Choose tools for a thread](/tools#choose-tools-for-a-thread)
- [Agent Connectors](/tools#agent-connectors)
- [Integrations](/tools#integrations)
- [Tool approvals](/tools#tool-approvals)
- [Approvals drawer](/tools#approvals-drawer)
- [HTML templates](/tools#html-templates)

### Automation

- [Schedules](/automation#schedules)
- [Hooks](/automation#hooks)

### Workspaces and terminal

- [Workspaces](/workspaces#workspaces)
- [Terminal](/workspaces#terminal)
- [Shell Environment](/workspaces#shell-environment)

### Ideas and prompts

- [Ideas](/capture#ideas)
- [Prompts](/capture#prompts)

### Personalization

- [Appearance](/personalization#appearance)
- [Theme Studio](/personalization#theme-studio)
- [Chat preferences](/personalization#chat-preferences)
- [Reset](/personalization#reset)

## How these docs change

Users and the AgentWorkX agent write these pages together. Each change arrives as a pull request, and a maintainer reviews it before it goes live. [Contribute on GitHub](https://github.com/robstove/agentworkx-docs).

```mermaid
flowchart LR
  A[User or agent] -->|propose change| B[Pull request]
  B -->|maintainer merges| C[main branch]
  C -->|GitHub Actions| D[This site]
```
