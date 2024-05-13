import { useHashNavigation } from "./hooks/useHashNavigation.js";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Single } from "./pages/Single.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import './App.css'
import { ErrorBoundary } from "react-error-boundary";
import { Alert } from "./components/Alert.jsx";
import { Header } from "./components/Header.jsx";


// Observer lorsque le # change au niveau de la page
// un hook personalise qui renvoie un objet avec le nom de la page



function App() {

  //la déstructuration { page }  permet d'extraire directement page de l'objet retourné par useHashNavigation().
  const { page } = useHashNavigation()
  const pageContent = getPageContent(page)

  return (
    <>
      <Header page={page}/>
      <div className="container my-3">
        <ErrorBoundary FallbackComponent={PageError}>
          {pageContent}
        </ErrorBoundary>
      </div>
    </>
  );
}

function PageError({ error }) {
  return <Alert type="danger">{error.toString()}</Alert>
}

function getPageContent(page) {
  if (page === 'home') {
    return <Home />
  }
  if (page === 'contact') {
    return <Contact />
  }
  if (page === 'post') {
    return <Single />
  }
  return <NotFound page={page} />
}

export default App
