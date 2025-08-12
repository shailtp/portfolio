
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";
import { ReactNode } from "react";

type ContactInfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

const ContactInfoItem = ({ icon, label, value, href }: ContactInfoItemProps) => (
  <a href={href} className="flex items-center gap-4 group">
    <span className="p-3 bg-background rounded-full text-foreground/70 group-hover:text-foreground transition-colors">
      {icon}
    </span>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium group-hover:text-foreground/90 transition-colors">
        {value}
      </p>
    </div>
  </a>
);

const ContactInfo = () => {
  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "patelshail233@gmail.com",
      href: "mailto:patelshail233@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (415) 769-8468",
      href: "tel:+14157698468",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={16} />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Portfolio",
      icon: <Globe size={16} />,
      url: "https://yourportfolio.com",
    },
  ];

  return (
    <div className="lg:col-span-2 space-y-8">
      <h3 className="text-2xl font-semibold">Get In Touch</h3>
      
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <ContactInfoItem key={index} {...item} />
        ))}
      </div>
      
      <div className="pt-4">
        <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={cn(
                "px-4 py-2 border border-border rounded-full text-sm",
                "hover:bg-background transition-colors flex items-center gap-2"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
