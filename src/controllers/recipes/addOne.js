const asyncHandler = require('express-async-handler')

const {
  HttpError,
  isEverythingUnique,
  GOOGLE_BUCKETS,
  removeFileLocally,
  resizeImage,
} = require('@helpers')

const { RecipesService, GoogleCloud } = require('@services')

const addOne = async (req, res) => {
  const { title, category, instructions, description, time, ingredients } =
    req.body
  if (
    !title ||
    !category ||
    !instructions ||
    !description ||
    !time ||
    !ingredients
  ) {
    throw HttpError(400, 'Please provide all required fields')
  }
  const isUniqueIngredients = isEverythingUnique(ingredients, 'id')
  if (!isUniqueIngredients) {
    throw HttpError(400, 'Ingredients contains a duplicate value')
  }

  // TODO: Implement images upload
  const { id: owner } = req.user
  const { path, filename } = req.file
  const [extension] = filename.split('.').reverse()
  const cloudFilename = `thumb_${owner}.${extension}`

  await resizeImage(path, 350, 350)
  const thumb = await GoogleCloud.uploadFile(
    path,
    cloudFilename,
    GOOGLE_BUCKETS.RECIPES_IMAGES
  )

  await removeFileLocally(path)

  // const encodedTitle = encodeURIComponent(title)
  // const thumb = `https://placehold.co/700x700?text=${encodedTitle}`
  // const preview = `https://placehold.co/350x350?text=${encodedTitle}`

  // const { id: owner } = req.user
  const data = await RecipesService.createNew({
    ...req.body,
    thumb,
    owner,
  })
  if (!data) {
    throw HttpError(500, 'Server Error')
  }
  res.status(201).json({ code: 201, message: 'success', data })
}

module.exports = { addOne: asyncHandler(addOne) }
