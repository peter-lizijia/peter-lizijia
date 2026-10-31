# Maintaining this profile

This public repository has the same name as the account, so GitHub displays its root README on https://github.com/peter-lizijia.

## Content

- Edit `README.md` for the short About Me lines and social links. Keep detailed research, projects, and publications on the academic website instead.
- Edit the typing lines and badge appearance in `profile.json`, then run `node scripts/refresh-static-assets.mjs` with Node.js 22 or newer. Commit the updated SVGs. This command does not need a GitHub token.
- Personal information comes from the October 24, 2026 CV and confirmed research interests. Keep the Penn affiliation as a master's student, not a research assistant.
- Avoid inferring proficiency from the language card.

## Automatic assets

`.github/workflows/profile-assets.yml` runs daily at 08:23 UTC, on workflow edits, and on manual dispatch from the Actions tab. It uses the repository's built-in `GITHUB_TOKEN`; no personal token or extra secret is required.

It creates light and dark statistics, language cards, and a snake animation in `assets/`. The README selects the right version using GitHub-supported `<picture>` elements. The language card excludes this profile repository so its generated SVG files do not affect the results. Only public repository statistics are requested.

Failed generation stops before committing, so the last successful assets remain visible. GitHub may disable schedules after 60 days of repository inactivity; re-enable the workflow in Actions and run it manually if that happens. A manual change to the README is also a good time to review the profile's factual information.

## Rendering checks

After changes, check https://github.com/peter-lizijia in both themes and on a narrow screen. Check that all badges, both cards, and the snake load. The snake is a pre-rendered animation, not a playable game.

GitHub's native Contribution activity feed is separate from this README. Profile privacy settings affect several GitHub features together; do not change account privacy just to edit the README.

## Credits

- Typing SVG: https://github.com/DenverCoder1/readme-typing-svg (MIT)
- Fira Code: https://github.com/tonsky/FiraCode (SIL Open Font License)
- Badges: https://github.com/badges/shields
- Statistics: https://github.com/stats-organization/github-readme-stats-action and https://github.com/stats-organization/github-stats-extended
- Contribution snake: https://github.com/Platane/snk

Actions are pinned to full commit hashes, and the statistics renderer is pinned to version 2.2.1. Update those intentionally after reviewing upstream changes.
