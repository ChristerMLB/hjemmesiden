import { SinglePost } from "@/types/Blogg";
import parse from 'html-react-parser';
import Image from "next/image";

type BlogPostProps = {
    singlePost: SinglePost|null,
}

const BlogPost = ({singlePost}:BlogPostProps) => {

    if(!singlePost){ return null }

    const dato = new Date(singlePost.dato);

    return ( 
        <div className="blogcard">
            <div className="blogcardheader">
                <Image src={`/img/blogg/${singlePost.hovedbilde_url}`} alt={singlePost.hovedbilde_alttext} width={1000} height={500} />
                <div className="blogcardheadertext">
                    <h2>{singlePost.tittel}</h2>
                    <time>{dato.toLocaleDateString('nb-NO')}</time>
                </div>
            </div>
            <div className="brodtekst blogcardtext">{parse(singlePost.brodtekst)}</div>
            <div className="ekstra blogcardtext">{parse(singlePost.ekstra)}</div>
        </div>
     );
}

export default BlogPost;