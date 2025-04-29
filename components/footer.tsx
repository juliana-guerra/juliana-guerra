import Link from "next/link"
import { Linkedin, Mail, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://medium.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
            aria-label="Medium"
          >
            <FileText className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:contato@exemplo.com"
            className="text-muted-foreground hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio PM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
