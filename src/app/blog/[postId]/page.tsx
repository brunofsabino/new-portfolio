
import { Post } from "@/types/Post";

type Props = {
    params: {
        postId: string
    }
}

const Page = async ({ params }: Props) => {
    if (!params || !params.postId) {
        return <div>Post não encontrado</div>;
    }
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    if (!post.id) return <div>Post nao encontrado</div>

    return (
        // <div>Filtros: {params.slug.join(', ')}</div>
        <div>
            <div>ID: {post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    )
}

export default Page;

export const generateStaticParams = async () => {

    const postReq = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts: Post[] = await postReq.json();

    return posts.map(post => ({
        postId: post.id.toString()
    }))
}