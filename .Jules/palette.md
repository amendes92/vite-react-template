## 2026-02-07 - Dynamic Content vs. Static ARIA Labels
**Learning:** Static `aria-label` attributes on buttons with dynamic text content (like counters or API results) completely override the visible content for screen readers, preventing them from announcing the updated values.
**Action:** Remove static `aria-label` attributes when the button's visible text is descriptive enough. If the button's function is separate from its value, separate the control from the display or ensure the accessible name updates dynamically.
