import ProductCard from './ProductCard';

export default function ProductCardList ({ arrayOfData, selectedState, selectCardToggle }) {
    let ProductCardArray = arrayOfData.map((card, index) => (
        <ProductCard 
            cardData={card}
            index={index}
            selectedState={index === selectedState}
            selectCardToggle={selectCardToggle}
        />
    ));

    return <div className="product-cards">{ProductCardArray}∂</div>
}