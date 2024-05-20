import { Alert } from "../components/Alert";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";

export function Home() {
    useDocumentTitle("Mon blog");

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Alert type="danger">{error.toString()}</Alert>
    }

    return <>
        <h1 className="mb-3 p-2">Traveling</h1>
        <div className="row">
            {/* pour map il faut mettre toujours un key */}
            {data.map((post) => (
                <div key={post.id} className="col-12 col-md-6 col-lg-4">

                    <Card
                        image={'https://source.unsplash.com/random/280x180?travel&sig=' +
                            Math.floor(Math.random() * 100) +
                            1}
                        title={post.title}
                        description={post.body}
                        href={`#post:${post.id}`}
                        buttonLabel="Voir l'article"
                        className="mb-2"
                    />

                </div>
            ))}
        </div>
    </>
}
