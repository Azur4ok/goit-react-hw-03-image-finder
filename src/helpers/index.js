import { fetchData } from 'api/fetchApi';

const fetchDataHelper = async requestsArgv => {
  try {
    const { hits, totalHits } = await fetchData(
      requestsArgv.query,
      requestsArgv?.page
    );
    const imagesArray =
      hits &&
      hits.map(object => ({
        id: object.id,
        largeImageUrl: object.largeImageURL,
        alt: object.tags,
        image: object.webformatURL,
      }));

    return { imagesArray, totalImages: totalHits };
  } catch (error) {
    console.log(error);
    return alert('failed to fetch data');
  }
};

export default fetchDataHelper;
