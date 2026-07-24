import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course-service';
import { Enrollment } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {

  selectedCourseId = 0;
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private enrollmentService: Enrollment
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onEnroll(courseId: number): void {
    this.enrollmentService.enroll(courseId);

    console.log('Enrolled Courses:', this.enrollmentService.getEnrolledCourses());

    this.selectedCourseId = courseId;

    alert('Course enrolled successfully!');
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}