# Vitae Resume JSON Schema

This document describes the JSON data format used by Vitae for storing and rendering resume data. Each resume is a single JSON file placed in the data directory, named with a URL-friendly slug (e.g., `alex-johnson.json`). The filename determines the URL path — a file named `alex-johnson.json` becomes accessible at `/resume/alex-johnson`.

---

## Root Object

The top-level object represents a single person's complete resume.

| Field        | Type              | Required | Description                                      |
|--------------|-------------------|----------|--------------------------------------------------|
| `id`         | `string`          | ✅       | URL-friendly identifier matching the filename (without `.json`). Used internally for routing and lookups. Must be lowercase, hyphenated (e.g., `"alex-johnson"`). |
| `name`       | `string`          | ✅       | The person's full display name as it should appear on the resume (e.g., `"Alex Johnson"`). |
| `avatar`     | `string`          | ✅       | Absolute URL to a profile/avatar image. Can be any publicly accessible image URL (GitHub avatars, Gravatar, etc.). |
| `role`       | `string`          | ❌       | Current professional title or tagline displayed beneath the name. Omit if you prefer to let employment history speak for itself. |
| `contacts`   | `Contacts`        | ✅       | Contact details displayed in the sidebar.        |
| `header`     | `HeaderSection[]` | ✅       | Freeform content sections for the sidebar — typically "About Me", personal statements, or summaries. Can contain any number of sections. |
| `employment` | `Employment[]`    | ✅       | Employment history entries. Should be ordered most recent first — the renderer displays them in array order. |
| `education`  | `Education[]`     | ✅       | Education, certifications, and training entries. Ordered most recent first. |
| `skills`     | `SkillCategory[]` | ✅       | Skill groupings. Each category contains a list of individual skills. |

**Example — minimal root object:**

```json
{
  "id": "alex-johnson",
  "name": "Alex Johnson",
  "avatar": "https://avatars0.githubusercontent.com/u/2906667",
  "role": "Engineering Lead",
  "contacts": { ... },
  "header": [ ... ],
  "employment": [ ... ],
  "education": [ ... ],
  "skills": [ ... ]
}
```

---

## Contacts

Contact information displayed in the resume sidebar. All contact fields are rendered as clickable links where appropriate (email becomes `mailto:`, GitHub links to the profile).

| Field     | Type     | Required | Description                                              |
|-----------|----------|----------|----------------------------------------------------------|
| `email`   | `string` | ✅       | Email address. Rendered as a `mailto:` link.             |
| `phone`   | `string` | ✅       | Phone number in international format (e.g., `"+1 555 987 6543"`). |
| `github`  | `string` | ✅       | GitHub username or `org/repo` path. Linked to `https://github.com/<value>`. |
| `twitter` | `string` | ❌       | Twitter/X handle (without `@`).                          |

**Example:**

```json
{
  "email": "alex@example.com",
  "phone": "+1 555 987 6543",
  "github": "alexjohnson",
  "twitter": "alexj"
}
```

---

## HeaderSection

Freeform content sections displayed in the sidebar. Use these for personal statements, "about me" blurbs, or any introductory text that doesn't fit into the structured employment/education/skills sections.

Each entry becomes its own titled section in the sidebar. You can have as many as you like — common patterns include a single "About Me" section, or multiple sections like "About Me" + "What I'm Looking For".

| Field  | Type       | Required | Description                                                    |
|--------|------------|----------|----------------------------------------------------------------|
| `title`| `string`   | ✅       | Section heading displayed above the content (e.g., `"About Me"`, `"Summary"`, `"What is this?"`). |
| `icon` | `string`   | ✅       | Icon identifier for theming purposes. This is a legacy field — renderers may ignore it or map it to an icon library. Use descriptive names like `"social-person"` or `"action-assignment-turned-in"`. |
| `body` | `string[]` | ✅       | Array of paragraph strings. Each element is rendered as a separate `<p>` tag. Use multiple entries to break up long text into readable paragraphs. |

**Example — multiple header sections:**

```json
[
  {
    "title": "About Me",
    "icon": "social-person",
    "body": [
      "I'm an experienced principal engineer and cloud architect guiding teams with their development of scalable and robust digital services.",
      "I am experienced in developing end-to-end applications in Python and TypeScript."
    ]
  },
  {
    "title": "What I'm Looking For",
    "icon": "action-search",
    "body": [
      "I'm seeking a senior leadership role where I can combine hands-on architecture with mentoring growing engineering teams."
    ]
  }
]
```

---

## Employment

Each entry represents a single role at a single employer. If you held multiple roles at the same company, create separate entries for each (ordered most recent first).

| Field        | Type        | Required | Description                                                    |
|--------------|-------------|----------|----------------------------------------------------------------|
| `role`       | `string`    | ✅       | Job title as it should appear (e.g., `"Engineering Lead"`, `"Senior Web Developer"`). |
| `description`| `string`    | ❌       | Optional brief summary of the role. Displayed beneath the title if provided. Most users prefer to convey this through the `sections` field instead. |
| `employer`   | `Employer`  | ✅       | Details about the company/organisation.                        |
| `startDate`  | `string`    | ✅       | When the role began, in ISO 8601 format (`YYYY-MM-DD`). The day component is typically `01` since most people only track month granularity (e.g., `"2021-07-01"`). |
| `endDate`    | `string`    | ✅       | When the role ended. Use `"now"` (literal string) for your current position — the renderer displays this as "Present". Otherwise use ISO 8601 format (e.g., `"2023-06-30"`). |
| `sections`   | `Section[]` | ✅       | Grouped content for this role. Typically includes "Responsibilities" and "Accomplishments" sections, but you can use any groupings that make sense. |

**Example — current role with responsibilities and accomplishments:**

```json
{
  "role": "Engineering Lead",
  "employer": {
    "name": "Greenfield Technologies",
    "url": "www.greenfield.dev",
    "location": "VIC"
  },
  "startDate": "2021-07-01",
  "endDate": "now",
  "sections": [
    {
      "name": "responsibilities",
      "title": "I am responsible for ...",
      "items": [
        { "body": "Leading a team of scientific software engineers that creates tools for scientific verification" },
        { "body": "Providing architectural and technical expertise for end-to-end delivery of modern software solutions" }
      ]
    },
    {
      "name": "accomplishments",
      "title": "I accomplished ...",
      "items": [
        {
          "title": "DataViz Platform",
          "url": "greenfield.dev",
          "body": "DataViz provides users with an interactive data verification environment and easy access to over 8 years of forecast and observation data."
        },
        {
          "title": "Innovation Award - Company Excellence Awards",
          "body": "Awarded for sustained excellence in improving the DataViz forecast verification system."
        }
      ]
    }
  ]
}
```

**Example — past role with only responsibilities:**

```json
{
  "role": "Freelance Developer",
  "employer": {
    "name": "Various clients",
    "url": "example.com",
    "location": "Melbourne, VIC"
  },
  "startDate": "2006-09-01",
  "endDate": "2008-03-01",
  "sections": [
    {
      "name": "responsibilities",
      "title": "I was responsible for ...",
      "items": [
        { "body": "Developing server-side scripts and applications in PHP and Python" },
        { "body": "Using JavaScript to produce dynamic interactive web applications" }
      ]
    }
  ]
}
```

### Employer

Details about the company or organisation where the role was held.

| Field      | Type     | Required | Description                                                |
|------------|----------|----------|------------------------------------------------------------|
| `name`     | `string` | ✅       | Company or organisation name (e.g., `"Greenfield Technologies"`, `"Digital Agency Co"`). |
| `url`      | `string` | ✅       | Company website domain without protocol (e.g., `"www.greenfield.dev"`). The renderer prepends `http://`. |
| `location` | `string` | ✅       | Location — can be as specific or general as you like (e.g., `"VIC"`, `"Melbourne, VIC"`, `"San Francisco, CA"`). |

---

## Education

Each entry represents a qualification, certification, or training course. Education entries can range from full degrees to short workshops — the schema is flexible enough to handle both.

| Field        | Type               | Required | Description                                                    |
|--------------|--------------------|----------|----------------------------------------------------------------|
| `course`     | `string`           | ✅       | Name of the qualification or course (e.g., `"Bachelor of Computer Science"`, `"Certified Scrum Master"`, `"AWS Solutions Architect"`). |
| `metadata`   | `EducationMeta`    | ✅       | Institution and location details. Can be sparse for informal training — at minimum provide an empty object `{}`. |
| `date`       | `string`           | ✅       | Completion or award date in ISO 8601 format (`YYYY-MM-DD`). Displayed as "Completed [Month Year]". |
| `description`| `string[]`         | ❌       | Optional array of description paragraphs. Use for brief summaries of what the course covered when you don't need the full `sections` structure. |
| `sections`   | `Section[]`        | ❌       | Optional detailed breakdowns (e.g., course contents, focus areas). Use when you want structured bullet-point lists. |

**Example — degree with course contents:**

```json
{
  "course": "Bachelor of Computer Science",
  "metadata": {
    "venue": "State University",
    "location": "VIC",
    "url": "www.stateuniversity.edu"
  },
  "date": "2002-12-01",
  "sections": [
    {
      "name": "contents",
      "title": "Course Contents",
      "items": [
        { "body": "Application development in Java, C, C++" },
        { "body": "Game development and graphics programming" },
        { "body": "Client / server web development" },
        { "body": "Database design, normalisation and development" },
        { "body": "Software Engineering practices" }
      ]
    }
  ]
}
```

**Example — short certification with description only:**

```json
{
  "course": "Certified Scrum Master",
  "metadata": {
    "venue": "Agile Academy",
    "location": "VIC",
    "url": "www.agileacademy.com"
  },
  "date": "2014-02-01",
  "description": ["Certified Scrum Master course run by a certified trainer / Agile Academy"]
}
```

**Example — online training with minimal metadata:**

```json
{
  "course": "AWS Solutions Architect Associate",
  "metadata": {
    "url": "aws.amazon.com/certification"
  },
  "date": "2023-03-15",
  "description": ["Cloud architecture certification covering compute, storage, networking, and security on AWS."]
}
```

### EducationMeta

Metadata about the institution that provided the qualification. All fields are optional — use what makes sense for the type of education.

| Field      | Type     | Required | Description                                                    |
|------------|----------|----------|----------------------------------------------------------------|
| `venue`    | `string` | ❌       | Institution or provider name (e.g., `"State University"`, `"Coursera"`, `"Agile Institute"`). Omit for self-study or well-known certifications where the URL is sufficient. |
| `location` | `string` | ❌       | Physical location if applicable (e.g., `"VIC"`, `"Online"`). Omit for online-only courses. |
| `url`      | `string` | ❌       | Website without protocol (e.g., `"www.stateuniversity.edu"`). The renderer prepends `http://`. |

---

## SkillCategory

Skills are grouped into categories. Each category has a title and a flat list of skill items. Use categories to organise skills by domain (e.g., "Web Development", "Cloud Infrastructure", "Leadership").

| Field  | Type            | Required | Description                                              |
|--------|-----------------|----------|----------------------------------------------------------|
| `title`| `string`        | ✅       | Category heading (e.g., `"Web Development"`, `"Software Development"`, `"Cloud Servers / IaaS"`, `"Leadership & Process"`). |
| `items`| `SectionItem[]` | ✅       | List of individual skills. Each item typically uses only the `body` field, but you can optionally add `title` and `url` for linked skills. |

**Example — multiple skill categories:**

```json
[
  {
    "title": "Web Development",
    "items": [
      { "body": "React with Redux / MobX" },
      { "body": "TypeScript / JavaScript (ES6+)" },
      { "body": "HTML5 and CSS3" },
      { "body": "Responsive web design using flex-box, grid, and Tailwind CSS" }
    ]
  },
  {
    "title": "Cloud & Infrastructure",
    "items": [
      { "body": "AWS (Lambda, ECS, S3, CloudFormation)" },
      { "body": "Docker and container orchestration" },
      { "body": "Terraform for infrastructure as code" }
    ]
  },
  {
    "title": "Leadership",
    "items": [
      { "body": "Leading agile/scrum teams of 5-12 engineers" },
      { "body": "Certified (and practising) Scrum Master" },
      { "body": "Mentoring junior and mid-level developers" }
    ]
  }
]
```

---

## Section

A reusable grouped list structure used within both `employment` and `education` entries. Sections let you break a role or qualification into meaningful subgroups — commonly "Responsibilities", "Accomplishments", "Achievements", or "Course Contents".

You can have as many sections per employment/education entry as you need. Common patterns:

- **Single section**: Just "Responsibilities" for junior or short-term roles.
- **Two sections**: "Responsibilities" + "Accomplishments" for most roles.
- **Multiple sections**: Separate "Achievements" by project, or split "Awards" into their own section.

| Field  | Type            | Required | Description                                                    |
|--------|-----------------|----------|----------------------------------------------------------------|
| `name` | `string`        | ✅       | Machine-friendly identifier used as an HTML `id` attribute. Should be lowercase, no spaces (e.g., `"responsibilities"`, `"accomplishments"`, `"awards-mobile"`). |
| `title`| `string`        | ✅       | Human-readable heading displayed above the list (e.g., `"I am responsible for ..."`, `"Key Accomplishments"`, `"Course Contents"`). |
| `items`| `SectionItem[]` | ✅       | Array of items in this section. Can be empty (`[]`) but the field must be present. Empty sections are not rendered. |

**Example — responsibilities section:**

```json
{
  "name": "responsibilities",
  "title": "I was responsible for ...",
  "items": [
    { "body": "Leading the digital solutions team that produces user-focused web and mobile applications" },
    { "body": "Providing architectural and technical expertise for end-to-end delivery" },
    { "body": "Mentoring and guidance of the digital solutions team" }
  ]
}
```

**Example — accomplishments section with linked projects:**

```json
{
  "name": "accomplishments",
  "title": "I accomplished ...",
  "items": [
    {
      "title": "Mobile Weather App",
      "url": "greenfield.dev/app",
      "body": "A multiple award winning Android and iOS application putting the company's data into the hands of our users."
    },
    {
      "title": "Developer Portal",
      "url": "developer.greenfield.dev",
      "body": "A modern platform allowing self-service access to the company's API offerings, built using serverless architecture."
    }
  ]
}
```

---

## SectionItem

The atomic unit of content within a section. At minimum, each item has a `body` description. Optionally, items can have a bold `title` and a linked `url` — useful for named projects, awards, or accomplishments.

| Field  | Type     | Required | Description                                                    |
|--------|----------|----------|----------------------------------------------------------------|
| `title`| `string` | ❌       | Bold title displayed before the body text. Use for project names, award titles, or anything that deserves emphasis (e.g., `"Mobile Weather App"`, `"Platform Migration"`). |
| `url`  | `string` | ❌       | Link URL without protocol (e.g., `"developer.greenfield.dev"`). Rendered as a clickable link next to the title. Only meaningful when `title` is also provided. |
| `body` | `string` | ✅       | The main description text. For items without a `title`, this is the entire content. For items with a `title`, this appears after the title as supporting detail. |

**Example — simple body-only items (most common for responsibilities and skills):**

```json
[
  { "body": "Leading a team of 5 engineers building data visualisation tools" },
  { "body": "Architecting serverless APIs using AWS Lambda and API Gateway" },
  { "body": "Defining governance and architectural principles around development standards" }
]
```

**Example — items with title and URL (for projects and accomplishments):**

```json
[
  {
    "title": "DataViz Platform",
    "url": "greenfield.dev",
    "body": "An interactive data verification environment providing access to 8+ years of forecast and observation data."
  },
  {
    "title": "Excellence Award",
    "body": "Awarded for sustained excellence in improving forecast verification systems."
  }
]
```

**Example — mixed items in a single section:**

```json
[
  { "body": "Winner - 2014 Geospatial World Technology Innovation Award (Meteorology)" },
  { "body": "Finalist - 2014 Asia-Pacific Spatial Excellence Awards" },
  {
    "title": "Industry Excellence Awards",
    "url": "www.example-awards.org",
    "body": "Winner of the 2013 Technical Excellence Award for geospatial web application development."
  }
]
```

---

## Complete Example

A full resume demonstrating all features of the schema:

```json
{
  "id": "alex-johnson",
  "name": "Alex Johnson",
  "avatar": "https://avatars0.githubusercontent.com/u/2906667",
  "role": "Engineering Lead",
  "contacts": {
    "email": "alex@example.com",
    "phone": "+1 555 987 6543",
    "github": "alexjohnson",
    "twitter": "alexj"
  },
  "header": [
    {
      "title": "About Me",
      "icon": "social-person",
      "body": [
        "I'm an experienced principal engineer and cloud architect guiding teams with their development of scalable and robust digital services.",
        "I am experienced in developing end-to-end applications in Python and TypeScript. In a past life I was a full stack developer with over 15 years experience producing web and mobile applications."
      ]
    },
    {
      "title": "What is this?",
      "icon": "action-assignment-turned-in",
      "body": [
        "It's my resume.",
        "Also, this is an over-engineered resume viewer built with modern web tooling as a learning exercise."
      ]
    }
  ],
  "employment": [
    {
      "role": "Engineering Lead",
      "employer": {
        "name": "Greenfield Technologies",
        "url": "www.greenfield.dev",
        "location": "VIC"
      },
      "startDate": "2021-07-01",
      "endDate": "now",
      "sections": [
        {
          "name": "responsibilities",
          "title": "I am responsible for ...",
          "items": [
            { "body": "Leading a team of scientific software engineers that creates tools for scientific verification" },
            { "body": "Providing architectural and technical expertise for end-to-end delivery of modern software solutions" },
            { "body": "Mentoring and guidance of the Forecast Quality software team" }
          ]
        },
        {
          "name": "accomplishments",
          "title": "I accomplished ...",
          "items": [
            {
              "title": "DataViz Platform",
              "url": "greenfield.dev",
              "body": "DataViz provides users with an interactive data verification environment and easy access to over 8 years of forecast and observation data."
            },
            {
              "title": "Insight and Innovation Award",
              "body": "Awarded for sustained excellence in improving the DataViz forecast verification system."
            }
          ]
        }
      ]
    },
    {
      "role": "Digital Solutions Lead",
      "employer": {
        "name": "Greenfield Technologies",
        "url": "www.greenfield.dev",
        "location": "VIC"
      },
      "startDate": "2016-03-01",
      "endDate": "2021-06-30",
      "sections": [
        {
          "name": "responsibilities",
          "title": "I am responsible for ...",
          "items": [
            { "body": "Leading the digital solutions team that produces user-focused web and mobile applications" },
            { "body": "Leading the implementation of a large-scale serverless cloud API platform" }
          ]
        },
        {
          "name": "accomplishments",
          "title": "I accomplished ...",
          "items": [
            {
              "title": "Mobile Weather App",
              "url": "greenfield.dev/app",
              "body": "A multiple award winning Android and iOS application putting the company's data into the hands of our users."
            }
          ]
        }
      ]
    }
  ],
  "education": [
    {
      "course": "Certified Agilist - SAFe 4.5",
      "metadata": {
        "venue": "Agile Institute",
        "location": "VIC",
        "url": "www.example-agile.com"
      },
      "date": "2017-05-01",
      "description": ["Certified Agilist - Leading SAFe course run by a certified training provider"]
    },
    {
      "course": "Bachelor of Computer Science",
      "metadata": {
        "venue": "State University",
        "location": "VIC",
        "url": "www.stateuniversity.edu"
      },
      "date": "2002-12-01",
      "sections": [
        {
          "name": "contents",
          "title": "Course Contents",
          "items": [
            { "body": "Application development in Java, C, C++" },
            { "body": "Game development and graphics programming" },
            { "body": "Client / server web development" },
            { "body": "Database design, normalisation and development" }
          ]
        }
      ]
    }
  ],
  "skills": [
    {
      "title": "Web Development",
      "items": [
        { "body": "React with Redux / MobX" },
        { "body": "TypeScript / JavaScript (ES6+)" },
        { "body": "GraphQL using Relay" },
        { "body": "HTML5 and CSS3" }
      ]
    },
    {
      "title": "Software Development",
      "items": [
        { "body": "Leading agile scrum / devops teams" },
        { "body": "Certified (and practising) Scrum Master" },
        { "body": "Test-driven development using Karma/Mocha, Codeception and PHPUnit" }
      ]
    },
    {
      "title": "Cloud & Infrastructure",
      "items": [
        { "body": "Application development and deployment using AWS" },
        { "body": "Using cloud to properly distribute application workloads" },
        { "body": "Experience building HA clusters with VMWare vSphere and OpenStack" }
      ]
    }
  ]
}
```

---

## Notes

- **Dates** use ISO 8601 format (`YYYY-MM-DD`). Use the literal string `"now"` for ongoing/current positions — the renderer displays this as "Present". The day component is typically `01` since most resumes only track month granularity.
- **URLs** are stored without the protocol prefix (`http://` or `https://`). The renderer prepends the appropriate protocol when creating links. This keeps the data clean and display-agnostic.
- **Ordering** is significant — items render in array order. Place most recent entries first for employment and education. Skills categories render top-to-bottom.
- **The `icon` field** in HeaderSection is a legacy field from the original Material Design Icons implementation. Modern renderers may ignore it or map it to an icon library of their choice (e.g., Lucide, Heroicons).
- **Empty sections** (where `items` is `[]`) are automatically hidden by the renderer. You can include them in the data for completeness without affecting the displayed output.
- **The `id` field** must match the filename. If your file is `alex-johnson.json`, the `id` must be `"alex-johnson"`. This is used for routing and internal lookups.
- **Multiple roles at one employer** should be separate employment entries, each with their own date range. This makes career progression clear.
