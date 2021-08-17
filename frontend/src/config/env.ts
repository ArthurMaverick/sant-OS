export const API_URL = 'http://localhost:8000/api'

//GET METHOD
export const GET_ALL_POSTS = `${API_URL}/findposts`
export const GET_POSTS_BY_CATEGORY = `${API_URL}/findcategories`
export const GET_POST_BY_SLUG = `${API_URL}/findpost`

// POST METHOD
  export const CREATE_ARTICLES = `${API_URL}/createposts`

// PUT METHOD
  export const UPDATE_POST = `${API_URL}/updatepost`

// DEL METHOD 
export const DELETE_POST = `${API_URL}/deleteposts`