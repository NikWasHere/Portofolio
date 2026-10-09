import { type FormEvent, useEffect, useState } from 'react'
import profileImage from "./assets/PP web portofolio.jpeg";
import AOS from 'aos'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  ExternalLink,
  Menu,
  MoveUpRight,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { Badge } from './components/ui/Badge'
import { Button } from './components/ui/Button'

const projects = [
  {
    number: '01',
    type: 'Product design · Development',
    title: 'Ruang Tumbuh',
    description:
      'Platform wellbeing yang membantu mahasiswa membangun kebiasaan kecil lewat insight yang terasa personal.',
    tags: ['React', 'TypeScript', 'Supabase'],
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    accent: 'project-blue',
  },
  {
    number: '02',
    type: 'Frontend engineering',
    title: 'Nusa Finance',
    description:
      'Dasbor finansial yang menyederhanakan data kompleks menjadi keputusan yang lebih percaya diri.',
    tags: ['Next.js', 'Figma', 'Data viz'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    accent: 'project-lilac',
  },
  {
    number: '03',
    type: 'Research · UI system',
    title: 'Kota Kita',
    description:
      'Eksplorasi sistem informasi ruang publik yang inklusif untuk komunitas urban di Indonesia.',
    tags: ['UX research', 'React', 'Design system'],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    accent: 'project-sand',
  },
  {
    number: '04',
    type: 'Web development',
    title: 'Langkah Baik',
    description:
      'Landing page komunitas dengan fokus pada storytelling, performa, dan ajakan aksi yang jelas.',
    tags: ['React', 'Performance', 'Storytelling'],
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    accent: 'project-blue',
  },
]

const copy = {
  id: {
    nav: ['Tentang saya', 'Keahlian', 'Proyek', 'Proses'],
    contact: 'Mari ngobrol',
    badge: 'Lulusan Informatika · Product-minded developer',
    heroStart: 'Saya seorang',
    heroEnd: 'yang merancang hal',
    heroDescription: 'Saya Niko, seorang lulusan Informatika yang senang menjembatani logika teknologi dengan pengalaman manusia yang terasa sederhana.',
    workButton: 'Lihat karya saya',
    meet: 'Kenalan lebih dekat',
    cv: 'Lihat CV',
    based: 'Berbasis di Indonesia',
    scroll: 'Scroll untuk menjelajah',
    statementLabel: '01 / Tentang saya',
    statementTitle: 'Bukan sekadar membuat sesuatu bekerja.',
    statementTitleMuted: 'Saya membuatnya terasa berarti.',
    statementBody: 'Bagi saya, teknologi yang baik adalah teknologi yang mengerti konteks. Dari merapikan alur yang rumit hingga membangun interface yang hangat, saya selalu mulai dari rasa ingin tahu terhadap orang-orang yang menggunakannya.',
    story: 'Cerita saya',
    aboutLabel: '02 / Latar belakang',
    aboutTitle: 'Berpikir sistematis,',
    aboutTitleAccent: 'bekerja empatik.',
    aboutLead: 'Lahir dari rasa penasaran pada cara sesuatu bekerja, lalu tumbuh menjadi kecintaan pada cara sesuatu dirasakan.',
    aboutBody: 'Selama belajar Informatika di Institut Teknologi Kalimantan, saya menemukan ruang untuk mengeksplorasi keduanya: menulis kode yang rapi, memetakan masalah, dan menerjemahkan kebutuhan menjadi pengalaman digital yang utuh.',
    processLink: 'Lihat cara kerja saya',
    expertiseLabel: '03 / Keahlian',
    expertiseTitle: 'Alat yang saya',
    expertiseAccent: 'ajak bekerja sama.',
    expertiseBody: 'Setiap proyek butuh pendekatan yang berbeda. Ini adalah toolkit yang membantu saya bergerak dari ide hingga sesuatu yang bisa digunakan.',
    workLabel: '04 / Selected work',
    workTitle: 'Beberapa hal yang',
    workAccent: 'pernah saya bangun.',
    archive: 'Request full archive',
    caseStudy: 'Case study',
    processLabel: '05 / Cara kerja',
    processTitle: 'Terstruktur, tapi',
    processAccent: 'tidak kaku.',
    contactLabel: '06 / Let’s connect',
    contactTitle: 'Punya ide yang ingin',
    contactAccent: 'dibawa lebih jauh?',
    contactBody: 'Saya selalu terbuka untuk percakapan baru, kolaborasi yang thoughtful, atau sekadar bertukar cerita tentang dunia digital.',
    location: 'Balikpapan, Indonesia',
    send: 'Kirim pesan',
    findMe: 'Temukan saya di',
    footer: 'Designed & built with intention',
    next: 'Berikutnya',
    previous: 'Sebelumnya',
    page: 'Halaman',
  },
  en: {
    nav: ['About', 'Expertise', 'Work', 'Process'],
    contact: 'Let’s talk',
    badge: 'Informatics graduate · Product-minded developer',
    heroStart: 'I am a',
    heroEnd: 'who designs things',
    heroDescription: 'I’m Niko, an Informatics graduate who enjoys bridging the logic of technology with human experiences that feel simple.',
    workButton: 'View my work',
    meet: 'Get to know me',
    cv: 'View CV',
    based: 'Based in Indonesia',
    scroll: 'Scroll to explore',
    statementLabel: '01 / About me',
    statementTitle: 'Not just making something work.',
    statementTitleMuted: 'I make it feel meaningful.',
    statementBody: 'To me, good technology understands context. From untangling complex flows to building warm interfaces, I always start with curiosity about the people using them.',
    story: 'My story',
    aboutLabel: '02 / Background',
    aboutTitle: 'Think systematically,',
    aboutTitleAccent: 'work empathetically.',
    aboutLead: 'Born from curiosity about how things work, and grown into a love for how things feel.',
    aboutBody: 'While studying Informatics at Institut Teknologi Kalimantan, I found room to explore both: writing clean code, mapping problems, and translating needs into complete digital experiences.',
    processLink: 'See how I work',
    expertiseLabel: '03 / Expertise',
    expertiseTitle: 'Tools I like',
    expertiseAccent: 'to work with.',
    expertiseBody: 'Every project needs a different approach. This is the toolkit that helps me move from an idea to something people can use.',
    workLabel: '04 / Selected work',
    workTitle: 'A few things I’ve',
    workAccent: 'built along the way.',
    archive: 'Request full archive',
    caseStudy: 'Case study',
    processLabel: '05 / Process',
    processTitle: 'Structured, but',
    processAccent: 'never rigid.',
    contactLabel: '06 / Let’s connect',
    contactTitle: 'Have an idea to',
    contactAccent: 'take further?',
    contactBody: 'I’m always open to a new conversation, thoughtful collaboration, or simply exchanging ideas about the digital world.',
    location: 'Balikpapan, Indonesia',
    send: 'Send message',
    findMe: 'Find me on',
    footer: 'Designed & built with intention',
    next: 'Next',
    previous: 'Previous',
    page: 'Page',
  },
} as const

function App() {
  const [language, setLanguage] = useState<'id' | 'en'>('id')
  const [isLight, setIsLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [liveTime, setLiveTime] = useState('')
  const [projectPage, setProjectPage] = useState(0)
  const t = copy[language]
  const pageSize = 3
  const pageCount = Math.ceil(projects.length / pageSize)
  const visibleProjects = projects.slice(projectPage * pageSize, (projectPage + 1) * pageSize)

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])

  useEffect(() => {
    setProjectPage(0)
  }, [language])

  useEffect(() => {
    AOS.init({ duration: 850, once: true, offset: 80, easing: 'ease-out-cubic' })
  }, [])

  useEffect(() => {
    const phrases = language === 'id'
      ? ['Frontend engineer', 'Product-minded developer', 'Problem solver']
      : ['Frontend engineer', 'Product-minded developer', 'Problem solver']
    const phrase = phrases[phraseIndex]
    const isComplete = typedText === phrase
    const delay = isComplete ? 1900 : typedText.length === 0 ? 500 : 72
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setTypedText('')
        setPhraseIndex((current) => (current + 1) % phrases.length)
      } else {
        setTypedText(phrase.slice(0, typedText.length + 1))
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [language, phraseIndex, typedText])

  useEffect(() => {
    const updateTime = () => {
      setLiveTime(new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date()))
    }
    updateTime()
    const timer = window.setInterval(updateTime, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Pesan portofolio dari ${name}`)
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:nikoaff.jr@gmail.com?subject=${subject}&body=${body}`
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">n<span>.</span></span>
          <span className="brand-name">Niko Afandi</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {t.nav.map((label, index) => (
            <a key={label} href={['#about', '#expertise', '#work', '#process'][index]} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            {t.contact} <ArrowUpRight size={15} />
          </a>
          <button className="language-toggle" type="button" onClick={() => setLanguage(language === 'id' ? 'en' : 'id')} aria-label="Change language">{language === 'id' ? 'EN' : 'ID'}</button>
          <button className="theme-toggle" type="button" onClick={() => setIsLight(!isLight)} aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>{isLight ? <Moon size={15} /> : <Sun size={15} />}</button>
        </nav>
        <Button
          className="menu-toggle"
          variant="ghost"
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </Button>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy" data-aos="fade-up">
            <Badge>{t.badge}</Badge>
            <h1>
              {t.heroStart}
              <span className="typing-line"><em>{typedText}</em><span className="typing-caret" aria-hidden="true" /></span>
              <br />
              {t.heroEnd} <em>{language === 'id' ? 'bermakna.' : 'meaningful.'}</em>
            </h1>
            <p className="hero-description">
              {t.heroDescription}
            </p>
            <div className="hero-actions">
              <a href="#work"><Button>{t.workButton} <ArrowDownRight size={17} /></Button></a>
              <a className="text-link" href="#contact">{t.meet} <ArrowUpRight size={16} /></a>
              <a className="text-link cv-link" href="https://drive.google.com/file/d/1A3nlPzY1e45wWtrm4yagFYT9j9S1v3ur/view?usp=sharing" target="_blank" rel="noreferrer">{t.cv} <ExternalLink size={15} /></a>
            </div>
          </div>
          <div className="hero-portrait" data-aos="fade-left" data-aos-delay="150">
            <div className="portrait-glow" />
            <img
              src={profileImage}
              alt="Foto profil Niko Afandi"
            />
            <div className="portrait-note">
              <span className="status-dot" /> Terbuka untuk kolaborasi
            </div>
            <span className="portrait-index">01 — 04</span>
          </div>
          <div className="hero-meta">
            <span><span className="line" /> {t.based}</span>
            <span>{t.scroll} <ChevronDown size={16} /></span>
          </div>
        </section>

        <section className="statement-band">
          <div className="container statement-grid">
            <span className="eyebrow">{t.statementLabel}</span>
            <div data-aos="fade-up">
              <h2>{t.statementTitle} <span>{t.statementTitleMuted}</span></h2>
              <p>{t.statementBody}</p>
              <a className="arrow-link" href="#contact">{t.story} <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">{t.aboutLabel}</span>
            <h2>{t.aboutTitle}<br /><em>{t.aboutTitleAccent}</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy" data-aos="fade-up" data-aos-delay="100">
              <p className="large-copy">{t.aboutLead}</p>
              <p>{t.aboutBody}</p>
              <a className="arrow-link" href="#process">{t.processLink} <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-facts" data-aos="fade-left" data-aos-delay="180">
              <div className="fact"><span>01</span><strong>SMK N 3 BALIKPAPAN</strong><small>TKJ<br />2019 — 2022</small></div>
              <div className="fact"><span>02</span><strong>Institut Teknologi Kalimantan</strong><small>S1 INFORMATIKA<br />2022 - 2026</small></div>
              <div className="fact"><span>03</span><strong>Saat ini</strong><small>MAGANGHUB BANK MANDIRI<br />Sekarang</small></div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading split-heading" data-aos="fade-up">
              <div><span className="eyebrow">{t.expertiseLabel}</span><h2>{t.expertiseTitle}<br /><em>{t.expertiseAccent}</em></h2></div>
              <p>{t.expertiseBody}</p>
            </div>
            <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
              <div className="skill-card"><span className="skill-number">01</span><Code2 size={25} /><h3>Build & ship</h3><p>Mengubah konsep menjadi interface yang cepat, accessible, dan siap berkembang.</p><div className="skill-tags"><span>React</span><span>TypeScript</span><span>Vite</span></div></div>
              <div className="skill-card"><span className="skill-number">02</span><Sparkles size={25} /><h3>Shape the experience</h3><p>Menemukan bentuk yang tepat melalui eksplorasi, prototyping, dan detail yang intentional.</p><div className="skill-tags"><span>Figma</span><span>Design system</span><span>UX writing</span></div></div>
              <div className="skill-card"><span className="skill-number">03</span><BriefcaseBusiness size={25} /><h3>Think in systems</h3><p>Memetakan masalah, menyusun prioritas, dan menjaga agar solusi tetap relevan.</p><div className="skill-tags"><span>Research</span><span>Agile</span><span>Notion</span></div></div>
            </div>
          </div>
        </section>

        <section className="section container work-section" id="work">
          <div className="section-heading split-heading" data-aos="fade-up">
            <div><span className="eyebrow">{t.workLabel}</span><h2>{t.workTitle}<br /><em>{t.workAccent}</em></h2></div>
            <a className="arrow-link desktop-link" href="#contact">{t.archive} <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-list">
            {visibleProjects.map((project) => (
              <article className="project-row" key={project.number} data-aos="fade-up">
                <div className={`project-image ${project.accent}`}><img src={project.image} alt={`Preview project ${project.title}`} /><span className="image-label">{t.caseStudy} <ExternalLink size={13} /></span></div>
                <div className="project-info"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact" aria-label={`Lihat detail ${project.title}`}><MoveUpRight size={18} /></a></div>
              </article>
            ))}
          </div>
          {pageCount > 1 && <div className="project-pagination" aria-label="Project pagination">
            <button type="button" onClick={() => setProjectPage(Math.max(0, projectPage - 1))} disabled={projectPage === 0}>{t.previous}</button>
            <span>{t.page} {projectPage + 1} / {pageCount}</span>
            <button type="button" onClick={() => setProjectPage(Math.min(pageCount - 1, projectPage + 1))} disabled={projectPage === pageCount - 1}>{t.next} <ArrowUpRight size={14} /></button>
          </div>}
        </section>

        <section className="process-section" id="process">
          <div className="container">
            <div className="section-heading" data-aos="fade-up"><span className="eyebrow">{t.processLabel}</span><h2>{t.processTitle}<br /><em>{t.processAccent}</em></h2></div>
            <div className="process-grid" data-aos="fade-up" data-aos-delay="100">
              {['Understand', 'Explore', 'Build', 'Refine'].map((step, index) => (
                <div className="process-step" key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{['Mendengarkan konteks, user, dan problem sebelum mencari jawaban.', 'Membuka kemungkinan lewat sketsa, riset, dan percakapan.', 'Menerjemahkan arah yang dipilih menjadi produk yang nyata.', 'Menguji, belajar, dan membuatnya lebih baik dari sebelumnya.'][index]}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner" data-aos="fade-up">
            <div className="contact-heading">
                <span className="eyebrow">{t.contactLabel}</span>
                <h2>{t.contactTitle}<br /><em>{t.contactAccent}</em></h2>
                <p>{t.contactBody}</p>
              <div className="local-time"><span className="status-dot" /> {t.location} <strong>{liveTime || '--:--:--'} WITA</strong></div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">Nama</label>
              <input id="name" name="name" type="text" placeholder="Nama lengkap Anda" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="nama@email.com" required />
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" rows={4} placeholder="Ceritakan sedikit tentang ide Anda..." required />
              <Button type="submit" variant="outline">{t.send} <ArrowUpRight size={17} /></Button>
            </form>
            <div className="contact-details">
              <span>{t.findMe}</span>
              <a href="https://instagram.com/nikoaff" target="_blank" rel="noreferrer">Instagram <ExternalLink size={17} /></a>
              <a href="https://www.linkedin.com/in/niko-afandi-s-429063337?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={17} /></a>
              <a href="https://github.com/NikWasHere" target="_blank" rel="noreferrer">GitHub <ExternalLink size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <span className="footer-brand">© 2026 Niko Afandi Saputro</span>
        <span className="footer-made"><span className="status-dot" /> {t.footer}</span>
        <div className="socials"><a href="https://github.com/nikoafandi" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a href="https://linkedin.com/in/nikoafandi" target="_blank" rel="noreferrer" aria-label="LinkedIn">LI</a><a href="https://instagram.com/nikoafandi" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a></div>
      </footer>
    </div>
  )
}

export default App
