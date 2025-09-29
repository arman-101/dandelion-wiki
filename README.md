# The Dandelion Dynasty Wiki

A fan-made, comprehensive, and beautifully designed encyclopedia for Ken Liu's epic silkpunk saga, *The Dandelion Dynasty*. This project aims to be a meticulously detailed and easy-to-navigate resource for both new readers and longtime fans.

## ✨ Features

### 📚 **Comprehensive Content Coverage**
- **4 Complete Books**: Detailed summaries and analysis of all books in the series
  - *The Grace of Kings* - The founding of the Dandelion Dynasty
  - *The Wall of Storms* - The Lyucu invasion and its aftermath
  - *The Veiled Throne* - The occupation and resistance
  - *Speaking Bones* - The final confrontation and resolution

- **Characters**: Extensive character profiles including:
- **Places**: Complete geographical coverage
- **Gods**: Complete pantheon coverage with mythology and appearances
- **Concepts**: In-depth exploration of silkpunk technology and world-building
- **Maps**: Visual representations of the world of Dara and beyond

### 🔍 **Advanced Search & Navigation**
- **Live Search**: Real-time search across all 100+ wiki pages
- **Smart Filtering**: Search results categorized by content type
- **Cross-References**: Extensive internal linking between related articles
- **Complete Site Index**: Alphabetical listing of all pages by category

### 🎨 **User Experience Features**
- **Light & Dark Mode**: Beautiful theme switcher for comfortable reading
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, accessible design inspired by the series' aesthetic
- **Feedback System**: User feedback collection for continuous improvement

## 🛠️ Tech Stack

- **Next.js 15.4.4** – React Framework for modern, fast web applications
- **React 19.1.0** – UI library for building interactive components
- **TypeScript 5** – For static typing and improved code quality
- **Tailwind CSS 3.4.17** – For utility-first styling and responsive design
- **next-themes** – For seamless light/dark mode switching
- **Vercel Analytics** – For performance monitoring and insights
- **Lucide React** – For beautiful, consistent icons

## 🎨 A Note on Art

Much of the character, conceptual, and location artwork on this wiki was generated using AI. This was done to provide rich visual representations where official or fan-created art is scarce, helping to bring the vibrant world of Dara to life. All artwork is used for educational and fan appreciation purposes.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd dandelion-wiki
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to explore the wiki

## 📝 Contributing

This is a fan project celebrating Ken Liu's *The Dandelion Dynasty* series. While contributions are welcome, please ensure all content respects the original work and follows fair use guidelines.

### How to Contribute (Fork & PR)

1. Fork the repository
   - Repository: [`arman-101/dandelion-wiki`](https://github.com/arman-101/dandelion-wiki)
2. Create a feature branch
   ```bash
   git checkout -b feat/add-kuni-garu-page
   ```
3. Make your changes locally and run the app
   ```bash
   npm install
   npm run dev
   ```
4. Commit with a clear message
   ```bash
   git add .
   git commit -m "feat(characters): add Kuni Garu page and register in index"
   ```
5. Push and open a Pull Request (PR)
   ```bash
   git push origin feat/add-kuni-garu-page
   ```
   - In your PR, briefly describe what you added/changed and include screenshots if UI-related.

### Content Guidelines

- Be faithful to the canon (book references welcome and encouraged).
- Keep tone neutral and encyclopedic.
- Prefer concise sections over long walls of text.
- Use internal links for cross-references where relevant (e.g., `/characters/jia-matiza`).
- Add citations using the existing reference structure when possible.

### How to Add or Update Pages

The site uses statically defined page data objects and master indexes for listing/search. Pages live under category folders, and summary cards come from `app/data/wiki-data.ts`.

General rules:
- Slugs are lowercase and hyphenated (e.g., `kuni-garu`).
- Images go in `public/<category>/<slug>.png` (PNG preferred).
- Register the page in the corresponding master list so it appears on index pages and search.

#### Characters
1. Create a new page file by copying an existing one (e.g., `app/characters/kuni-garu/page.tsx`).
   - Path: `app/characters/<slug>/page.tsx`
   - Export a `Character`-shaped `characterData` object and render it with `PageTemplate`.
2. Add/replace an image at `public/characters/<slug>.png`.
3. Register it in `app/data/wiki-data.ts` by adding an entry to `ALL_CHARACTERS_DATA`:
   - Include `name`, `description`, `image`, and `link` (e.g., `"/characters/<slug>"`).
   - The `ALL_CHARACTERS` export is generated from `ALL_CHARACTERS_DATA` automatically.

#### Places
1. Create a new page at `app/places/<slug>/page.tsx` (copy any place page as a template).
2. Add `public/places/<slug>.png`.
3. Register it by appending an item to `ALL_PLACES_DATA` in `app/data/wiki-data.ts`:
   - Provide `name`, `description`, `image`, `link`, and `category` (e.g., `"state" | "city" | "island" | "landmark" | "beyond" | "etc"`).
   - `ALL_PLACES` is generated from `ALL_PLACES_DATA`.

#### Gods
1. Create a new page at `app/gods/<slug>/page.tsx`.
2. Add `public/gods/<slug>.png`.
3. Register it by adding to `ALL_GODS` in `app/data/wiki-data.ts`:
   - `{ title: '<Name>', path: '/gods/<slug>', type: 'God' }`.

#### Concepts
1. Create a new page at `app/concepts/<slug>/page.tsx`.
2. Add `public/concepts/<slug>.png`.
3. Register it by adding to `ALL_CONCEPTS_DATA` in `app/data/wiki-data.ts`.
   - `ALL_CONCEPTS` is generated from `ALL_CONCEPTS_DATA`.

### Updating Existing Pages

- Edit the relevant `page.tsx` file under its category (e.g., `app/characters/<slug>/page.tsx`).
- If you change the image, update the file in `public/<category>/<slug>.png` and ensure the path matches.
- If you change a page name or slug, also update its entry in `app/data/wiki-data.ts` so listings/search stay correct.

### Local Validation Checklist

- `npm run dev` starts without errors.
- New page renders at the correct route (e.g., `/characters/<slug>`).
- Appears in the category index page and in global search.
- Links in the infobox and content blocks resolve correctly.

### Credits & Attribution

- PR authors will be credited in the Contributors section of the repository and optionally in page footers when applicable.
- Please include source notes or book chapter references in your PR description for factual additions.
- Artwork and images: if you contribute original art, include how you want to be credited; AI-generated images will be marked accordingly.
- **Icons**: Tree icon by [Flaticon](https://www.flaticon.com/free-icon/tree_1067751) - used under their free license.
- **Pin Icon**: Pin icon by [Flaticon](https://www.flaticon.com/free-icon/pin_149059) - used for places images under their free license.

### Support the Project

If you find this project useful and want to support continued development and content curation, donations are appreciated:

- Buy Me a Coffee: `https://buymeacoffee.com/darknebulax1`

## 📄 License

This project is created for educational and fan appreciation purposes. All original content belongs to Ken Liu and his publishers. This wiki is not affiliated with or endorsed by the author or publishers.

---

*"The dandelion seed that rides the wind to find new soil is the most resilient of all."* - Kuni Garu