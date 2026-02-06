## 2024-05-22 - Static ARIA labels on dynamic buttons
**Learning:** Using a static `aria-label` (e.g., "get name") on a button with dynamic visible text (e.g., "Name is: {name}") completely overrides the visible text for screen readers. This hides the dynamic value from users who rely on assistive technology.
**Action:** When using `aria-label`, always ensure it includes the dynamic information presented visually, or avoid `aria-label` if the visible text is sufficient.
