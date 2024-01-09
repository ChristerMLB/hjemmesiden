'use client'

import MainNav from "@/components/MainNav";
import IntroBoks from "../web/IntroBoks";
import Blogg from "./Blogg";
import { useSearchParams } from "next/navigation";

type HomeProps = {};

const Bhg = ({} : HomeProps ) => {

    const postParam = useSearchParams()?.get("post");
    const dummyProsjekt = {navn: 'hello', ingress:'tester introboks', index: 0, mertekst:null, teknologier: null, previewimg: 'placeholder', previewimgalt: 'placeholder', extraimg: null, extraimgalt: null, url: null, gitHubUrl: null, old: false};

    return (
        <>
            <MainNav />
            <div className="wrapper">
                <IntroBoks intro={dummyProsjekt} />
                <h1>HELLO!</h1>
            </div>
            <Blogg post={postParam} />
        </>
    );
}

export default Bhg;