import "../App.css"

// export default function ProductCard({ cardData, index, selectedState, selectCardToggle }) {
//     return (
//         <div 
//             className={selectedState ? `selected-card` : "product-card"}
//             onClick={(e) => {
//                 selectCardToggle(index)
//             }}
//         >
//             <center>
//             <h3> Name - ID </h3>
//             {cardData.name} - {cardData.id}
//             <br />
//             <h4> Product Description: </h4>
//             {cardData.description}
//             </center>
//         </div>
//     )
// }

export default function ProductCard({ cardData, index, selectedState, selectCardToggle }) {
    let proper = selectedState ? (
        <div 
            className="selected-card"
            onClick={(e) => {
                selectCardToggle(index)
            }}
        >
            <center>
                {/* <img src={cardData.styles} /> */}
                <img 
                    className="product-image" 
                    src="https://i.insider.com/59ca65fefca6e427008b4776?width=2000&format=jpeg&auto=webp"
                />
                <br />
                <i>
                    <p> {cardData.slogan} </p>
                </i>
            </center>
        </div>
    ) : (
        <div 
            className="product-card"
            onClick={(e) => {
                selectCardToggle(index)
            }}
        >
            <center>
            <h3> Name - ID </h3>
            {cardData.name} - {cardData.id}
            <br />
            <h4> Product Description: </h4>
            {cardData.description}
            </center>
        </div>
    );

    return <div> {proper} </div>
}