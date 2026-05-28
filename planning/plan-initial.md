FairMed International — Single Page Website Plan                                                                             
                                                                                                                              
 Core Mentality                                                                                                               
                                                                                                                              
 Design Philosophy                                                                                                            
                                                                                                                              
 - Monochrome — Black, white, grays only                                                                                      
 - Source Serif 4 — Headlines, key text                                                                                       
 - Inter — Body, UI elements                                                                                                  
 - Sharp edges — No rounded corners (0-4px max)                                                                               
 - Generous whitespace — When in doubt, add more space                                                                        
                                                                                                                              
 Feel: "Smooth as Fuck"                                                                                                       
                                                                                                                              
 The page should feel:                                                                                                        
 - Effortless scrolling — Subtle scroll animations, nothing jarring                                                           
 - Fast — No heavy images, no JavaScript bloat                                                                                
 - Responsive — Perfect on mobile, tablet, desktop                                                                            
 - Quiet confidence — No flashy animations, just subtle polish                                                                
                                                                                                                              
 Implementation details:                                                                                                      
 /* Smooth scrolling */                                                                                                       
 html { scroll-behavior: smooth; }                                                                                            
                                                                                                                              
 /* Subtle hover transitions on everything interactive */                                                                     
 a, button { transition: all 0.2s ease; }                                                                                     
                                                                                                                              
 /* Fade-in on scroll (CSS only via animation) */                                                                             
 @keyframes fadeInUp {                                                                                                        
   from { opacity: 0; transform: translateY(20px); }                                                                          
   to { opacity: 1; transform: translateY(0); }                                                                               
 }                                                                                                                            
 section { animation: fadeInUp 0.6s ease-out; }                                                                               
                                                                                                                              
 /* Fast font loading */                                                                                                      
 @font-face { font-display: swap; }                                                                                           
                                                                                                                              
 Technical requirements:                                                                                                      
 - Smooth scroll behavior (scroll-behavior: smooth)                                                                           
 - All transitions: 0.2s ease (subtle, not sluggish)                                                                          
 - Subtle fade-in on scroll (CSS only, no JS libraries)                                                                       
 - Fast font loading (preconnect, font-display: swap)                                                                         
 - Optimized images (WebP, lazy loading)                                                                                      
 - No carousels, no sliders, no popups                                                                                        
 - No JavaScript animation libraries (no GSAP, no Framer Motion)                                                              
                                                                                                                              
 ---                                                                                                                          
 Bloat Policy                                                                                                                 
                                                                                                                              
 NO:                                                                                                                          
                                                                                                                              
 - Cookie banners (no cookies = no banner needed)                                                                             
 - Chat widgets                                                                                                               
 - Pop-ups                                                                                                                    
 - Carousels/sliders                                                                                                          
 - Auto-playing anything                                                                                                      
 - Stock photos of doctors                                                                                                    
 - Animations that delay content                                                                                              
 - "Loading" spinners                                                                                                         
 - Social media feeds                                                                                                         
 - Newsletter signup popups                                                                                                   
                                                                                                                              
 YES:                                                                                                                         
                                                                                                                              
 - Static images (optimized)                                                                                                  
 - Subtle hover states                                                                                                        
 - Smooth scroll                                                                                                              
 - Simple fade-in on scroll (optional, CSS-only)                                                                              
                                                                                                                              
 ---                                                                                                                          
 Writing Style                                                                                                                
                                                                                                                              
 Rules:                                                                                                                       
                                                                                                                              
 1. No fluff — Every word earns its place                                                                                     
 2. Specific > vague — "$1,500" not "affordable", "24 hours" not "fast"                                                       
 3. Short sentences — Max 20 words                                                                                            
 4. No superlatives — No "best", "leading", "world-class"                                                                     
 5. No marketing speak — No "solutions", "leverage", "synergy"                                                                
 6. Benefits > features — "Works during power outages" not "Built-in battery"                                                 
 7. Active voice — "We source" not "Equipment is sourced"                                                                     
                                                                                                                              
 Tone:                                                                                                                        
                                                                                                                              
 - Direct, not aggressive                                                                                                     
 - Confident, not arrogant                                                                                                    
 - Professional, not corporate                                                                                                
 - Human, not robotic                                                                                                         
                                                                                                                              
 Example transformations:                                                                                                     
 ┌──────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────┐       
 │                                   Bad                                    │                  Good                   │       
 ├──────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┤       
 │ "We are committed to providing high-quality medical equipment solutions" │ "Certified equipment. Fair prices."     │       
 ├──────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┤       
 │ "Our team of experts ensures..."                                         │ "Every device is tested and certified." │       
 ├──────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┤       
 │ "Affordable pricing options"                                             │ "$1,500 – $2,500"                       │       
 ├──────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┤       
 │ "Fast response times"                                                    │ "24-hour response"                      │       
 └──────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────┘       
 ---                                                                                                                          
 What We Can Actually Claim                                                                                                   
                                                                                                                              
 ✅ CAN claim (verified):                                                                                                     
                                                                                                                              
 - CE certified equipment (from suppliers)                                                                                    
 - ISO 13485 compliant suppliers                                                                                              
 - 1-year warranty (business decision — keep)                                                                                 
 - 24-hour WhatsApp response (commitment)                                                                                     
 - NAFDAC documentation support                                                                                               
 - Direct European sourcing                                                                                                   
 - 20-40% lower than broker prices (based on research)                                                                        
                                                                                                                              
 ⚠️ Claim carefully:                                                                                                          
                                                                                                                              
 - "Battery backup" — only on specific products, not all                                                                      
 - Specific price ranges — only for products we've confirmed                                                                  
                                                                                                                              
 ❌ CANNOT claim (yet):                                                                                                       
                                                                                                                              
 - "Trusted by X hospitals"                                                                                                   
 - "X years experience"                                                                                                       
 - "Shipped to X countries"                                                                                                   
 - Customer testimonials                                                                                                      
                                                                                                                              
 ---                                                                                                                          
 Page Structure — Section by Section                                                                                          
                                                                                                                              
 1. NAVIGATION (Fixed)                                                                                                        
                                                                                                                              
 [FairMed]                    [Equipment] [About] [Contact]  [Get Quote]                                                      
 - Logo text only for now (add graphic logo later)                                                                            
 - Minimal links                                                                                                              
 - CTA button: "Get Quote"                                                                                                    
                                                                                                                              
 ---                                                                                                                          
 2. HERO                                                                                                                      
                                                                                                                              
 Goal: Immediate clarity on what we do and why it matters                                                                     
                                                                                                                              
 Medical Equipment.                                                                                                           
 Fair Prices.                                                                                                                 
                                                                                                                              
 Certified refurbished devices for Nigerian healthcare facilities.                                                            
 Direct from European suppliers. No middlemen markup.                                                                         
                                                                                                                              
 [View Equipment]  [Request Quote]                                                                                            
                                                                                                                              
 Content rules:                                                                                                               
 - Headline: Max 6 words                                                                                                      
 - Subheadline: Max 25 words                                                                                                  
 - Two CTAs: primary (View Equipment) + secondary (Request Quote)                                                             
 - No background image (monochrome = typography carries it)                                                                   
                                                                                                                              
 ---                                                                                                                          
 3. TRUST BAR                                                                                                                 
                                                                                                                              
 Goal: Quick credibility signals                                                                                              
                                                                                                                              
 ✓ CE Certified    ✓ 1-Year Warranty    ✓ NAFDAC Support    ✓ 24h Response                                                    
                                                                                                                              
 Content rules:                                                                                                               
 - 4 items max                                                                                                                
 - Checkmarks, not icons                                                                                                      
 - No explanations here (save for later sections)                                                                             
                                                                                                                              
 ---                                                                                                                          
 4. PROBLEM / SOLUTION                                                                                                        
                                                                                                                              
 Goal: Explain why we exist                                                                                                   
                                                                                                                              
 Headline: "Why FairMed?"                                                                                                     
                                                                                                                              
 Copy approach:                                                                                                               
 - Paragraph 1: The problem (2-3 sentences)                                                                                   
   - Equipment passes through brokers, distributors, agents                                                                   
   - Each adds margin                                                                                                         
   - Hospitals pay 2-3x what they should                                                                                      
 - Paragraph 2: Our solution (2-3 sentences)                                                                                  
   - We source directly from certified European refurbishers                                                                  
   - We handle logistics and documentation                                                                                    
   - You get fair prices                                                                                                      
                                                                                                                              
 Stats to display:                                                                                                            
 20–40%          4+ hrs           24 hrs                                                                                      
 Lower Prices    Battery Backup   Response Time                                                                               
 [brief desc]    [brief desc]     [brief desc]                                                                                
                                                                                                                              
 ---                                                                                                                          
 5. EQUIPMENT (Featured)                                                                                                      
                                                                                                                              
 Goal: Show what we actually sell                                                                                             
                                                                                                                              
 Headline: "Equipment"                                                                                                        
 Subtext: "Starting with neonatal care. More categories coming soon."                                                         
                                                                                                                              
 Products to feature (3):                                                                                                     
 1. LED Phototherapy Unit — $1,500–$2,500                                                                                     
 2. Infant Radiant Warmer — $3,000–$5,000                                                                                     
 3. Resuscitation Kit — $150–$300                                                                                             
                                                                                                                              
 Card structure:                                                                                                              
 [Image placeholder]                                                                                                          
 Category: Neonatal Care                                                                                                      
 Product Name                                                                                                                 
 2-line description (features + key benefit)                                                                                  
 Price range          [Inquire →]                                                                                             
                                                                                                                              
 Footer text:                                                                                                                 
 "Looking for something else? Patient monitors, ECG machines, ultrasound — we can source it. Tell us what you need."          
                                                                                                                              
 ---                                                                                                                          
 6. HOW IT WORKS                                                                                                              
                                                                                                                              
 Goal: Reduce uncertainty, show we know the process, make it feel easy for THEM                                               
                                                                                                                              
 Headline: "How It Works"                                                                                                     
                                                                                                                              
 Tone: Customer-centric. Every step starts with "you" or focuses on their experience. We sound knowledgeable about medical    
 equipment procurement.                                                                                                       
                                                                                                                              
 Steps (4):                                                                                                                   
 1. Share your requirements                                                                                                   
    Equipment type, specifications, quantity, timeline.                                                                       
    We speak your language — clinical specs, not sales jargon.                                                                
                                                                                                                              
 2. Receive your quote                                                                                                        
    Within 24 hours: detailed specs, CE documentation,                                                                        
    unit pricing, and delivery estimate to your facility.                                                                     
                                                                                                                              
 3. Review at your pace                                                                                                       
    Compare with other suppliers. Ask questions. Request alternatives.                                                        
    No pressure — we're here when you're ready.                                                                               
                                                                                                                              
 4. We handle logistics                                                                                                       
    Export documentation, NAFDAC paperwork, shipping coordination.                                                            
    You receive certified equipment, ready to use.                                                                            
                                                                                                                              
 Design: Simple numbered list, generous spacing between steps                                                                 
                                                                                                                              
 Why this works:                                                                                                              
 - "Share your requirements" > "Tell us what you need" (sounds like they're in control)                                       
 - "We speak your language" — signals domain expertise                                                                        
 - "24 hours" — specific commitment                                                                                           
 - "Compare with other suppliers" — confident, not desperate                                                                  
 - "NAFDAC paperwork" — shows we know the Nigerian import process                                                             
                                                                                                                              
 ---                                                                                                                          
 7. ABOUT / CREDENTIALS                                                                                                       
                                                                                                                              
 Goal: Build trust through transparency                                                                                       
                                                                                                                              
 Two columns:                                                                                                                 
                                                                                                                              
 Left column — Our Story:                                                                                                     
 - Why we started (problem we saw)                                                                                            
 - What we do differently (direct sourcing)                                                                                   
 - Keep it short (3 paragraphs max)                                                                                           
                                                                                                                              
 Right column — Credentials:                                                                                                  
 - What "refurbished" means (tested, certified, documented)                                                                   
 - Our guarantee (1-year warranty, support)                                                                                   
 - NAFDAC & import support (we provide all documentation)                                                                     
                                                                                                                              
 ---                                                                                                                          
 8. CONTACT / CTA                                                                                                             
                                                                                                                              
 Goal: Make it dead simple to reach out — multiple options for different preferences                                          
                                                                                                                              
 Headline: "Ready to equip your facility?"                                                                                    
 Subtext: "Tell us what you need. We respond within 24 hours."                                                                
                                                                                                                              
 Three contact methods (all included):                                                                                        
                                                                                                                              
 ┌─────────────────────────────────────────────────────────────┐                                                              
 │  [Contact Form]                    │  Direct Contact        │                                                              
 │                                    │                        │                                                              
 │  Name: _______________             │  WhatsApp              │                                                              
 │  Email: ______________             │  +XX XXX XXX XXXX      │                                                              
 │  Facility: ___________             │  [Chat on WhatsApp]    │                                                              
 │  Equipment needed:                 │                        │                                                              
 │  _____________________             │  Email                 │                                                              
 │  _____________________             │  info@fairmed...       │                                                              
 │                                    │  [Send Email]          │                                                              
 │  [Send Inquiry]                    │                        │                                                              
 └─────────────────────────────────────────────────────────────┘                                                              
                                                                                                                              
 Form fields:                                                                                                                 
 - Name (required)                                                                                                            
 - Email (required)                                                                                                           
 - Facility name (optional)                                                                                                   
 - Equipment needed (textarea, required)                                                                                      
                                                                                                                              
 Form handling: Formspree (free tier, no backend needed)                                                                      
                                                                                                                              
 WhatsApp: Pre-filled message link: "Hi, I'm inquiring about medical equipment for my facility..."                            
                                                                                                                              
 ---                                                                                                                          
 9. FOOTER                                                                                                                    
                                                                                                                              
 Goal: Standard footer, nothing fancy                                                                                         
                                                                                                                              
 [FairMed International]     Equipment        Company         Contact                                                         
 Brief tagline               - Neonatal       - About         WhatsApp: xxx                                                   
                             - Monitoring     - Contact       Email: xxx                                                      
                             - Diagnostics                                                                                    
                                                                                                                              
 © 2025 FairMed International                                                                                                 
                                                                                                                              
 ---                                                                                                                          
 Decisions Made                                                                                                               
 ┌─────────────────┬────────────────────────────────────────────────────┐                                                     
 │    Question     │                      Decision                      │                                                     
 ├─────────────────┼────────────────────────────────────────────────────┤                                                     
 │ Contact methods │ All three: WhatsApp + Email + Contact form         │                                                     
 ├─────────────────┼────────────────────────────────────────────────────┤                                                     
 │ Product images  │ Gray placeholders (replace with real photos later) │                                                     
 ├─────────────────┼────────────────────────────────────────────────────┤                                                     
 │ Logo            │ Text-only "FairMed" for now, add graphic later     │                                                     
 └─────────────────┴────────────────────────────────────────────────────┘                                                     
 Still Needed Before Launch                                                                                                   
                                                                                                                              
 - WhatsApp number (actual number to display)                                                                                 
 - Confirm email address (info@fairmedinternational.com?)                                                                     
 - Real product photos (when available)                                                                                       
 - Logo (optional, can launch without)                                                                                        
                                                                                                                              
 ---                                                                                                                          
 Implementation Plan                                                                                                          
                                                                                                                              
 1. Set up project (Astro + Tailwind, GitHub Pages)                                                                           
 2. Create single HTML page with all sections                                                                                 
 3. Implement smooth scroll + subtle animations                                                                               
 4. Mobile-responsive pass                                                                                                    
 5. Performance optimization (fonts, images)                                                                                  
 6. Deploy to GitHub Pages                                                                                                    
 7. Connect domain (fairmedinternational.com)                                                                                 
                                                                                                                              
 ---                                                                                                                          
 Verification                                                                                                                 
                                                                                                                              
 - Page loads in < 2 seconds                                                                                                  
 - Perfect on mobile (test on real device)                                                                                    
 - All links work                                                                                                             
 - WhatsApp link opens WhatsApp                                                                                               
 - Email link opens mail client                                                                                               
 - Smooth scrolling works                                                                                                     
 - No console errors