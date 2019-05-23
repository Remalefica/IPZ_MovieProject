import { Injectable } from '@angular/core';
import { CommentFilm } from '../../models/commentFilm';
import { of, Observable } from 'rxjs';
import { MessageService } from '../message/message.service';
import { ErrorHandlingService } from '../authorisation/error-handling.service';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  private url : string;

  constructor(private messageService: MessageService,
    private httpClient: HttpClient,
    private errorHandlingService: ErrorHandlingService) { 
      this.url = 'https://localhost:5001' + '/api/comment';
    }

  getCommentsByFilmId(filmId : number) : Observable<CommentFilm[]> {
    let PATH = this.url +'/film/' + `${filmId}`;


    return this.httpClient.get<CommentFilm[]>(PATH);
}

  getCommentByUserIdLast(userId: string) : Observable<CommentFilm>{
    let PATH = this.url +'/user/' + userId + '/last';

    return this.httpClient.get<CommentFilm>(PATH);
  }

  getCommentByUserId(userId: string) : Observable<CommentFilm[]>{
    let PATH = this.url +'/user/' + userId;

    return this.httpClient.get<CommentFilm[]>(PATH);
  }

  addComment(comment : CommentFilm): Observable<CommentFilm>{
    let PATH = this.url + '/Create';

    return this.httpClient.post<CommentFilm>(PATH, comment)
        .pipe(
          catchError(this.errorHandlingService.handleError)
          );
  }
}

