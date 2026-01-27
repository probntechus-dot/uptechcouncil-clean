# Premium Hero Image Generation Prompts

Use these prompts with DALL-E 3, Midjourney, or Stable Diffusion to generate the 4 flagship initiative hero images.

**Image Specifications:**
- Resolution: 1600x900 (16:9 aspect ratio)
- Style: High-end enterprise, cinematic lighting, modern tech aesthetic, realistic (not cartoon), clean composition, shallow depth of field, subtle glow
- No text, no logos, no flags, no watermarks
- Consistent visual language across all 4 images

---

## 1. People AI Platform

**Prompt:**
```
Premium enterprise photography, cinematic lighting, shallow depth of field. Close-up of diverse professionals (South Asian and Caucasian) collaborating around a modern workspace. In the background, a subtle holographic AI interface displays soft blue and green data visualizations. Warm, natural lighting on faces and hands, creating human connection. Tech elements are soft, premium, and out of focus. Modern office environment with clean lines. Color palette: warm skin tones, cool tech blues (#1E40AF), soft greens (#00B140). Professional, optimistic mood. Shot on professional camera, f/2.8, natural window light mixed with soft LED accent lighting. No text, no logos, no watermarks.
```

**Alternative (if first doesn't work):**
```
Professional photography of diverse team members (mixed ethnicity) working together with AI technology. Close-up composition, shallow depth of field. Human hands touching a tablet showing AI interface. Warm lighting on people, cool blue-green glow from screens. Modern tech workspace, premium aesthetic. Cinematic, enterprise-grade. No text, no logos. 16:9 aspect ratio, 1600x900.
```

---

## 2. TechMart Global

**Prompt:**
```
Premium abstract visualization of global digital marketplace. Stylized world map with subtle network connections between UK and Pakistan regions. Abstract trade routes shown as elegant glowing lines. Minimal city silhouettes in background. Subtle color accents: deep red (#E11D48) and green (#00B140) suggesting UK-Pakistan connection without flags. Elegant logistics elements: minimal shipping label graphics, fintech data visualizations as soft background elements. Modern, clean, sophisticated. Cinematic lighting with soft glow effects. Abstract but professional. No text, no logos, no flags, no watermarks. 16:9 aspect ratio, 1600x900.
```

**Alternative:**
```
Abstract global commerce visualization. Elegant network diagram showing international connections. Soft geometric shapes suggesting trade routes. Minimal color palette with red and green accents. Modern tech aesthetic, premium enterprise feel. Cinematic depth, soft focus background. No text, no logos. 1600x900.
```

---

## 3. AI and Tech Programs

**Prompt:**
```
Premium professional photography of modern training and certification workshop. Diverse group of professionals (mixed ethnicity, ages) in a bright, modern classroom or co-working space. Laptops open on desks, mentor figure visible in background. Subtle certificate or badge element visible but text is blurred/unreadable. Startup incubation vibe: modern furniture, plants, natural light. Professional, optimistic atmosphere. Not stock-photo cheesy. Cinematic lighting, shallow depth of field. Warm, inviting mood. Shot on professional camera. No readable text, no logos, no watermarks. 16:9 aspect ratio, 1600x900.
```

**Alternative:**
```
Modern tech training environment. Diverse professionals learning together. Laptops, notebooks, collaboration. Mentor guiding learners. Bright, optimistic setting. Professional photography, cinematic quality. Natural lighting. Startup incubator aesthetic. No text, no logos. 1600x900.
```

---

## 4. UK–Pakistan Tech Excellence Awards

**Prompt:**
```
Premium professional photography of leadership partnership moment. Two executives (one South Asian, one Caucasian) shaking hands in formal modern venue. Subtle award/trophy shape or elegant stage lighting in soft-focus background. Premium suit styling, confident body language. Soft spotlight effect on the handshake. Modern tech event atmosphere: sleek architecture, contemporary lighting design. Cinematic, high-end corporate photography. Warm, professional lighting. Shot on professional camera, shallow depth of field. No text, no logos, no flags, no watermarks. 16:9 aspect ratio, 1600x900.
```

**Alternative:**
```
Formal business handshake between two executives in modern event venue. Premium suits, confident posture. Elegant award ceremony atmosphere. Soft stage lighting in background. Professional photography, cinematic quality. Warm, prestigious mood. No text, no logos. 1600x900.
```

---

## Image Generation Tips

### For DALL-E 3:
- Use the exact prompts above
- Set style to "vivid" for more cinematic results
- Generate at highest quality

### For Midjourney:
- Add `--ar 16:9 --style raw --v 6` to prompts
- Use `::` to weight important elements
- Example: `premium enterprise photography::2 cinematic lighting::1.5`

### For Stable Diffusion:
- Use model: Realistic Vision, DreamShaper, or similar
- Negative prompt: "text, logo, watermark, flag, cartoon, illustration, low quality"
- Steps: 30-50, CFG: 7-9

---

## File Naming Convention

Save images as:
1. `people-ai-platform.jpg` (or .webp for better compression)
2. `techmart-global.jpg`
3. `ai-tech-programs.jpg`
4. `tech-excellence-awards.jpg`

Place in: `public/image/Initiatives/`
