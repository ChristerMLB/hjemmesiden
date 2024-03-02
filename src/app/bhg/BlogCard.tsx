import { BloggPost } from "@/types/Blogg";
import parse from "html-react-parser";
import Image from "next/image";

type BlogCardProps = {
   post: BloggPost;
};

const BlogCard = ({ post }: BlogCardProps) => {
   const dato = new Date(post.dato);

   return (
      <div className="blogcard">
         <div className="blogcardheader">
            <a href={`?post=${post.tittel}`}>
            <Image
               src={`/img/blogg/${post.hovedbilde_url}`}
               alt={post.hovedbilde_alttext}
               width={1200}
               height={600}
               placeholder="blur"
            />

            <div className="blogcardheadertext">
                  <h2>{post.tittel}</h2>

               <time>{dato.toLocaleDateString("nb-NO")}</time>
            </div>
               </a>
         </div>
         <div className="blogcardtext">
            {parse(post.ingress)}
            <p>
               <a href={`?post=${post.tittel}`}>...les videre</a>
            </p>
         </div>
      </div>
   );
};

export default BlogCard;
