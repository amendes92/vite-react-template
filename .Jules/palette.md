## 2024-05-21 - Harmful ARIA labels on dynamic buttons
**Learning:** Using `aria-label` on buttons with dynamic visible text (like "count is {count}") overrides the visible content for screen readers, causing data loss (they hear "increment" but not the value).
**Action:** Avoid `aria-label` when visible text is sufficient. If extra context is needed, ensure the dynamic value is included in the `aria-label` or use `aria-describedby`.
