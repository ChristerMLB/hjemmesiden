"use client";

import { useEffect, useState } from "react";
import { BloggPost, SinglePost } from "@/types/Blogg";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";
import ErrorComponent from "@/components/ErrorComponent";

type HomeProps = { post: string | null | undefined; page: number };

const Blogg = ({ post, page }: HomeProps) => {
   const [blogList, setBlogList] = useState<BloggPost[] | null>(null);
   const [blogSingle, setBlogSingle] = useState<SinglePost | undefined>(undefined);
   const [error, setError] = useState<Error | null>(null);

   const loadingPost = {
      id: 1,
      tittel: "Laster bloggposter",
      dato: new Date(),
      hovedbilde_url: "loading.gif",
      hovedbilde_alttext: "",
      ingress: "...",
   };

   useEffect(() => {
      async function getBlogPosts() {
         try {
            // throw new Error('TESTING!');
            const fetchedBlogArray = await fetch("api/bloggposter").then((response) =>
               response.json()
            );
            setBlogList(fetchedBlogArray.reverse());
         } catch (e) {
            setError(Error(`Fant ikke bloggpostene i databasen: ${e}`));
         }
      }
      getBlogPosts();
   }, []);

   useEffect(() => {
      async function getBrodTekst() {
         if (blogList && post) {
            const posten = blogList.find((p) => p.tittel === post);
            try {
               const fetchedBlogBrod = await fetch(`/api/bloggbrod?id=${posten?.id}`).then(
                  (response) => response.json()
               );
               const assembledSinglePost = {
                  id: posten?.id as number,
                  tittel: posten?.tittel as string,
                  dato: posten?.dato as Date,
                  hovedbilde_url: posten?.hovedbilde_url as string,
                  hovedbilde_alttext: posten?.hovedbilde_alttext as string,
                  brodtekst: fetchedBlogBrod[0].brodtekst as string,
                  ekstra: fetchedBlogBrod[0].ekstra as string || "",
               };
               setBlogSingle(assembledSinglePost);
            } catch (e) {
               setError(
                  Error(
                     `Fant ikke bloggposten, er adressen kanskje stavet feil? Nei ikke vet jeg, men det er ikke så mange bloggposter, så du kan sikkert finne den du leter etter hvis du blar deg frem <a href="/bhg">her</a>.<br>${e}`
                  )
               );
            }
         }
      }
      getBrodTekst();
   }, [blogList, post]);

   return (
      <div className="blogwrapper">
         <h1 className="mt-4">Barndomspolitikk</h1>
         {error && <ErrorComponent error={error} reset={() => location.reload()} />}
         {blogList && !post ? (
            blogList.map((post, i) =>
               // show the post preview if i is between (page * 10) and 10 + (page * 10) - so from 0 to 10 if page is 0.
               i < 10 + page * 10 && i >= page * 10 ? (
                  <BlogCard post={post} key={`bloggpost-${post.id}`} />
               ) : null
            )
         ) : blogList && post ? (
            <BlogPost singlePost={blogSingle ? blogSingle : null} />
         ) : (
            !error && <BlogCard post={loadingPost} />
         )}
      </div>
   );
};
export default Blogg;
