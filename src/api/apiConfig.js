const apiKey = process.env.REACT_API_KEY_MOVIE;
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9f8b1f5029dd392671149ff221564658',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;