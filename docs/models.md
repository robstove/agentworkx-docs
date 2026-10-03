---
title: Models and providers
order: 4
---

# Models and providers

AgentWorkX works with several model providers. You choose which models are on, and you group their settings into model profiles.

## Language Models

Open **Settings → Language Models**.

- **Add a provider:** OpenAI, Anthropic, Google Vertex AI, or any OpenAI-compatible service (a base URL and an optional key).
- **Pick models** from the provider's catalog. The **Recommended** filter narrows the list.
- **Open a provider** to see its models and which profiles use it, to check that it works, or to replace its key.
- **Open a model** to see its context window, what uses it, and its pricing.
- **Turn models on or off in bulk.** AgentWorkX warns you before you remove a model that something still uses.

## Model profiles

A model profile is a model plus its settings: name, description, parameters, and thinking level. Agents and features use profiles, not raw models.

Pick a thread's profile with the profile picker under the composer, or type `/model`. To build a profile with help, choose **Create new → Model Profile**.

## AI Powered features

Open **Settings → AI Powered** to choose which profile runs each built-in feature:

- A shared **Utility model**, which the features use unless you choose otherwise.
- Translate, Prompt tools, Thread titles, Settings help, Conversation summaries, Tool selection, Second opinion, HTML templates, Embeddings, and Image generation.

## Help on any setting

Select the **?** next to a setting to read what it does. You can also ask a help agent about it.

## Lab

**Lab** sends one prompt to several agents and shows the answers side by side. Pick a winner, retry failures, or start a new comparison. Open it from the menu under the logo, or choose **Compare this prompt** in the [Prompts drawer](/capture#prompts).
