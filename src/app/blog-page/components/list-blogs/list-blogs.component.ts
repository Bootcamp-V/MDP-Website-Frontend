import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataBlog } from '../../model/blog.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {
  page!: number;
  blog$!: Observable<DataBlog[]>
  arrayblogs: DataBlog[] = [];
  selectedCategory: string | null = null;

  constructor(private router: Router, private routerActive: ActivatedRoute, private servicio: BlogService) {
    this.blog$ = this.servicio.dataBlogsGeneral$
  }

  ngOnInit() {
    this.getblogs();
  }

  getblogs() {
    this.servicio.getBlogs().subscribe(
      (res) => {
        this.arrayblogs = res.data;
        this.generateListByCategory(); 
        this.page = 1; 
        this.servicio.dataBlogsGeneral$.next(this.arrayblogs);
        this.servicio.arrayblogs = this.arrayblogs;
      }
    );
  }

  getIndex(id: number) {
    this.router.navigate([id], { relativeTo: this.routerActive });
  }

  getNameIndex(name: string) {
    for (let index = 0; index < this.arrayblogs.length; index++) {
      if (this.arrayblogs[index].attributes.Title === name) {
        this.getIndex(index);
      }
    }
  }

  getNameDateIndex(name: string, UrlImage: string) {
    for (let index = 0; index < this.arrayblogs.length; index++) {
      if (
        this.arrayblogs[index].attributes.Title === name &&
        this.arrayblogs[index].attributes.UrlImage === UrlImage
      ) {
        this.getIndex(index);
      }
    }
  }

  getCategory(category: string) {
    this.selectedCategory = category;
    this.getblogs(); 
  }

  generateListByCategory() {
    if (this.selectedCategory) {
      this.arrayblogs = this.arrayblogs.filter(
        (item) => item.attributes.Category === this.selectedCategory
      );
    }
  }
}