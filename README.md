# Marufjon — Shaxsiy O'quv Platforma

> **React + Vite + Supabase** asosida qurilgan to'liq funksional shaxsiy o'quv va kutubxona platformasi.

---

## 📋 Loyiha haqida

**Marufjon** — bu shaxsiy blog va o'quv platformasi bo'lib, u orqali kurslar, darslar, kutubxona kitoblari va maqolalar e'lon qilinadi. Platformada to'liq funksional **Admin Panel** mavjud bo'lib, unda barcha kontent markazlashgan holda boshqariladi.

---

## 🛠️ Texnologiyalar

| Qatlam | Texnologiya |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Stil | Tailwind CSS, Shadcn UI |
| Backend | Supabase (PostgreSQL, Edge Functions, Storage) |
| Auth | Maxsus JWT (bcrypt parol xeshlash) |
| State | TanStack Query (React Query) |
| Routing | React Router v6 |

---

## 🌐 Sayt sahifalari (Public)

| Sahifa | URL | Tavsif |
|---|---|---|
| Bosh sahifa | `/` | Platforma haqida umumiy ma'lumot, ko'rsatkichlar |
| Kurslar | `/courses` | Barcha kurslar ro'yxati (kategoriyalar bo'yicha) |
| Dars | `/lesson/:slug` | Video dars, matn, fayl yuklamalar |
| Men haqimda | `/about` | Muallif haqida ma'lumot va yutuqlar |
| Aloqa | `/contact` | Aloqa kanallari (Telegram, Email va boshq.) |
| Kutubxona | `/library` | Kitoblar va maqolalar ro'yxati |
| Kitob o'qish | `/library/:id` | PDF/Word fayllarni to'liq ekranda ko'rish |

---

## 🔐 Admin Panel

Admin panel `/admin/login` orqali ochiladi. Ikki turdagi kirish mavjud:

- **Super Admin** — barcha imtiyozlar, login tarixi va parol boshqaruvi
- **Oddiy Admin** — kontent boshqaruvi + o'z parolini o'zgartirish

### Admin Panel bo'limlari

| Bo'lim | URL | Tavsif |
|---|---|---|
| Boshqaruv paneli | `/admin` | Statistika va ko'rsatkichlar |
| Kategoriyalar | `/admin/categories` | Kurs kategoriyalarini boshqarish |
| Kurslar | `/admin/courses` | Kurslar qo'shish, tahrirlash, o'chirish |
| Darslar | `/admin/lessons` | Darslar va ularning mazmuni |
| Dars fayllari | `/admin/attachments` | Darsga biriktirilgan PDF/DOC fayllar |
| Kutubxona | `/admin/library` | Kitob va maqolalar, fayl yuklash |
| Izohlar | `/admin/comments` | Foydalanuvchi izohlarini tasdiqlash |
| Men haqimda | `/admin/about` | "Men haqimda" sahifasi bloklari |
| Yutuqlar | `/admin/achievements` | Mukofotlar va yutuqlar |
| Aloqa | `/admin/contacts` | Aloqa kanallarini boshqarish |
| Sozlamalar | `/admin/settings` | Sayt sozlamalari + o'z parolini o'zgartirish |
| Parollar | `/admin/passwords` | *(Faqat Super Admin)* Qo'shimcha adminlar |
| Login tarixi | `/admin/sessions` | *(Faqat Super Admin)* Barcha kirish urinishlari |

---

## ⚡ Supabase Edge Functions (Backend)

| Funksiya | Maqsad |
|---|---|
| `admin-login` | Parolni tekshirish, JWT token yaratish, login logini yozish |
| `admin-resource` | Barcha CRUD operatsiyalar (kategoriya, kurs, dars va boshq.) |
| `admin-upload` | Fayl yuklash (`library-files`, `lesson-files` storage bucket'lariga) |

---

## 🗄️ Ma'lumotlar bazasi jadvallari

| Jadval | Tavsif |
|---|---|
| `categories` | Kurs kategoriyalari |
| `courses` | Kurslar |
| `lessons` | Darslar |
| `attachments` | Dars fayllari |
| `comments` | Foydalanuvchi izohlari |
| `library_items` | Kutubxona (kitob, maqola) |
| `site_settings` | Sayt sozlamalari (kalit-qiymat) |
| `about_sections` | "Men haqimda" bloklari |
| `contacts` | Aloqa kanallari |
| `achievements` | Yutuqlar |
| `admin_passwords` | Bcrypt xeshlangan qo'shimcha admin parollari |
| `admin_sessions` | Admin kirish tarixi (IP, qurilma, brauzer) |

---

## 🚀 Mahalliy ishga tushirish

### Talablar

- Node.js v18+
- Supabase CLI
- Git

### O'rnatish

```bash
# Reponi yuklab olish
git clone <repo-url>
cd marufjon-main

# Paketlarni o'rnatish
npm install
```

### `.env` faylini sozlash

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=https://your_project_id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

### Ishga tushirish

```bash
npm run dev
```

Dastur `http://localhost:5173` manzilida ochiladi.

---

## ☁️ Serverga (Supabase) Joylashtirish

### 1. Supabase CLI o'rnatish

```bash
npm install -g supabase
supabase login
```

### 2. Loyihani ulash

```bash
supabase link --project-ref YOUR_PROJECT_ID
```

### 3. Ma'lumotlar bazasini yangilash

```bash
supabase db push
```

### 4. Maxfiy sozlamalarni o'rnatish (Secrets)

```bash
supabase secrets set ADMIN_PASSWORD="your_admin_password"
supabase secrets set ADMIN_SUPER_PASSWORD="your_super_password"
supabase secrets set ADMIN_JWT_SECRET="your_secret_key_min_32_chars"
```

### 5. Edge Funksiyalarni joylashtirish

```bash
supabase functions deploy admin-login --no-verify-jwt
supabase functions deploy admin-resource --no-verify-jwt
supabase functions deploy admin-upload --no-verify-jwt
```

### 6. Storage Bucket'larini yaratish

Migratsiya orqali avtomatik yaratiladi (`supabase db push`), yoki Supabase Dashboard'dan qo'lda:
- `library-files` — Public bucket (kutubxona fayllari)
- `lesson-files` — Public bucket (dars fayllari)

### 7. Frontend'ni Build qilish

```bash
npm run build
```

`dist/` papkasi yaratiladi. Uni quyidagi xizmatlardan biriga yuklash mumkin:

- **Vercel** — `vercel --prod`
- **Netlify** — `netlify deploy --prod`
- **Cloudflare Pages** — Dashboard orqali

---

## 🔑 Admin Kirish Turlari

| Tur | Qayerda saqlanadi | Imtiyozlar |
|---|---|---|
| Super Admin | `ADMIN_SUPER_PASSWORD` (Supabase Secrets) | Barcha funksiyalar + Parollar + Login tarixi |
| Asosiy Admin | `ADMIN_PASSWORD` (Supabase Secrets) | Kontent boshqaruvi |
| Qo'shimcha Admin | `admin_passwords` jadvali (bcrypt) | Kontent boshqaruvi + o'z parolini o'zgartirish |

---

## 📁 Loyiha Tuzilmasi

```
marufjon-main/
├── src/
│   ├── pages/
│   │   ├── admin/          # Admin panel sahifalari
│   │   ├── Library.tsx     # Kutubxona ro'yxati
│   │   ├── LibraryView.tsx # Kitob/fayl ko'rish (to'liq ekran)
│   │   ├── Courses.tsx     # Kurslar
│   │   ├── Lesson.tsx      # Dars sahifasi
│   │   └── ...
│   ├── components/         # UI komponentlar
│   ├── lib/
│   │   ├── admin.ts        # Admin API va JWT yordamchilari
│   │   └── api.ts          # Umumiy API funksiyalari
│   └── integrations/
│       └── supabase/       # Supabase client sozlamalari
├── supabase/
│   ├── functions/
│   │   ├── _shared/        # Umumiy auth yordamchilari
│   │   ├── admin-login/    # Login Edge Function
│   │   ├── admin-resource/ # CRUD Edge Function
│   │   └── admin-upload/   # Fayl yuklash Edge Function
│   └── migrations/         # SQL migratsiyalar
├── public/                 # Statik fayllar
├── .env                    # Muhit o'zgaruvchilari (git'ga yuklanmaydi)
└── vite.config.ts
```

---

## 🛡️ Xavfsizlik

- Admin parollari **bcrypt** (salt rounds: 10) bilan xeshlangan holda saqlanadi
- Autentifikatsiya **HMAC-SHA256 JWT** orqali amalga oshiriladi (8 soatlik token)
- JWT tokenida `sub` (kim ekanligi) saqlanadi — har admin faqat o'z parolini o'zgartira oladi
- Rate limiting: 5 daqiqada 8 ta urinish (IP asosida)
- Barcha kirish urinishlari `admin_sessions` jadvalida loglanadi
- Timing-safe parol solishtirish amalga oshirilgan

---

## 🧪 Testlar va Foydali Buyruqlar

```bash
npm run dev          # Mahalliy server (localhost:5173)
npm run build        # Production build (dist/)
npm run lint         # ESLint tekshiruvi
npx tsc --noEmit     # TypeScript tekshiruvi (xatosiz)
npm run test         # Testlarni ishga tushirish
```

---

## 📝 Litsenziya

Ushbu loyiha shaxsiy foydalanish uchun mo'ljallangan.
