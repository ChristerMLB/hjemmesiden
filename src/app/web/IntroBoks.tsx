'use client';
import { WebProject } from "@/types/Web";

type IntroProps = {
    intro: WebProject | null,
  };
  const IntroBoks = ({intro}: IntroProps) => {
    return (<div className="introBoks"><h1>{intro ? intro.navn : '...'}</h1>
    <p>{intro ? intro.ingress : '...'}</p></div>);
  }
export default IntroBoks;