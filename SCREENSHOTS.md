# Screenshots

Each guide page shows a placeholder image where a screenshot belongs. The placeholders are SVG files in `docs/public/screenshots/`. Each one names the shot it stands for.

## Replace a placeholder

1. Capture the shot from a demo instance. Use demo data only: no real thread titles, names, emails, keys, or file paths.
2. Use the dark theme, and a 16:9 frame (1600 × 900 or larger at the same ratio).
3. Save it as PNG in `docs/public/screenshots/`, with the placeholder's name. For example, `chat-composer.svg` becomes `chat-composer.png`.
4. In the page that links it, change `.svg` to `.png`. Keep the alt text, or make it describe the real shot.
5. Delete the placeholder SVG.

## Find the remaining placeholders

```bash
grep -rn "screenshots/.*\.svg" docs --include=*.md
```
