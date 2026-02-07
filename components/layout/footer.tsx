import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              DevPeaks<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Premium digital solutions for ambitious brands. We build the future of the web.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:devpeaks26@gmail.com" className="hover:text-white transition-colors">
                  devpeaks26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+923143147711" className="hover:text-white transition-colors">
                    +92 314 3147711
                  </a>
                  <a href="tel:+923426621797" className="hover:text-white transition-colors">
                    +92 342 6621797
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Strategy</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Branding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Socials</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://instagram.com/devpeaks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com/devpeaks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://linkedin.com/company/devpeaks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DevPeaks. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
