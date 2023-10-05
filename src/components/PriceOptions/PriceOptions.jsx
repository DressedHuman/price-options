import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities during regular hours",
                "Limited access to group fitness classes",
                "No access to specialized training programs"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "Unlimited access to gym facilities",
                "Access to all group fitness classes",
                "Discounts on specialized training programs"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "Unlimited access to gym facilities",
                "Access to all group fitness classes",
                "Personalized training programs",
                "Nutritional consultation",
                "Towel service"
            ],
            "price": 80.00
        }
    ]

    return (
        <div className="text-center">
            <h2 className="text-6xl">Best Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-3">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id} />)
                }
            </div>
        </div>
    );
};

export default PriceOptions;