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

  constructor(private router: Router, private routerActive: ActivatedRoute, private servicio: BlogService) {
    this.blog$ = this.servicio.dataBlogsGeneral$
  }

    ngOnInit() {

      this.getblogs();


    }

    getblogs(){
      this.servicio.getBlogs().subscribe(
        (res) => {

          for (let i of res.data) {
            this.arrayblogs.push(i);
          }
          this.servicio.dataBlogsGeneral$.next(this.arrayblogs);
          this.servicio.arrayblogs = this.arrayblogs;
        });
    }

    getIndex(id: number){
      this.router.navigate([id], { relativeTo: this.routerActive });
    }




  }
