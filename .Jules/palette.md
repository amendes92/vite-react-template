## 2026-02-03 - Accessibility: ARIA Labels vs Dynamic Text
**Learning:** Static `aria-label` attributes on elements with visible dynamic text override the content for screen readers, hiding updates from the user.
**Action:** Remove static `aria-label` when the visible text describes the element's purpose and state, or ensure the `aria-label` is dynamically updated to match.
