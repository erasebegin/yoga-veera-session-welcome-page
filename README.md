## Yoga Veera Session Welcome Page
### Web page to facilitate handover from email invite to session portal

Receives the following data from URL parameters:
- `eventId` - unique identifier for event
- `eventType`- determines event duration and other page content
- `tokenId`- unique identifier for user
- `regId` - unique identifier for user
- `language` - two-character code (e.g. de, es, it)
- `timeAndDate` - ISO string

Post request will pass on `tokenId` and `regId`
