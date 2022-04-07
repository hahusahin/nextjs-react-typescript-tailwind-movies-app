interface genreType {
  id: number;
  name: string;
}

export default interface MovieDetailType {
  id: number;
  genres: genreType[];
  imageUrl: string;
  overview: string;
  relDate: string;
  runtime: number;
  title: string;
  userRating: string;

}