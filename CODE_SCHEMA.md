# Todo List Application - Code Schema

## Project Overview
This is a **multi-module Gradle project** with:
- **Backend**: Spring Boot (Java) application
- **Frontend**: Angular (TypeScript) application

---

## 📁 MAIN DEVELOPMENT PARTS (Source Code)

These are the files written by developers that contain the actual application logic:

### Root Configuration Files
```
todo-list/
├── build.gradle                    # Root Gradle configuration
├── settings.gradle                 # Gradle multi-project settings
├── gradle.properties               # Project version and dependency versions
├── gradlew / gradlew.bat          # Gradle wrapper scripts
└── README.md                       # Project documentation
```

### Backend Module (`todo-list-backend/`)

#### Source Code (`src/main/`)
```
todo-list-backend/src/
├── main/
│   ├── java/com/todo/
│   │   └── TodoApplication.java    # ⭐ MAIN: Spring Boot application entry point
│   │
│   └── resources/
│       ├── application.yml          # ⭐ MAIN: Spring Boot configuration (DB, server port)
│       └── import.sql              # ⭐ MAIN: Initial database seed data
│
└── test/                           # Test source code (currently empty)
```

**Key Files:**
- `TodoApplication.java`: Main Spring Boot application class
- `application.yml`: Database configuration (H2 in-memory), server port (8099), JPA settings
- `import.sql`: SQL seed data for initial todos

#### Build Configuration
```
todo-list-backend/
└── build.gradle                    # ⭐ MAIN: Backend dependencies (Spring Boot, JPA, H2)
```

### Frontend Module (`todo-list-frontend/`)

#### Source Code (`src/`)
```
todo-list-frontend/src/
├── app/
│   ├── app.component.ts            # ⭐ MAIN: Root component with search and todo list
│   ├── app.component.scss          # ⭐ MAIN: Root component styles
│   ├── app.module.ts               # ⭐ MAIN: Angular module configuration
│   │
│   ├── todo.service.ts             # ⭐ MAIN: Service with mock data and API methods
│   │
│   ├── todo-item/
│   │   ├── todo-item.component.ts  # ⭐ MAIN: Individual todo item component
│   │   └── todo-item.component.scss # ⭐ MAIN: Todo item styles
│   │
│   └── progress-bar/
│       ├── progress-bar.component.ts    # ⭐ MAIN: Loading progress bar component
│       └── progress-bar.component.scss  # ⭐ MAIN: Progress bar styles
│
├── index.html                      # ⭐ MAIN: HTML entry point
├── main.ts                         # ⭐ MAIN: Angular bootstrap file
├── polyfills.ts                    # ⭐ MAIN: Browser compatibility polyfills
├── styles.scss                     # ⭐ MAIN: Global styles
│
└── environments/
    ├── environment.ts              # ⭐ MAIN: Development environment config
    └── environment.prod.ts         # ⭐ MAIN: Production environment config
```

**Key Files:**
- `app.component.ts`: Main component displaying todo list and search
- `todo.service.ts`: Service providing mock data (currently using fake data, needs backend integration)
- `todo-item.component.ts`: Component for rendering individual todo items
- `progress-bar.component.ts`: Loading indicator component

#### Build Configuration
```
todo-list-frontend/
├── build.gradle                    # ⭐ MAIN: Node.js/Gradle integration
├── package.json                    # ⭐ MAIN: NPM dependencies and scripts
├── package-lock.json               # ⭐ MAIN: Locked NPM dependency versions
├── angular.json                    # ⭐ MAIN: Angular CLI configuration
├── proxy.config.json               # ⭐ MAIN: Development proxy config (routes /api to backend)
├── tsconfig.json                   # ⭐ MAIN: TypeScript compiler configuration
└── tsconfig.app.json               # ⭐ MAIN: TypeScript app-specific config
```

---