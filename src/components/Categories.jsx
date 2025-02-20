import sandwich from '../assets/images/img/sandwich.png'

const CategoryBox = ({ image, categoryName }) => {
  return (
    <div className="flex max-w-[326px] flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200 px-14 py-8 shadow-lg">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C1F1C6] p-4">
        <img className="h-auto w-auto" src={image} alt="category-image" />
      </div>
      <h3 className="mt-4 mb-1 text-2xl font-semibold tracking-wide">
        {categoryName}
      </h3>
    </div>
  )
}

const Categories = () => {
  return (
    <div className="mb-40 text-center">
      <h4 className="lg:text-md orange-heading mb-3">CUSTOMER FAVORITES</h4>
      <h1 className="normal-heading">Popular Categories</h1>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CategoryBox image={sandwich} categoryName="Category" />
        <CategoryBox image={sandwich} categoryName="Category" />
        <CategoryBox image={sandwich} categoryName="Category" />
        <CategoryBox image={sandwich} categoryName="Category" />
      </div>
    </div>
  )
}

export default Categories
