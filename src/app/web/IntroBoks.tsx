'use client';
import { WebArray } from "@/types/Web";

type IntroProps = {
    webArray: WebArray | null,
  };
  const IntroBoks = ({webArray}: IntroProps) => {
    return (<div className="introBoks"><h1>{webArray ? webArray[0].navn : '...'}</h1>
    <p>{webArray ? webArray[0].ingress : '...'}</p></div>);
  }
export default IntroBoks;