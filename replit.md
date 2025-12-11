# Milsoy Yapı - Portfolio Website

## Overview
A premium portfolio website for **Milsoy Yapı**, a construction and decoration firm based in Muğla & Milas, Turkey. The site features a sophisticated dark & gold theme designed to convey trust, prestige, and craftsmanship.

## Current State
- **Complete**: Full single-page portfolio with Hero, Services, Trust signals, Contact form, and Footer sections
- **Working**: Contact form submissions stored in memory
- **Tested**: End-to-end tests passed for all sections and form functionality
- **Language**: Turkish (lang="tr")

## Project Architecture

### Frontend (client/src/)
```
pages/
  Home.tsx          - Main landing page composing all sections
  not-found.tsx     - 404 page

components/
  Header.tsx        - Fixed navigation with mobile menu, smooth scroll
  HeroSection.tsx   - Full-screen cinematic hero with CTA buttons
  ServicesSection.tsx - 5-service grid with AI-generated images
  TrustSection.tsx  - Trust signals and statistics (500+ customers, 15+ years)
  ContactSection.tsx - Contact form with react-hook-form + Zod validation
  Footer.tsx        - Mega footer with links, contact info, social icons
  ui/               - Shadcn UI components
```

### Backend (server/)
```
routes.ts   - API endpoint: POST /api/contact
storage.ts  - In-memory storage for contact requests
```

### Shared (shared/)
```
schema.ts   - Drizzle schemas for users and contact_requests
```

## Key Design Decisions
- **Theme**: Dark (#0A0A0A background) with metallic gold (#D4AF37) accents
- **Font**: Montserrat for premium feel
- **Approach**: Mobile-first responsive design
- **Images**: AI-generated luxury interior/construction images
- **Form**: Uses react-hook-form with Zod schema validation

## API Endpoints
- `POST /api/contact` - Submit contact request (name*, phone*, email, service*, message)
  - Returns: Created contact request object with id and timestamp

## Services Offered
1. Anahtar Teslim Tadilat (Turnkey Renovation)
2. Profesyonel Boya (Professional Painting)
3. Seramik & Fayans (Ceramics & Tiles)
4. Alçıpan & Asma Tavan (Plasterboard & Suspended Ceiling)
5. Dış Cephe İzolasyonu (Facade Insulation)

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection (available for future persistence upgrade)
- `SESSION_SECRET` - Session management

## User Preferences
- Turkish language interface
- Dark & gold luxury aesthetic
- Target audience: Premium homeowners in Muğla & Milas region
