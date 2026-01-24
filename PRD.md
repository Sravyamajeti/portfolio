
**Tech Stack:**
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React

**The Core Concept: "The Memoji Guide"**
The site features a fixed "Memoji" character in the bottom-right corner. As the user scrolls through different sections, this character changes its image and the text in its speech bubble to match the context.

**Step 1: Create the "MemojiGuide" Component**
- It must be fixed position (bottom-right).
- It takes `activeSection` as a prop.
- Use `AnimatePresence` to crossfade between images smoothly.
- It should display a speech bubble above the image.

**Step 2: Create the Main Page Structure (Sections)**
Use an Intersection Observer hook to track which section is currently in view and update the `activeSection` state.

**Content & Logic Requirements:**

**1. HERO SECTION (id="hero")**
- **Memoji State:** 'wave' (Placeholder color: Blue)
- **Speech Bubble:** "Hi! I’m Sravya’s Digital Twin. Welcome to my product journey!"
- **Content:**
  - H1: "Building 0→1 Platforms for the Creator Economy & Fintech"
  - Sub: "Senior Product Manager with 9+ years experience scaling products from concept to revenue."
  - Tagline: "Strategy | AI | Execution"
  - Button: "Start the Tour" (Scroll to About)

**2. ABOUT SECTION (id="about")**
- **Memoji State:** 'coffee' (Placeholder color: Green)
- **Speech Bubble:** "IIT Kharagpur alum turned Product Leader. I love turning chaos into structure."
- **Content:**
  - H2: "The Engineer Who Speaks 'Business'"
  - Body: "I hold a Dual Degree from IIT Kharagpur. My superpower is closing the loop between technical workflows and user delight."
  - **Stats Grid:**
    - "$800K ARR" (Scaled SaaS product from 0 to Revenue)
    - "1.5M Users" (Launched massive scale FinTech platforms)
    - "4 Industries" (Creator Tech, EdTech, FinTech, & Mobility)

**3. WORK SECTION (id="work")**
- **Memoji State:** 'laptop' (Placeholder color: Purple)
- **Speech Bubble:** "Here are a few things I built that I'm proud of."
- **Content (Cards):**
  - **Card A (Only Much Louder):** "Spearheaded a SaaS platform and built an in-house NSFW AI safety transformer. Achieved 80% client retention and reduced account setup time by 40%."
  - **Card B (Nuclei):** "Bootstrapped a B2B2C super-app ecosystem. Built 'Smart Vendor Routing' logic that increased revenue by 35%."
  - **Card C (ProAlley):** "Sole PM launching the learner experience for 14 courses. Removed 100% of developer dependency for course launches."

**4. COMMUNITY & SKILLS (id="community")**
- **Memoji State:** 'heart' (Placeholder color: Pink)
- **Speech Bubble:** "I build communities, not just products."
- **Content:**
  - **Leadership:** Director of Expansion for Feed India NGO | Mentor at Creators of Products Community.
  - **Tech Stack:** AI/ML (Falcon 7B), SQL/Analytics, GDPR Compliance.

**5. CONTACT (id="contact")**
- **Memoji State:** 'phone' (Placeholder color: Orange)
- **Speech Bubble:** "Let's build the next big thing together. Say hi!"
- **Content:**
  - H2: "Ready to Chat?"
  - Sub: "Based in Fremont, CA. Open to opportunities."
  - Links: sravya.iitkgp@gmail.com | LinkedIn | Roblox Portfolio

**Implementation Details:**
- Since I don't have the PNG files yet, please use **colored circular divs with an Emoji inside them** as placeholders for the Memoji images so I can see the code working immediately.
- Use a clean, minimalist font (Inter or Geist).
- Ensure the layout is fully responsive (Memoji moves to bottom-center on mobile).

Please write the complete code for `page.tsx` (the main logic) and `components/MemojiGuide.tsx`.
