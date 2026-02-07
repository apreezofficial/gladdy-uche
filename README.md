# 💍 Gladdy-Uchenna Proposal Website

## 🎉 What This Is
A beautiful, personalized proposal website from **Uchenna** to **Gladys**, featuring:
- Stunning honey/gold color theme
- Interactive honeycomb memory grid
- Romantic animations and effects
- Background music (Ed Sheeran's "Perfect")
- Celebration page with confetti

## 🚀 How to Use

### 1. **Add the Music File** (REQUIRED)
- Purchase "Perfect" by Ed Sheeran legally from iTunes, Amazon Music, etc.
- Save it as `perfect.mp3`
- Place it in: `public/music/perfect.mp3`
- The song will auto-play on the "Yes" page

### 2. **Customize the Memories**
Edit `app/proposal/page.tsx` and update the `MEMORIES` array (lines 13-22):
```typescript
const MEMORIES: HoneycombItem[] = [
    { id: 1, type: "text", content: "Your memory here..." },
    { id: 2, type: "image", content: "https://your-image-url.com/photo.jpg" },
    // Add more memories...
];
```

### 3. **Run the Website**
```bash
npm run dev
```
Visit: `http://localhost:3000`

## 📁 Project Structure
```
gladdy-uchenna/
├── app/
│   ├── page.tsx                    # Landing page (For My Gladys, From Uchenna)
│   ├── proposal/
│   │   ├── page.tsx                # Main proposal with honeycomb grid
│   │   └── yes/
│   │       └── page.tsx            # Celebration page (confetti + music)
│   ├── components/
│   │   └── ui/
│   │       ├── HoneyComb.tsx       # Interactive honeycomb component
│   │       └── bg/
│   │           ├── HoneycombBackground.tsx  # Honey-themed background
│   │           └── Love.tsx        # Floating hearts animation
│   └── globals.css                 # Global styles (honey theme)
└── public/
    └── music/
        └── perfect.mp3             # ⚠️ YOU NEED TO ADD THIS FILE

```

## 🎨 Color Theme
**Honey/Amber Palette:**
- Deep Black: `#0f0a00`
- Soft Cream: `#ffeedd`
- Amber Accent: `#d97706`
- Gold Highlights: `#fbbf24`, `#f59e0b`

## 🎯 User Journey
1. **Landing Page** → "For My Gladys, From Uchenna with Love"
2. Click **"View"** button
3. **Proposal Page** → Tap honeycomb hexagons to reveal memories
4. After all revealed → "Will You Marry Me?" appears
5. Click **"Yes, I Will!"** button
6. **Celebration Page** → Confetti + Music + Love message

## 🛠️ Technologies Used
- **Next.js 16** (React framework)
- **Tailwind CSS 4** (Styling)
- **Framer Motion** (Animations)
- **React Confetti** (Celebration effects)
- **TypeScript** (Type safety)

## 📝 Customization Tips

### Change Partner Name
In `app/proposal/page.tsx`:
```typescript
const PARTNER_NAME = "Gladys"; // Change this
```

### Change Proposal Message
```typescript
const PROPOSAL_MESSAGE = "Will You Marry Me?"; // Change this
```

### Add More Memories
You can add as many honeycomb items as you want. Mix text and images:
```typescript
{ id: 9, type: "text", content: "Another sweet memory..." },
{ id: 10, type: "image", content: "/images/our-photo.jpg" },
```

### Adjust Music Volume
In `app/proposal/yes/page.tsx`:
```typescript
audio.volume = 0.5; // 0.0 to 1.0 (50% volume)
```

## 🎵 Music Setup (IMPORTANT!)

### Option 1: Local File (Recommended - Faster)
1. Buy the song legally
2. Save as `public/music/perfect.mp3`
3. Done! It will auto-play

### Option 2: Use a Different Song
Replace the file path in `app/proposal/yes/page.tsx`:
```typescript
const audio = new Audio('/music/your-song.mp3');
```

### Option 3: Use YouTube/Streaming (Not Recommended)
You'd need to use an embed player, which is less reliable for autoplay.

## 🌐 Deployment

### Deploy to Vercel (Free & Easy)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!
5. Share the URL with Gladys

### Before Deploying:
- ✅ Add the music file
- ✅ Customize all memories
- ✅ Test locally first
- ✅ Make sure images are accessible online

## 📱 Mobile Responsive
The entire website is fully responsive and looks great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 🎁 Special Features
- ✨ Smooth animations throughout
- 🍯 Honey-themed color palette
- 💝 Floating hearts background
- 🎊 Confetti celebration
- 🎵 Background music
- 📱 Touch-friendly hexagons
- ⚡ Fast loading times
- 🔒 Client-side only (private)

## 💡 Tips for the Big Moment
1. **Test everything** before showing Gladys
2. **Use headphones or speakers** for the music
3. **Full screen mode** for best experience
4. **Good internet connection** if using online images
5. **Have tissues ready** 😭❤️

## 🐛 Troubleshooting

### Music not playing?
- Check if `perfect.mp3` exists in `public/music/`
- Some browsers block autoplay - click anywhere on the page first
- Check browser console for errors (F12)

### Images not loading?
- Make sure image URLs are publicly accessible
- Use HTTPS URLs, not HTTP
- Check image file sizes (keep under 1MB for faster loading)

### Honeycomb not revealing?
- Make sure you're clicking/tapping the hexagons
- Check browser console for JavaScript errors

## 📞 Need Help?
- Check the browser console (F12) for errors
- Make sure all dependencies are installed: `npm install`
- Restart the dev server: `npm run dev`

## ❤️ Final Notes
This is a labor of love from Uchenna to Gladys. May your journey together be as sweet as honey! 🍯💍

**Good luck, Uchenna! You've got this!** 🎉

---
*Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion*
