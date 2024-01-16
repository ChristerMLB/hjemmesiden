"use client";

import { useEffect, useState } from "react";
import { BloggPost, BloggBrodTekst } from "@/types/Blogg";
import BlogCard from "./BlogCard";

type HomeProps = { post: string | null | undefined; page: number };

const Blogg = ({ post, page }: HomeProps) => {
   const [blogList, setBlogList] = useState<BloggPost[] | null>(null);
   const [blogBrod, setBlogBrod] = useState<BloggBrodTekst | undefined>(undefined);

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
            const fetchedBlogArray = await fetch("api/bloggposter").then((response) =>
               response.json()
            );
            setBlogList(fetchedBlogArray);
         } catch (e) {
            throw new Error(`Fant ikke bloggpostene i databasen: ${e}`);
         }
      }
      getBlogPosts();
   }, []);

   useEffect(() => {
      async function getBrodTekst() {
         if (blogList && post) {
            const id = blogList.find((p) => p.tittel === post)?.id;
            try {
               const fetchedBlogBrod = await fetch(`api/bloggbrod?id=${id}`).then((response) =>
                  response.json()
               );
               setBlogBrod(fetchedBlogBrod);
            } catch (e) {
               throw new Error(
                  `Fant ikke bloggposten, er adressen kanskje stavet feil? Nei ikke vet jeg, men det er ikke så mange bloggposter, så du kan sikkert finne den du leter etter hvis du blar deg frem <a href="/bhg">her</a>.<br>${e}`
               );
            }
         }
      }
      getBrodTekst();
   }, [blogList, post]);

   return (
      <div className="blogwrapper">
         <h1>Blogg</h1>
         {blogList ? (
            blogList.map((post, i) =>
               // show the post preview if i is between (page * 10) and 10 + (page * 10) - so from 0 to 10 if page is 0.
               i < 10 + page * 10 && i >= page * 10 ? <BlogCard post={post} key={post.id} /> : null
            )
         ) : (
            <BlogCard post={loadingPost} />
         )}
      </div>
   );
};
export default Blogg;
