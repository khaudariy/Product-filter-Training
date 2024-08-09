


const ProductList = () => {

    const products =[];



    return(
        <div>
            <h3> List </h3>
            <div className="row mt-5">

                {products.map(product => (

                        <div key={product.id} class="card" >
                        <img src={product.image} class='card-img-top'/>
                        <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>

                ))}



            </div>
        </div>
    )
}

export default ProductList