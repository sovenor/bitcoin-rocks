---
description: Refresh translations for an existing locale via the V2 manifest workflow
argument-hint: <language name or code>
---

You are being invoked to run the manifest-driven translation refresh pass for the locale: **$ARGUMENTS**

Resolve `$ARGUMENTS` to the two-letter (or three-letter) language code by consulting the language-code reference table near the bottom of the workflow document. If the argument is empty or ambiguous, ask the user before proceeding.

Follow the workflow below verbatim — pre-checks, the language-diff step, translation, apply + verify, build verification, and the checklist + memory-bank update at the end.

@../../.clinerules/workflows/manifest-translate-refresh.md
