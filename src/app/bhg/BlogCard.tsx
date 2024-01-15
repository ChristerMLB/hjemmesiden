import { BloggPost } from "@/types/Blogg";
import parse from 'html-react-parser';
import Image from "next/image";
import { useEffect } from "react";

type BlogCardProps = {
    post: BloggPost,
}

const BlogCard = ({post}:BlogCardProps) => {

    const dato = new Date(post.dato);        

    return ( 
        <div className="blogcard">
            <div className="blogcardheader">
                <Image src={`/img/blogg/${post.hovedbilde_url}`} alt={post.hovedbilde_alttext} width={1000} height={500} />
                <h3>{post.tittel}</h3>
                <aside>{dato.toLocaleDateString('nb-NO')}</aside>
            </div>
            <div className="blogcardtext">
                {parse(post.ingress)}
            </div>
        </div>
     );
}

export default BlogCard;