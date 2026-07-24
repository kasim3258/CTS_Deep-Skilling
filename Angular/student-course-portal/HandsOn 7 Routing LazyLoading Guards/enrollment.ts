import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from './course-service';

@Injectable({
  providedIn: 'root'
})
export class Enrollment {

  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    const course = this.courseService.getCourseById(courseId);

    if (course && !this.enrolledCourses.find(c => c.id === courseId)) {
      this.enrolledCourses.push(course);
    }
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourses;
  }

  unenroll(courseId: number): void {
    this.enrolledCourses = this.enrolledCourses.filter(
      course => course.id !== courseId
    );
  }
}