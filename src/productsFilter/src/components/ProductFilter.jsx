


const ProductFilter = () => {

    const category=[];
    return(
        <div>
            <h3> Filter</h3>
            <div className="mt-5">
                <h5> Category </h5>
            {category.map(cat => (
                <div className="form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <lable className="form-check-label" > {category.name} </lable>
                </div>
            ))}
            </div>
            <div className="mt-5">
                <h5> Price </h5>
                <div className="row">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Min Price" />
                    </div>
                <div className="col">
                        <input type="number" className="form-control" placeholder="Max Price" />
                </div>
                </div>

            </div> 

        </div>
    )
}

export default ProductFilter