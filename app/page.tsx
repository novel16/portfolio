import Image from "next/image";
import { certifications, experience, profile, projects, skills, socials } from "./portfolio-data";

const navigation = [
  { id: "portfolio", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
];

const iconPaths = {
  external: "M6 18 18 6M6 6h12v12",
  right: "M4 12h15m-6-6 6 6-6 6",
  up: "M12 20V4m-6 6 6-6 6 6",
  down: "M12 4v16m-6-6 6 6 6-6",
  download: "M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4",
  pin: "M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0ZM12 10h.01",
  phone: "m7 3 3 5-3 3c1 3 3 5 6 6l3-3 5 3c-1 4-3 5-6 4C9 19 5 15 3 9 2 6 3 4 7 3Z",
  lock: "M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5zm7 4v3",
};

function Icon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={iconPaths[name]} />
    </svg>
  );
}

function Wordmark() {
  return (
    <a href="#home" className="inline-flex w-fit items-center gap-3 rounded-sm" aria-label={profile.name + ", home"}>
      <span aria-hidden="true" className="font-mono text-[2rem] leading-none font-medium tracking-[-0.14em]">
        n<span className="text-brand">.</span>
      </span>
      <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
    </a>
  );
}

function CvLink({ className = "button-secondary" }: { className?: string }) {
  return <a href={profile.cv} download className={className}><Icon name="download" />Download CV</a>;
}

type Project = (typeof projects)[number];

function ProjectLink({ project, featured = false }: { project: Project; featured?: boolean }) {
  return "href" in project ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer"
      aria-label={"Visit " + project.title + " (opens in a new tab)"}
      className={featured ? "button-primary" : "project-link"}>
      View project <Icon name="external" />
    </a>
  ) : (
    <span className="inline-flex min-h-11 items-center gap-2 text-xs text-muted">
      <Icon name="lock" />{project.note}
    </span>
  );
}

function ProjectTags({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Technologies used">
      {project.tags.map((tag) => <li key={tag} className="font-mono text-[0.67rem] leading-relaxed text-muted">{tag}</li>)}
    </ul>
  );
}

// Keep the live site and the available public source together.
function ProjectActions({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      <ProjectLink project={project} featured={featured} />
      {"source" in project && (
        <a href={project.source.href} target="_blank" rel="noopener noreferrer" className="project-link text-muted"
          aria-label={project.title + " — " + project.source.label + " (opens in a new tab)"}>
          {project.source.label} <Icon name="external" />
        </a>
      )}
    </div>
  );
}

// Show the supplied screenshot uncropped, with access to the full-resolution original.
function ProjectScreenshot({ project }: { project: Project }) {
  if (!("screenshot" in project)) return null;
  const screenshot = project.screenshot;
  return (
    <figure className="min-w-0">
      <a href={screenshot.src} target="_blank" rel="noopener noreferrer"
        className="screenshot-link block overflow-hidden"
        aria-label={"Open " + project.title + " screenshot at full size (opens in a new tab)"}>
        <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 680px"
          className="h-auto w-full" />
      </a>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-3 font-mono text-[0.6rem] leading-relaxed text-muted sm:px-5">
        <span>{screenshot.caption}</span>
        <span aria-hidden="true" className="text-brand">Open full screenshot ↗</span>
      </figcaption>
    </figure>
  );
}

// Native disclosures keep case-study content accessible without client JavaScript.
function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="project-details border-t border-line">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-brand">
        <span>Project details<span className="sr-only">: {project.title}</span></span>
        <span aria-hidden="true" className="details-toggle font-mono text-xl font-light" />
      </summary>
      <div className="grid gap-6 pt-1 pb-6 sm:grid-cols-2">
        <div>
          <h4 className="eyebrow mb-2">The problem</h4>
          <p className="text-sm leading-[1.8] text-muted">{project.details.problem}</p>
        </div>
        <div>
          <h4 className="eyebrow mb-2">The solution</h4>
          <p className="text-sm leading-[1.8] text-muted">{project.details.solution}</p>
        </div>
        <div className="sm:col-span-2">
          <h4 className="eyebrow mb-3">Key features</h4>
          <ul className="grid list-disc gap-x-8 gap-y-2 pl-4 text-sm leading-relaxed text-muted marker:text-brand sm:grid-cols-2">
            {project.details.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
      </div>
    </details>
  );
}

export default function Home() {
  const featuredProjects = projects.filter((project) => "featured" in project && project.featured);
  const otherScreenshots = projects.filter((project) => "screenshot" in project && !("featured" in project));
  const moreProjects = projects.filter((project) => !("screenshot" in project));
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="shell flex flex-wrap items-center justify-between gap-x-3 pt-4 md:grid md:min-h-20 md:grid-cols-[1fr_auto_1fr] md:gap-x-6 md:py-0">
          <Wordmark />
          <nav aria-label="Main navigation"
            className="order-last mt-4 flex w-full items-center justify-between gap-2 border-t border-line md:order-0 md:mt-0 md:w-auto md:gap-7 md:border-0">
            {navigation.map(({ id, label }) => (
              <a key={id} href={"#" + id} className="nav-link text-xs sm:text-sm">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand md:justify-self-end">
            Let’s talk <Icon name="external" />
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" aria-labelledby="hero-title" className="shell pt-12 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.65fr_1fr] md:gap-10 lg:gap-16">
            <div>
              <p className="mb-6 flex items-center gap-3 text-sm font-medium text-muted">
                <span aria-hidden="true" className="h-px w-7 bg-brand" /> Hi, I’m Novel. A web developer.
              </p>
              <h1 id="hero-title" className="hero-title">
                Thoughtful code.<br /><span className="text-brand">Useful products.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-[1.8] text-muted">
                I turn ideas into web apps, REST APIs, and automations that make everyday work a little easier.
                Built with care, from Cebu, Philippines.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#portfolio" className="button-primary">Explore my work <Icon name="down" /></a>
                <CvLink />
              </div>
            </div>

            <figure className="portrait-card relative mx-auto w-full max-w-[22rem] md:mr-0">
              <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
                <div className="relative aspect-[1.06] overflow-hidden bg-[#273731]">
                  <Image src="/frontend/assets/images/profile.jpg" alt="Portrait of Novel P. Chavez"
                    fill preload sizes="(max-width: 767px) 352px, (max-width: 1200px) 32vw, 352px"
                    className="object-cover object-top grayscale" />
                  <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
                  <span aria-hidden="true" className="absolute top-4 right-4 grid size-9 place-items-center rounded-md border border-white/25 bg-canvas/70 font-mono text-sm text-brand backdrop-blur-sm">
                    &lt;/&gt;
                  </span>
                </div>
                <figcaption className="relative px-5 pt-1 pb-5">
                  <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
                  <p className="mt-1 text-xs text-muted">{profile.role}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-brand">
                    <Icon name="pin" />{profile.location}
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-y border-line py-5 lg:mt-18">
            <p className="eyebrow text-muted">From backend to frontend</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium sm:gap-x-8" aria-label="Core toolkit">
              {["PHP", "Laravel", "React", "Tailwind CSS"].map((tool, index) => (
                <li key={tool} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="font-mono text-xs text-brand">{["{ }", "L", "↳", "≈"][index]}</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="portfolio" aria-labelledby="work-title" className="shell py-16 lg:py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-title" className="section-title">Ideas, brought to life.</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="project-link">
              More on GitHub <Icon name="external" />
            </a>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <article key={project.title} className="featured-project overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="grid md:grid-cols-[.85fr_1.15fr]">
                  <div className="p-6 md:p-8">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/25 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-brand uppercase">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />Featured project
                    </span>
                    <p className="eyebrow text-muted">{project.category}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight lg:text-4xl">{project.title}</h3>
                    <p className="mt-4 mb-5 max-w-md text-sm leading-[1.8] text-muted">{project.description}</p>
                    <ProjectTags project={project} />
                    <div className="mt-6"><ProjectActions project={project} featured /></div>
                  </div>
                  <div className="grid min-w-0 content-center bg-canvas/40 md:border-l md:border-line">
                    <ProjectScreenshot project={project} />
                  </div>
                </div>
                <div className="px-6 md:px-8"><ProjectDetails project={project} /></div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid items-start gap-5 md:grid-cols-2">
            {otherScreenshots.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="border-b border-line bg-canvas/40"><ProjectScreenshot project={project} /></div>
                <div className="flex flex-col px-6 pt-6 lg:px-7">
                  <p className="eyebrow text-muted">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 mb-5 text-sm leading-[1.8] text-muted">{project.description}</p>
                  <ProjectTags project={project} />
                  <div className="mt-4 mb-3"><ProjectActions project={project} /></div>
                  <ProjectDetails project={project} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <p className="eyebrow mb-4 text-muted">More things I’ve built</p>
            {moreProjects.map((project, index) => (
              <article key={project.title} className="grid items-start gap-x-6 gap-y-3 border-t border-line py-6 md:grid-cols-[.85fr_1fr] lg:grid-cols-[.9fr_1.1fr_auto]">
                <div className="flex gap-4">
                  <span aria-hidden="true" className="mt-1 font-mono text-xs text-brand">{"0" + (index + 5)}</span>
                  <div>
                    <h3 className="text-lg leading-snug font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1 font-mono text-[0.65rem] text-muted">{project.category}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ProjectTags project={project} />
                  <div className="mt-4"><ProjectDetails project={project} /></div>
                </div>
                <div className="md:col-start-2 lg:col-start-auto"><ProjectLink project={project} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="border-y border-line bg-surface/45 py-16 lg:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-18">
            <div>
              <p className="eyebrow">02 / The journey</p>
              <h2 id="experience-title" className="section-title">Experience.</h2>
              <p className="mt-5 max-w-xs text-sm leading-[1.8] text-muted">
                Over three years building, maintaining, and improving applications alongside teams.
              </p>
              <CvLink className="project-link mt-5" />
            </div>
            <div className="border-t border-line">
              {experience.map((job, index) => (
                <details key={job.company} open={index === 0} className="experience-entry group border-b border-line">
                  <summary className="relative cursor-pointer list-none py-6 pr-10">
                    <span className="font-mono text-[0.67rem] text-brand">{job.dates}</span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{job.role}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{job.company}</p>
                    <span aria-hidden="true" className="absolute top-8 right-0 flex size-7 items-center justify-center font-mono text-2xl font-light text-brand group-open:rotate-45">+</span>
                  </summary>
                  <ul className="mb-6 list-disc space-y-2 pl-4 text-sm leading-[1.8] text-muted marker:text-brand">
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="shell grid gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow">03 / Behind the code</p>
            <h2 id="about-title" className="section-title">A curious mind.<br />A practical approach.</h2>
            <p className="mt-6 text-sm leading-[1.9] text-muted">
              I’m a web developer based in Cebu. My work spans e-commerce, internal tools, and workflow automation,
              with a focus on PHP, Laravel, and REST APIs.
            </p>
            <p className="mt-3 text-sm leading-[1.9] text-muted">
              I enjoy understanding how things work, solving the small details, and building software that people can rely on.
              There’s always something new to learn.
            </p>
            <div className="mt-7 border-l-2 border-brand/45 pl-4">
              <p className="eyebrow text-muted">Education</p>
              <p className="mt-2 text-sm font-semibold">BS in Information Technology</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">Salazar Colleges of Science and Institute Technology · 2016–2020</p>
            </div>
          </div>
          <section id="skills" aria-labelledby="skills-title" className="lg:pt-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 id="skills-title" className="text-2xl font-semibold tracking-tight">My toolkit</h3>
              <span aria-hidden="true" className="font-mono text-xl text-brand">&lt;/&gt;</span>
            </div>
            <dl className="border-t border-line">
              {skills.map((group) => (
                <div key={group.label} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-sm font-semibold">{group.label}</dt>
                  <dd className="text-sm leading-[1.8] text-muted">{group.tools.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </section>

        <section id="certifications" aria-labelledby="certifications-title" className="shell border-t border-line py-16 lg:py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / Continuing to learn</p>
              <h2 id="certifications-title" className="section-title">Certifications & learning.</h2>
            </div>
            <p className="max-w-xs text-sm leading-[1.8] text-muted">Courses completed as I keep building my skills.</p>
          </div>
          <div className="space-y-5">
            {certifications.map((certificate) => (
              <article key={certificate.code} className="grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-2">
                <a href={certificate.pdf} target="_blank" rel="noopener noreferrer"
                  className="screenshot-link grid content-center border-b border-line bg-white md:border-r md:border-b-0"
                  aria-label={"Open " + certificate.title + " course completion certificate (PDF, opens in a new tab)"}>
                  <Image src={certificate.preview} alt={"TESDA certificate of completion awarded to Novel Prias Chavez for " + certificate.title + " (" + certificate.course + "), " + certificate.completed + "."}
                    width={1400} height={990} sizes="(max-width: 767px) 100vw, 600px" className="h-auto w-full" />
                </a>
                <div className="flex flex-col justify-center p-6 lg:p-9">
                  <p className="eyebrow">{certificate.issuer}</p>
                  <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">{certificate.title}</h3>
                  <p className="mt-2 font-mono text-xs text-muted">{certificate.course}</p>
                  <span className="mt-5 w-fit rounded-full border border-brand/25 px-3 py-1.5 text-xs text-brand">{certificate.type}</span>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <dt className="text-muted">Completed</dt>
                      <dd><time dateTime={certificate.date}>{certificate.completed}</time></dd>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <dt className="text-muted">Certificate code</dt>
                      <dd className="font-mono">{certificate.code}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="project-link"
                      aria-label={"View " + certificate.title + " certificate (PDF, opens in a new tab)"}>
                      View certificate <Icon name="external" />
                    </a>
                    <a href={certificate.pdf} download className="button-secondary"><Icon name="download" />Download PDF</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="shell pb-12 lg:pb-16">
          <div className="contact-panel grid items-center gap-10 rounded-2xl bg-brand p-6 text-[#10372b] sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-12">
            <div>
              <p className="eyebrow text-[#285b49]">05 / Let’s connect</p>
              <h2 id="contact-title" className="mt-4 text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]">
                Let’s build<br />something good.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#285b49]">
                Have a project or a role in mind? I’d like to hear from you.
              </p>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[0.65rem] tracking-[0.12em] text-[#285b49] uppercase">Start a conversation</p>
              <a href={"mailto:" + profile.email} className="mt-3 flex min-h-12 items-center justify-between gap-3 border-b border-[#10372b]/30 pb-3 text-base font-semibold break-all hover:underline hover:underline-offset-4 sm:text-xl">
                {profile.email} <Icon name="external" />
              </a>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1" aria-label="Phone numbers">
                {profile.phones.map((phone) => (
                  <li key={phone.href}><a href={phone.href} className="inline-flex min-h-11 items-center gap-2 text-xs font-medium whitespace-nowrap hover:underline hover:underline-offset-4">
                    <Icon name="phone" />{phone.label}
                  </a></li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1" aria-label="Social links">
                {socials.map((social) => (
                  <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold hover:underline hover:underline-offset-4">
                    {social.label} <Icon name="external" />
                  </a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="shell flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-6">
          <Wordmark />
          <p className="order-last w-full text-xs text-muted sm:order-0 sm:w-auto">© {profile.name} · Built with care.</p>
          <a href="#home" className="project-link text-xs">Back to top <Icon name="up" /></a>
        </div>
      </footer>
    </>
  );
}
