import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe'; 

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [CommonModule, HighlightPipe], 
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css']
})
export class VacationRequestsComponent implements OnInit {
  cards: any[] = [];                
  filteredCards: any[] = [];        
  currentSearchTerm: string = '';    
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCards().subscribe(data => {
      this.cards = data.slice(0, 4); 
      this.filteredCards = this.cards;
    });
  }

  getCards(): Observable<any[]> {
    return this.http.get<any[]>('assets/cards.json'); 
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    this.currentSearchTerm = inputElement.value.toLowerCase(); 
  
    if (!this.currentSearchTerm) {
      this.filteredCards = this.cards; 
    } else {
      this.filteredCards = this.cards.filter(card => 
        card.name.toLowerCase().includes(this.currentSearchTerm) ||
        card.submittedOn.toLowerCase().includes(this.currentSearchTerm) ||
        card.salary.toString().includes(this.currentSearchTerm)
      );
    }
  }
  
}
