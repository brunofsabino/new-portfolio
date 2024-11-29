import { Post } from "@/types/Post";

type Props = {
    params: {
        slug: string[]
    }
}

const Page = async ({ params }: Props) => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const post: Post = await postRequest.json();

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