import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Author, Album, AlbumsObj } from '../book';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private book: BookService) {}

  searchText: string = '';

  albumArray: Album[];
  selectedAlbum: Album = {
    amgArtistId: null,
    artistId: null,
    artistName: '',
    artistViewUrl: '',
    artworkUrl100: '', // jpg
    artworkUrl60: '', // smaller jpg
    collectionCensoredName: '',
    collectionExplicitness: '',
    collectionId: null,
    collectionName: '',
    collectionPrice: null,
    collectionType: '',
    collectionViewUrl: '',
    contentAdvisoryRating: '',
    copyright: '',
    country: '',
    currency: '',
    primaryGenreName: '',
    releaseDate: '', // or Date?
    trackCount: null,
    wrapperType: '',
  };

  resultCount: number;

  ngOnInit() {
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

  onSelect(album: Album) {
    if (album) {
      this.selectedAlbum.collectionName = album.collectionName;
    }
  }
}
