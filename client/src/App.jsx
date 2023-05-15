import { SlideProvider } from "./context/SlideContext"
import { HomePage } from "./pages"

export default function App() {
  return (
    <section className="w-screen min-h-screen xs:h-auto text-3xl font-bold no-underline bg-black centered">
      <SlideProvider>
        <HomePage />
      </SlideProvider>
    </section>
  )
}