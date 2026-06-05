# GOMAU Lead Security Specification

## Data Invariants
1. Leads can be created by unauthenticated users (since it's a public landing page form).
2. The payload must strictly conform to the `leads` schema.
3. No user can read the `leads` collection (write-only for the public, only accessible via Admin SDK or an explicit Admin dashboard in the future, if requested. For now, read is false).
4. No updates or deletes allowed from the public web interface.

## The "Dirty Dozen" Payloads (for Leads)
1. Add a ghost field (`isAdmin: true`).
2. Incorrect type (e.g., `whatsapp: boolean`).
3. Missing required field.
4. Sending an empty string for `fullname`.
5. Sending a `whatsapp` string exceeding length limit (e.g., 500 chars).
6. Missing `createdAt` timestamp.
7. Spoofed `createdAt` (not `request.time`).
8. Spoofed document ID mechanism (not random).
9. Null payload insertion.
10. Update attempt.
11. Read attempt.
12. Delete attempt.

Runners test later.
