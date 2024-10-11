import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight.pipe';

@Component({
  selector: 'app-all-vacation-requests',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe],
  templateUrl: './a-ll-vacation-requests.component.html',
  styleUrls: ['./a-ll-vacation-requests.component.css'],
})
export class AllVacationRequestsComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  currentPage: number = 1;
  usersPerPage: number = 20;
  totalPages: number = 0;
  searchTerm: string = '';
  selectAll: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>('assets/cards.json').subscribe(data => {
      this.users = data.map(user => ({ ...user, selected: false }));
      this.filteredUsers = [...this.users];
      this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage);
    });
  }

  getPaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  toggleAllSelections() {
    this.filteredUsers.forEach(user => user.selected = this.selectAll);
  }

  toggleUserSelection(user: any) {
    user.selected = !user.selected;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.salary.toString().includes(term) ||
      user.submittedOn.toLowerCase().includes(term)
    );

    this.totalPages = Math.ceil(this.filteredUsers.length / this.usersPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages) || 1;
  }
}
