import { Component, OnInit } from '@angular/core';

import { Test } from '../test';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  tests: Test[] | undefined;
  constructor(private userService: TestServiceService) {}

  ngOnInit(): void {
    this.userService.findAll().subscribe((data) => {
      this.tests = data;
    });
  }
}
