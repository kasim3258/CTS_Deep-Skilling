import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  selectedCourseId = 0;

  courses = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3
    },

    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 4
    },

    {
      id: 4,
      name: 'SQL',
      code: 'SQL401',
      credits: 2
    },

    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC501',
      credits: 5
    }

  ];

  onEnroll(courseId: number) {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

}