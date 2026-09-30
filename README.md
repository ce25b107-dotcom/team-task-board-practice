# Team Task Board — Practice Screening

This is a practice starter repository for a 120-minute AI-assisted coding screening.

## Goal

Build a simple full-stack Team Task Board.

### Required features

- Create tasks with:
  - Title (required)
  - Description (optional)
  - Status: Todo, In Progress, Done
- View all tasks
- Edit tasks
- Delete tasks with confirmation
- Filter by status
- Validate user input
- Handle API/server errors
- Persist tasks across browser refreshes
- Responsive, clean UI

### Required API

GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id

## Important

The starter project is intentionally incomplete. Inspect it before changing anything.

Use the existing persistence mechanism instead of adding unnecessary dependencies.

## Acceptance criteria

Before finishing, verify:

- Create works
- Empty titles are rejected
- Tasks remain after refresh
- Edit works
- Status changes work
- Filtering works
- Delete confirmation works
- Invalid input/API errors do not crash the app
- UI works reasonably on a small screen
