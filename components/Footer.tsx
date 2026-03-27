"use client";
import { Github, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  companyName?: string;
  tagline?: string;
  sections?: FooterSection[];
  socialLinks?: {
    instagram?: string;
    github?: string;
    email?: string;
  };
  copyrightText?: string;
};

const defaultSections: FooterSection[] = [
  {
    title: "Organization",
    links: [
      { label: "Our Mission", href: "/about" },
      { label: "How We Help", href: "/about" },
      { label: "Awareness", href: "/awareness" },
      { label: "Community", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "BPD Statistics", href: "/statistics" },
      { label: "Beyond the Diagnosis", href: "/beyond-the-diagnosis" },
      { label: "Crisis Help", href: "/contact" },
      { label: "Research Sources", href: "/sources" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get Help", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "About Satvabhala", href: "/about" },
    ],
  },
];

export const Footer = ({
  companyName = "Satvabhala",
  tagline = "Hope, Healing, and Awareness for BPD",
  sections = defaultSections,
  socialLinks = {
    instagram:
      "https://www.instagram.com/sidsfoundation?igsh=eWk3Y3hoaG92cmVt&utm_source=qr",
    github: "https://github.com/Aaxhirrr/Satvabhala-Foundation",
    email: "satvabhalafoundation@gmail.com",
  },
  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyright =
    copyrightText ||
    `Copyright ${currentYear} ${companyName}. All rights reserved.`;

  return (
    <footer className="w-full bg-muted border-t border-border">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-2"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-headings">
                {companyName}
              </h3>
              <p className="text-sm leading-5 text-muted-foreground max-w-xs font-sans">
                {tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-foreground hover:border-[#202020] transition-colors duration-150"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-foreground hover:border-[#202020] transition-colors duration-150"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-foreground hover:border-[#202020] transition-colors duration-150"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="col-span-1"
            >
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide font-sans">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-sans">
              {copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-sans"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-sans"
              >
                Get Help
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
