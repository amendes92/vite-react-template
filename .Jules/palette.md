## 2026-02-01 - Aria-label Overriding Content
**Learning:** `aria-label` completely overrides the element's text content for screen readers. Using it to describe an action (e.g., "increment") on a button that displays state (e.g., "count is 5") hides the state from assistive technology users.
**Action:** When a button has visible dynamic text, either avoid `aria-label` or ensure the `aria-label` includes the dynamic value (e.g., "Increment, count is 5").
