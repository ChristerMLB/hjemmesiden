import { BloggPost } from "@/types/Blogg";
import parse from "html-react-parser";
import Image from "next/image";
import { useEffect } from "react";

type BlogCardProps = {
   post: BloggPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
   const dato = new Date(post.dato);

   return (
      <div className="blogcard">
         <div className="blogcardheader">
            <Image
               src={`/img/blogg/${post.hovedbilde_url}`}
               alt={post.hovedbilde_alttext}
               width={1000}
               height={500}
            />

            <a href={`?post=${post.tittel}`}>
               <h3>{post.tittel}</h3>
            </a>
            
            <aside>{dato.toLocaleDateString("nb-NO")}</aside>
            <hr></hr>
         </div>
         <div className="blogcardtext">{parse(post.ingress)}<a href={`?post=${post.tittel}`}>...les videre</a>
         </div>
            
      </div>
   );
};

export default BlogCard;
