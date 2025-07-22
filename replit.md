# Portfolio Website

## Overview

This is a full-stack portfolio website built with a React frontend and Express backend. The application showcases a developer's professional journey, projects, and personal interests through an elegant, responsive design. The project uses modern web development tools including TypeScript, Tailwind CSS, Shadcn/ui components, and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a clean monorepo structure with separate client and server directories, shared components, and centralized configuration. The architecture is designed for scalability and maintainability with clear separation of concerns.

### Directory Structure
- `/client` - React frontend application with Vite build system
- `/server` - Express.js backend with TypeScript
- `/shared` - Common schemas and types used by both client and server
- Root-level configuration files for various tools and services

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Styling**: Tailwind CSS with custom design system including pastel color palette
- **UI Components**: Comprehensive Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: TSX for TypeScript execution in development
- **Build**: ESBuild for production bundling
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Storage**: Modular storage interface with in-memory implementation for development

### Component Organization
The frontend uses a well-structured component hierarchy:
- **Pages**: Main route components (Home, 404)
- **Sections**: Major content sections (About, Journey Timeline, Projects, Hobbies, Contact)
- **UI Components**: Reusable Shadcn/ui components
- **Utilities**: Helper functions and configurations

## Data Flow

### Frontend Data Management
- React Query handles server state, caching, and synchronization
- Custom query client with error handling and authentication logic
- Toast notifications for user feedback
- Responsive design with mobile-first approach

### Backend Data Flow
- Express middleware for JSON parsing and request logging
- Modular route registration system
- Error handling middleware with structured error responses
- Storage interface abstraction for easy database switching

### Database Schema
Current schema includes:
- **Users table**: Basic user authentication with username/password
- Drizzle schema with Zod integration for type-safe operations
- Migration system for schema version control

## External Dependencies

### Core Frontend Libraries
- **React ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives with Shadcn/ui components
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Forms & Validation**: React Hook Form, Zod resolvers
- **Utilities**: date-fns, nanoid, cmdk

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx, esbuild for build processes

### Development Tools
- **TypeScript**: Comprehensive type checking across the stack
- **Vite**: Development server with HMR and build optimization
- **Replit Integration**: Runtime error overlay and cartographer plugins
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: ESBuild creates a single bundled Node.js application
- **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- Development and production environment separation
- Environment variables for database connections and API keys
- Replit-specific development enhancements

### Hosting Considerations
- Static frontend can be served via CDN or static hosting
- Backend requires Node.js environment with PostgreSQL database
- Session storage requires persistent database connection
- Development mode includes Replit-specific tooling and banners

### Database Management
- PostgreSQL database with Drizzle ORM
- Migration system for schema version control
- Environment-based database URL configuration
- Session storage integrated with PostgreSQL

The application is designed to be easily deployable to various platforms while maintaining development-friendly tooling and clear separation between frontend and backend concerns.