import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ title }}</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="" />
    `
})

export class CoursesComponent {
    title = 'Lista de cursos';
    imageUrl = 'http://lorempixel.com/400/200';
}
