# Clash Tools

A modern web application built with Next.js that provides useful tools and utilities for Clash of Clans players.

## Features

- Village tracking and management
- Ore calculators
- Data analytics and statistics

## Tech Stack

- **Framework**: Next.js 15
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Styling**: Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up your environment variables:

```bash
# Database Configuration
DATABASE_URL=           # PostgreSQL connection string for your database

# Authentication Configuration
BETTER_AUTH_URL=       # Your Better Auth URL
BETTER_AUTH_SECRET=    # Your Better Auth secret key

# Google OAuth Configuration
GOOGLE_CLIENT_ID=      # Your Google OAuth client ID
GOOGLE_CLIENT_SECRET=  # Your Google OAuth client secret
```

4. Start the development server:

```bash
pnpm dev
```

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
