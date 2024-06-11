Assignment Blueprint for backend
===============================

You will be working on migrating a Next.js application from the `pages` directory to the new `app` router.

## Project features:
`NextAuth.js` to handle authentication in a `Next.js` app.
`i18next` to handle internationalization. 
`NProgress` to show a progress bar at the top when a page changes.

the application uses a fake API for login and registration: [DummyJSON Auth API](https://dummyjson.com/docs/auth#auth-login).

## Task Requirements
Your main task is to migrate the application from the `pages` dir to the new `app` router. While doing so, you are required to:

Implement authentication and localization without using any third-party libraries.
Enable i18n routing.
Improve the current form state and validation using best practices.

## Getting Started
Follow these steps to set up the project locally:

#### Clone the repository:
```base
git clone [REPO_URL]
cd [REPO_NAME]
```

#### Install dependencies:

```base
npm install
```

#### Copy the .env.example file to .env and add the necessary values for the keys:
```base
cp .env.example .env
```
#### Start the development server:
```base
npm run dev
```

## Project Structure

- `contextes/`
  - `AppContext.tsx`
  - `AuthContext.tsx`
  - `ToastContext.tsx`
- `hooks/` - Custom hooks used in the application.
- `store/` - Redux store setup.
- `types/` - TypeScript types.
- `utils/` - Utility helpers.
- `pages/` - Contains app pages.
- `public/` - Contains public eg: (locales).
- `styles/` - Contains global styles.
- `next-i18next.config.js` - i18next config

## Your Task

### 1. Migrate to App Router
- Move the application from the `pages` directory to the new `app` router in Next.js.

### 2. Implement Authentication and Localization
- Implement authentication and localization from scratch without using any third-party libraries.

### 3. Enable i18n Routing
- Implement i18n routing to support multiple languages.

### 4. Improve forms State and Validation
- Review the current implementation of the forms state and validation.
- Identify areas that can be improved using best practices.
- Implement the improvements.

## Submission

Once you have completed the task, submit your changes by pushing to a new branch and creating a pull request. Include a detailed description of the changes you made and any additional improvements or features you implemented.
