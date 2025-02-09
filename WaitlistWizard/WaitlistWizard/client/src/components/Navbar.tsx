import { Link } from "wouter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              AI Expert
            </span>
          </a>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/work">
            <a className="hover:text-primary transition-colors">My Work</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-primary transition-colors">Blog</a>
          </Link>
          <Link href="#pricing">
            <a className="hover:text-primary transition-colors">Pricing</a>
          </Link>
          <Link href="#contact">
            <a className="hover:text-primary transition-colors">Contact</a>
          </Link>
          <ThemeSwitcher />
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}