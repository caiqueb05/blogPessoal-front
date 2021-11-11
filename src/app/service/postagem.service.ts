import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoalcaiquegenturma34.herokuapp.com/postagens/${id}`)
  }

  geAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://blogpessoalcaiquegenturma34.herokuapp.com/postagens', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://blogpessoalcaiquegenturma34.herokuapp.com/postagens/cadastrar', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalcaiquegenturma34.herokuapp.com/postagens/atualizar', postagem, this.token)
  }

  deletePostagem(id: number){
    this.http.delete(`https://blogpessoalcaiquegenturma34.herokuapp.com/postagens/deletar/${id}`)
  }
}
