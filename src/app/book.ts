export interface Author {
  key: string;
  name: string;
}

export interface Album {
  amgArtistId: number;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string; // jpg
  artworkUrl60: string; // smaller jpg
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionType: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  copyright: string;
  country: string;
  currency: string;
  primaryGenreName: string;
  releaseDate: string; // or Date?
  trackCount: number;
  wrapperType: string;
}

export interface AlbumsObj {
  resultCount: number;
  results: Album[];
}
