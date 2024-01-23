type OverskriftProps = {tekst:string};

const ToppOverskrift = ({tekst}:OverskriftProps)=> {
    return (
        <div className="overskrift">
            <h1>{tekst}</h1>
        </div>
    )
}
export default ToppOverskrift;