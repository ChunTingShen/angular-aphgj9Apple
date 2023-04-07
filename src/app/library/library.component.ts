import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BooksObj, Book, Author, Album, AlbumsObj } from '../book';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private book: BookService) {}

  searchText: string = '';
  selectedBook: Book = {
    all_authors: '',
    title: '',
    authors: null,
  };

  albumArray: Album[];
  resultCount: number;

  ngOnInit() {
    // this.getData();
    this.getAlbum('');
  }

  getAlbum(search: string) {
    this.book.getAlbums(search).subscribe((res: AlbumsObj) => {
      // console.log(res)
      this.resultCount = res.resultCount;
      this.albumArray = res.results;
      console.log(this.albumArray);
    });
  }
}
