import { Container } from "@/src/components/ui/section";
import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  Heart,
} from "lucide-react";

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3h2.5V21h3.5z" />
  </svg>
);
const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.5h4V21H3V9.5zM9 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.78V21H9V9.5z" />
  </svg>
);
const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.25 5 12 5 12 5s-6.25 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.75 1.77C5.75 19 12 19 12 19s6.25 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
  </svg>
);
const TwitterIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const footerLinks = {
  "Useful Links": [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ],
  "Our Services": [
    { name: "SEO", href: "/services/seo" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Web Designing", href: "/services/web-designing" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "E-Commerce Web Designing", href: "/services/ecommerce-web-designing" },
    { name: "PHP Development", href: "/services/php-development" },
  ],
};

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/craftmediahub/", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/craftmediahub/", Icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/craftmediahub/", Icon: LinkedinIcon },
  { name: "YouTube", href: "#", Icon: YoutubeIcon },
  { name: "Twitter", href: "#", Icon: TwitterIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-200">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Newsletter CTA strip */}
      <div className="relative">
        <Container className="pt-10 md:pt-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  Stay in the loop
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-white">
                  Subscribe for design tips, tech trends & special offers.
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Join 2,000+ founders growing their brand with Craft Media Hub.
                </p>
              </div>
              <form
                className="flex w-full max-w-md items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 p-1.5 shadow-inner"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="relative py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="group flex items-center gap-2 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fuchsia-500 text-white shadow-lg shadow-primary/30 transition group-hover:scale-105">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Craft <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">Media Hub</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              A leading creative agency in Delhi NCR — crafting websites, brands
              and digital experiences that convert.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:craftmediahub@gmail.com"
                className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                craftmediahub@gmail.com
              </a>
              <a
                href="tel:+919278127184"
                className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                +91-9278127184
              </a>
              <div className="group flex items-start gap-2.5 text-sm text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <span className="pt-1">
                  Office No 10114, Gour City Mall, Greater Noida, U.P.
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="relative inline-block font-semibold text-white mb-4 pb-2">
                {title}
                <span className="absolute left-0 -bottom-0 h-0.5 w-10 rounded-full bg-gradient-to-r from-primary to-fuchsia-500" />
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      <span className="transition-transform group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social / WhatsApp */}
          <div>
            <h4 className="relative inline-block font-semibold text-white mb-4 pb-2">
              Follow Us
              <span className="absolute left-0 -bottom-0 h-0.5 w-10 rounded-full bg-gradient-to-r from-primary to-fuchsia-500" />
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-5">
              <h4 className="font-semibold text-white mb-2">WhatsApp Us</h4>
              <a
                href="https://wa.me/919278127184"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-white">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                +91-9278127184
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Craft Media Hub. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-slate-400">
            Made with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> in India
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
