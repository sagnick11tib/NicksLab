import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import ScrollToTopButton from "@/components/shared/ScrollToTop"

interface ChildrenProps {
    readonly children: React.ReactNode
  }
export default function Layout({ children }: ChildrenProps) {
    return (
      <>
        <Header />
        <div className="container mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-5 md:px-16">
          {children}
        </div>
        <ScrollToTopButton />
        <Footer footerWidth="max-w-5xl" />
      </>
    )
  }