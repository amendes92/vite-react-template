## 2024-05-22 - Static aria-label shadows dynamic text
**Learning:** Using a static `aria-label` on a button with dynamic visible text (like "Count is {n}") completely hides the dynamic value from screen readers. The SR will only read the static label.
**Action:** Avoid `aria-label` when the visible text is descriptive enough. If needed, include the dynamic value in the `aria-label` or use `aria-description`.
