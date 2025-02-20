import sandwich from '../assets/images/img/Fattoush salad.png'
import star from '../assets/images/icons/star-icon.png'

const Products = ({ productImage, productTitle, price, rating }) => {
  return (
    <div className="flex h-[350px] min-w-[300px] flex-col rounded-2xl border border-neutral-200 px-5 py-6 shadow-xl">
      <img
        src={productImage}
        alt="product"
        className="mx-6 mb-8 h-48 w-48 self-center"
      />
      <h6 className="mb-5 text-xl font-medium tracking-wide">{productTitle}</h6>

      <div className="flex justify-between">
        <h6 className="text-lg font-semibold tracking-wide">
          <span className="orange-heading">$</span>
          {price}
        </h6>

        <div className="flex items-center gap-2">
          <img className="h-3 w-3" src={star} alt="star" />
          <p className="text-">{rating}</p>
        </div>
      </div>
    </div>
  )
}

function Specials() {
  return (
    <div className="mb-40">
      <h4 className="lg:text-md orange-heading mb-3 uppercase">
        Special Dishes
      </h4>
      <h1 className="normal-heading max-w-[500px]">
        Standout Dishes From Our Menu
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10">
        <Products
          productImage={sandwich}
          productTitle="Fattoush salad"
          price="5.99"
          rating="4.5"
        />
        <Products
          productImage={sandwich}
          productTitle="Fattoush salad"
          price="5.99"
          rating="4.5"
        />
        <Products
          productImage={sandwich}
          productTitle="Fattoush salad"
          price="5.99"
          rating="4.5"
        />
      </div>
    </div>
  )
}

export default Specials
