# Simple Portfolio Template

A clean, responsive portfolio template built with Next.js 15, Tailwind CSS, and Shadcn/UI. Perfect for developers, creators, and anyone looking to showcase their work with a modern web presence. Designed to be easily customizable and deployable to Arweave using Arlink.

Click me for video guide 👇

## Features

- 🎨 Clean, minimal design
- 📱 Fully responsive
- 🔧 Easy to customize

## Quick Start

1. Fork this repository
2. Clone your forked repository:

```bash
git clone https://github.com/YOUR_USERNAME/arweave-web-portfolio-template
cd arweave-web-portfolio-template
```

3. Install dependencies:

```bash
npm install
# or
pnpm install
```

4. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

## Customization Guide

### 1. Personal Information

Edit the following files to add your information:

- `src/lib/constants.ts`:

  - Update `CONTACT_EMAIL`
  - Modify `EMAIL_SUBJECT`

- `src/components/hero.tsx`:
  - Change name, tagline, and introduction
  - Update social media links

### 2. Content Sections

- `src/components/about.tsx`:

  - Modify the about text
  - Update your background information

- `src/components/work.tsx`:
  - Add your projects in the projects array
  - Update project images (store in `public/` directory)

### 3. Social Links

Update all social media links in:

- Hero section
- Footer section
- Navigation menu

### 4. Images

Replace the following images in the `public/` directory:

- `pfp.png` (your profile picture)
- Project images
- Any other custom images

## Deployment

1. Build your site:

```bash
npm run build
# or
pnpm build
```

2. Deploy to Arweave using Arlink:
   [Link to deployment tutorial video will be added]

## Learn More

- [Framer Marketplace](https://www.framer.com/marketplace/)
- [v0](https://v0.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com)
- [Arweave](https://arweave.org)
- [Arlink](https://arlink.app)
- [ArNS](https://arns.app/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this template for your own portfolio!
