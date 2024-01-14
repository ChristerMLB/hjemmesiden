"use client";

import { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";
import { BloggPost, BloggBrodTekst} from "@/types/Blogg";
import { useSearchParams } from "next/navigation";

type HomeProps = { post: string | null | undefined };

const Blogg = ({ post }: HomeProps) => {
   const [blogList, setBlogList] = useState<BloggPost[] | null>(null);
   const [blogBrod, setBlogBrod] = useState<BloggBrodTekst | undefined>(undefined);

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
      <>
         <h1>{blogBrod ? blogBrod.brodtekst : null}</h1>
         <h1>{post ? post : null}</h1>
      </>
   );
};
export default Blogg;
