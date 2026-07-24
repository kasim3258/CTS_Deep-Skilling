import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course-service';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseSummaryWidget
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  availableCourses = 0;

  constructor(private courseService: CourseService) {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    this.availableCourses = this.courseService.getCourses().length;
    console.log('HomeComponent initialized - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

}