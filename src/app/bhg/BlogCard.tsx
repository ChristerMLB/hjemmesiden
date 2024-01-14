import { BloggPost } from "@/types/Blogg";

type BlogCardProps = {
    post: BloggPost,
}

const BlogCard = ({post}:BlogCardProps) => {
    return ( post.tittel );
}

export default BlogCard;