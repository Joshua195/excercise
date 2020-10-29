import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<any>;
  private userLocal$: BehaviorSubject<any>;

  constructor() {
    this.userLocal$ = new BehaviorSubject(null);
    this.user$ = this.userLocal$.asObservable();
  }

  public login(data): void {
    const { email } = data;
    const userType = email.includes('admin') ? { ...data, isAdmin: true } : { ...data, isAdmin: false };
    localStorage.setItem('user', JSON.stringify(userType));
    this.populateUser();
  }

  public signOut(): void {
    localStorage.removeItem('user');
    this.populateUser();
  }

  public populateUser(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userLocal$.next(user ? user : null);
  }

  get user(): any {
    return this.userLocal$.getValue();
  }

  public getUser(): any {
    return this.userLocal$.getValue();
  }
}
