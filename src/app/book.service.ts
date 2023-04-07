import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksObj, Book, Author } from './book';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  url: string = 'https://openlibrary.org/subjects/world.json';

  apiUrl: string = 'https://itunes.apple.com/search?term=';

  // ${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50

  getBooks() {
    return this.http.get(this.url);
  }

  getAlbums(searchTerm: string) {
    return this.http.get(
      this.apiUrl +
        searchTerm +
        '&media=music&entity=album&attribute=artistTerm&limit=50'
    );
  }
}
