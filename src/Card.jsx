export function Card ({title, description, bgColor, image, nextStep}){

return (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={nextStep}>Següent</button>
    </>
)
}