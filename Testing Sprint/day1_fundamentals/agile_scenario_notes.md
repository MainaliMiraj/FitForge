# Agile scenario notes — QuickEats: Search restaurants by cuisine

## Story
"As a user, I want to search restaurants by cuisine so that I can find food I like."

---

## Clarifying questions for the Product Owner
- Should search be by cuisine only, or also by restaurant name, menu items, and tags?
- Are cuisine values standardized (e.g., "Italian", "Pizza", "BBQ") or free‑text entered by restaurants?
- Should search support partial matches, prefixes, substring matches, and fuzzy matches?
- Should synonyms and aliases be supported (e.g., "Barbecue" ↔ "BBQ", "Café" ↔ "Cafe")?
- Can users combine multiple cuisines in one search (e.g., "Thai + Chinese") or use filters?
- Expected behavior for case sensitivity, diacritics, punctuation, and special characters?
- Minimum characters before search is triggered? Any debounce/autosuggest requirements?
- How should results be ordered (relevance, distance, rating, popularity)? Are there tie-break rules?
- Paging and result limits per page; any performance SLAs for search response time?
- Should search be scoped by location or available only for current delivery area?
- What should the UI show when no results are found? Any suggested copy or CTAs?
- Are there analytics/events required (e.g., track searches, no-results, selected cuisine)?
- Any accessibility or localization considerations (multiple languages)?
- Who owns the canonical cuisine taxonomy and where is it stored (DB, external service)?

---

## Acceptance criteria (candidate)
- User can enter a cuisine and receive relevant restaurant results.
- Supports partial and case‑insensitive matches.
- Handles common synonyms/aliases for cuisines.
- Returns a "no results" state with suggested actions.
- Results respect user's location and pagination limits.
- Response time meets defined SLA.

---

## Test ideas (5–10 concrete cases)
1. Exact match: search "Indian" — expect Indian restaurants returned.  
2. Partial/prefix: search "Ind" or "Piz" — expect relevant suggestions and results.  
3. Case and diacritics: search "cafe", "Café" — expect same results.  
4. Synonym handling: search "BBQ" and "Barbecue" — results should align.  
5. Multiple cuisines / combined terms: search "Pizza Italian" or select two filters — verify results include restaurants tagged with either/both per requirement.  
6. No results: search obscure term or misspelling — verify no‑results state and suggested actions (clear filters, try other cuisine).  
7. Special characters and SQL/JS injection attempts: search "'; DROP TABLE" or "<script>" — app should sanitize and not break.  
8. Performance/load: measure response under expected concurrent users and verify SLA (<X ms).  
9. Location scoping: search same cuisine from two different delivery areas — results should differ based on availability.  
10. Data integrity: restaurant with multiple cuisines should appear when any of its cuisines match; ensure duplicates are not shown.

Additional: test pagination, sorting options, integration with autosuggest, analytics events firing, and accessibility (keyboard navigation, screen reader labels).

---

## Stand-up phrasing (short)
- Yesterday: Reviewed story, drafted acceptance criteria and test cases; set up test data for cuisines.
- Today: Start exploratory + automated tests for cuisine search (exact, partial, synonyms, edge cases). Will validate location scoping and performance.
- Blockers/needs: PO clarification on synonyms/taxonomy and expected sorting rules; dev environment with seeded restaurants for multiple locations.

If blocked: "Blocked — waiting on PO to confirm cuisine taxonomy and on dev seed data."  
If done: "Done — acceptance criteria met, tests green, ready for review."

--- 

Notes: add taxonomy and example test data to this file once PO confirms.