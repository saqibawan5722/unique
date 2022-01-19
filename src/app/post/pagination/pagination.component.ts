import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() setPage: EventEmitter<any>;
	@Input() perPage: number;
	@Input() totalPages: number;
	@Input() currentPage: number;
	@Input() perPageCount: boolean = false;
	
	constructor(protected paginationService: PaginationService)
	{
		this.setPage = new EventEmitter()
		this.perPage = 5;
		this.totalPages = 0;
		this.currentPage = 1;
	}

	ngOnInit() 
	{

	}

	makePagination(page): void
	{
		let dict = {page: page, perPage: this.perPage};
		this.setPage.emit(dict);
	}

	onChangePerPage(): void
	{
		// this.paginationService.perPage = this.perPage;
		// this.onPerPageOutput.emit()
		let dict = {page: 1, perPage: this.perPage};
		this.setPage.emit(dict);
	}


}
