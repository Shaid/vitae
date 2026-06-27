# Vitae Resume JSON Schema

This document describes the JSON data format used by Vitae for storing and rendering resume data. Each resume is a single JSON file placed in the data directory, named with a URL-friendly slug (e.g., `jez-templeton.json`).

---

## Root Object

| Field        | Type              | Required | Description                                      |
|--------------|-------------------|----------|--------------------------------------------------|
| `id`         | `string`          | ✅       | URL-friendly identifier (matches filename)       |
| `name`       | `string`          | ✅       | Full name of the person                          |
| `avatar`     | `string`          | ✅       | URL to a profile image                           |
| `role`       | `string`          | ❌       | Current job title or professional tagline        |
| `contacts`   | `Contacts`        | ✅       | Contact information                              |
| `header`     | `HeaderSection[]` | ✅       | Sidebar sections (about me, summary, etc.)       |
| `employment` | `Employment[]`    | ✅       | Employment history, ordered most recent first    |
| `education`  | `Education[]`     | ✅       | Education and certifications                     |
| `skills`     | `SkillCategory[]` | ✅       | Grouped skill lists                              |

---

## Contacts

| Field     | Type     | Required | Description                |
|-----------|----------|----------|----------------------------|
| `email`   | `string` | ✅       | Email address              |
| `phone`   | `string` | ✅       | Phone number               |
| `github`  | `string` | ✅       | GitHub username or org/repo|
| `twitter` | `string` | ❌       | Twitter/X handle           |

---

## HeaderSection

Freeform content sections displayed in the sidebar (e.g., "About Me").

| Field  | Type       | Required | Description                              |
|--------|------------|----------|------------------------------------------|
| `title`| `string`   | ✅       | Section heading                          |
| `icon` | `string`   | ✅       | Icon identifier (for theming; may be ignored by renderers) |
| `body` | `string[]` | ✅       | Array of paragraphs                      |

---

## Employment

| Field       | Type        | Required | Description                                  |
|-------------|-------------|----------|----------------------------------------------|
| `role`      | `string`    | ✅       | Job title                                    |
| `description`| `string`   | ❌       | Brief description of the role                |
| `employer`  | `Employer`  | ✅       | Employer details                             |
| `startDate` | `string`    | ✅       | ISO 8601 date (`YYYY-MM-DD`)                 |
| `endDate`   | `string`    | ✅       | ISO 8601 date or `"now"` for current role    |
| `sections`  | `Section[]` | ✅       | Grouped items (responsibilities, accomplishments, etc.) |

### Employer

| Field      | Type     | Required | Description                      |
|------------|----------|----------|----------------------------------|
| `name`     | `string` | ✅       | Company name                     |
| `url`      | `string` | ✅       | Company website (without protocol)|
| `location` | `string` | ✅       | City/state/country               |

---

## Education

| Field        | Type               | Required | Description                              |
|--------------|--------------------|----------|------------------------------------------|
| `course`     | `string`           | ✅       | Name of course or qualification          |
| `metadata`   | `EducationMeta`    | ✅       | Institution details                      |
| `date`       | `string`           | ✅       | Completion date (`YYYY-MM-DD`)           |
| `description`| `string[]`         | ❌       | Brief description paragraphs             |
| `sections`   | `Section[]`        | ❌       | Additional detail sections (e.g., course contents) |

### EducationMeta

| Field      | Type     | Required | Description                        |
|------------|----------|----------|------------------------------------|
| `venue`    | `string` | ❌       | Institution name                   |
| `location` | `string` | ❌       | City/state                         |
| `url`      | `string` | ❌       | Institution website (without protocol) |

---

## SkillCategory

| Field  | Type            | Required | Description                    |
|--------|-----------------|----------|--------------------------------|
| `title`| `string`        | ✅       | Category name (e.g., "Web Development") |
| `items`| `SectionItem[]` | ✅       | List of skills in this category|

---

## Section

A reusable grouped list used in both employment and education entries.

| Field  | Type            | Required | Description                          |
|--------|-----------------|----------|--------------------------------------|
| `name` | `string`        | ✅       | Machine-friendly identifier          |
| `title`| `string`        | ✅       | Human-readable heading               |
| `items`| `SectionItem[]` | ✅       | List of items in this section        |

---

## SectionItem

| Field  | Type     | Required | Description                                  |
|--------|----------|----------|----------------------------------------------|
| `title`| `string` | ❌       | Bold title for the item (e.g., project name) |
| `url`  | `string` | ❌       | Link URL (without protocol)                  |
| `body` | `string` | ✅       | Description text                             |

---

## Example

```json
{
  "id": "jane-doe",
  "name": "Jane Doe",
  "avatar": "https://example.com/avatar.jpg",
  "role": "Senior Software Engineer",
  "contacts": {
    "email": "jane@example.com",
    "phone": "+1 555 123 4567",
    "github": "janedoe"
  },
  "header": [
    {
      "title": "About Me",
      "icon": "social-person",
      "body": [
        "Experienced software engineer with a passion for building great products."
      ]
    }
  ],
  "employment": [
    {
      "role": "Senior Software Engineer",
      "employer": {
        "name": "Acme Corp",
        "url": "www.acme.com",
        "location": "San Francisco, CA"
      },
      "startDate": "2020-01-15",
      "endDate": "now",
      "sections": [
        {
          "name": "responsibilities",
          "title": "Responsibilities",
          "items": [
            { "body": "Leading a team of 5 engineers" },
            { "body": "Architecting microservices platform" }
          ]
        },
        {
          "name": "accomplishments",
          "title": "Key Accomplishments",
          "items": [
            {
              "title": "Platform Migration",
              "url": "www.acme.com/platform",
              "body": "Led migration from monolith to microservices, reducing deploy times by 80%."
            }
          ]
        }
      ]
    }
  ],
  "education": [
    {
      "course": "B.S. Computer Science",
      "metadata": {
        "venue": "MIT",
        "location": "MA",
        "url": "www.mit.edu"
      },
      "date": "2015-06-01",
      "sections": [
        {
          "name": "focus",
          "title": "Focus Areas",
          "items": [
            { "body": "Distributed Systems" },
            { "body": "Machine Learning" }
          ]
        }
      ]
    }
  ],
  "skills": [
    {
      "title": "Languages",
      "items": [
        { "body": "TypeScript / JavaScript" },
        { "body": "Python" },
        { "body": "Go" }
      ]
    }
  ]
}
```

---

## Notes

- **Dates** use ISO 8601 format (`YYYY-MM-DD`). Use the string `"now"` for ongoing/current positions.
- **URLs** are stored without the protocol prefix (`http://` or `https://`). The renderer prepends the appropriate protocol.
- **Ordering** is significant — items render in array order. Place most recent entries first for employment and education.
- **The `icon` field** in HeaderSection is a legacy field from the original implementation. Renderers may ignore it or map it to an icon library of their choice.
