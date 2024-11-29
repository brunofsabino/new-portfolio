import { Post } from "@/types/Post";
import next from "next";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const PostsAll = async () => {
    const postReq = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'force-cache' }); //'no-store'
    const posts: Post[] = await postReq.json();

    return posts.map(post => (
        <ul>
            <li key={post.id}>
                {post.title}
            </li>
        </ul>
    ))
}

export default PostsAll