---
title: Agents and teams
order: 3
---

# Agents and teams

AgentWorkX comes with agents for different jobs. You can build new ones, group them into teams, and have one agent supervise another.

## Launch an agent

Press <kbd>Ctrl</kbd>+<kbd>K</kbd> (<kbd>Cmd</kbd>+<kbd>K</kbd> on a Mac) on Home to open the **Launch Bay**. It groups the agents by category. Pin the ones you use most, and pick one to start a chat with it.

In a chat, use the agent picker under the composer, or type `/agent`.

## Create something new

The **+** button (on Home and in the Chat thread rail) opens **Create new**. Each item starts a chat with an agent that builds that thing with you:

| Item | Agent you chat with |
|---|---|
| Agent, Agent Blueprint | Agent maker |
| Team, Team Blueprint | Team maker |
| Model Profile | Model tuning agent |
| Theme, Background | Theme agent |
| Benchmark | Benchmarking agent |
| Support Ticket | Support agent |
| Skill, Workflow, Task, User Directive, Image | Conversation agent |

**Workspace**, **Idea**, and **Prompt** open their editors directly. **Agent Connector** opens [Agent Connectors](/tools#agent-connectors).

## Teams

Open **Teams** from the left rail, or go to **Home → Teams**.

- Filter teams by status (Active, Forming, Paused, Completed) and sort them.
- Start a team with the Team maker, from a blank chat or from a starter such as **Research pair** or **Review bench**.
- Open a team to see its work, roster, risks, charter, scorecard, and activity.
- Create a **project** for a team.
- Read the team's communication threads.

## Take over

**Take over** puts a supervisor agent on a thread. The supervisor checks the thread on a schedule and nudges the agent that owns it.

1. Select **Take over** in the composer, or type `/takeover`.
2. Choose how often it checks: every 15 minutes, every 30 minutes, or every hour. You can also set your own interval.
3. To end it, choose **Stop supervising**.

Take over runs as a [schedule](/automation#schedules).
