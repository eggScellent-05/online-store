import { useForm } from 'react-hook-form'

const AddProduct = ({ setProductData }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  } //temperory

  function isUrl(value) {
    const pattern =
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,}(\/[a-z0-9-]*)*$/i
    return pattern.test(value)
  }

  const onSubmit = async (data) => {
    await delay(2)
    const newProduct = {
      ...data,
      productImage: isUrl(data.productImage)
        ? data.productImage
        : `https://picsum.photos/300?random=${Math.random()}`,
    } //no need of parsing or explicitly add price/rate bcoz type already number
    setProductData((prevData) => [...prevData, newProduct])
    reset()
  }

  return (
    <>
      <div className="mb-25 flex flex-col">
        <form
          className="mb-15 ml-13 flex flex-col space-y-0.5"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form-input"
            type="text"
            placeholder="image link here"
            {...register('productImage', {
              required: { value: true, message: 'image link is required' },
            })}
          />
          {errors.productImage && (
            <p className="error-style">{errors.productImage.message}</p>
          )}

          <input
            className="form-input"
            type="text"
            placeholder="product title"
            {...register('productTitle', {
              required: { value: true, message: 'title is required' },
            })}
          />
          {errors.productTitle && (
            <p className="error-style">{errors.productTitle.message}</p>
          )}

          <input
            className="form-input"
            type="number"
            step="0.01"
            placeholder="price"
            {...register('price', {
              required: { value: true, message: 'price is required' },
              min: { value: 0.01, message: 'Price must be greater than zero' },
            })}
          />
          {errors.price && (
            <p className="error-style">{errors.price.message}</p>
          )}

          <input
            className="form-input"
            type="number"
            step="0.1"
            placeholder="product rating"
            {...register('rating', {
              required: { value: true, message: 'rating is required' },
              min: { value: 0, message: 'Rating must be at least 0' },
              max: { value: 5, message: 'Rating cannot be more than 5' },
            })}
          />
          {errors.rating && (
            <p className="error-style">{errors.rating.message}</p>
          )}
          <br />

          <input
            className="form-input bg-green-400"
            type="submit"
            value="Submit"
            disabled={isSubmitting}
          />
        </form>
        {isSubmitting && <div className="self-center text-3xl">Loading...</div>}
      </div>
    </>
  )
}

export default AddProduct
