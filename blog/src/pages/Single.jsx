import { useFetch } from "../hooks/useFetch";
import { Alert } from "../components/Alert";
import { Spinner } from "../components/Spinner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Button } from "../components/Button";
import { useToggle } from "../hooks/useToggle";
import { EditPostModal } from "./Single/EditPostModal";

export function Single({ postId }) {



    const { data: post, loading, error, setData } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    useDocumentTitle(post?.title)

    const [isEditing, toggleEditing] = useToggle(false);

    if (loading) { return <Spinner /> }
    if (error) { return <Alert type="danger">{error.toString()}</Alert> }




    const handleSave = (data) => {
        setData({
            ...post,
            ...data
        })
        toggleEditing()
    }

    
    return <>
        <div className="content my-4 flex-column mx-auto p-4">
            <h1 className="my-4  mx-auto">{post.title}</h1>

            <div>
                <img
                    src={'https://source.unsplash.com/random/580x300?travel&sig=' + Math.floor(Math.random() * 100) + 1}
                    alt=''
                    className="card-img-top img-cover  "
                />
                <p className="my-4">{post.body}</p>
            </div>

            <div className="my-3 d-flex mx-auto ">

                {isEditing && <EditPostModal
                    post={post} 
                    onClose={toggleEditing}
                    onSave={handleSave}
                /> }

                <Button variant="secondary me-3" onClick={toggleEditing}>Editer</Button>

                <div className="d-flex my-auto">
                    <a href={`#post:${post.id + 1}`}>Article suivant &gt;</a>
                </div>

            </div>
        </div>

    </>
}