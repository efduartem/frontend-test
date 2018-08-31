import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EventDate, Event } from '../../models/eventModels';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.scss'],
  providers: [ DatePipe ]
})
export class EventsCreateComponent implements OnInit {
  eventForm: FormGroup;
  eventDateForm: FormGroup;
  eventDatesTableDisplayedColumns: string[] = ['date', 'time', 'actions'];
  eventImageURL = '';
  eventDatesTableDataSource: MatTableDataSource<EventDate> = new MatTableDataSource();
  eventDateList: EventDate[] = [];
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe,
    public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      title                 : [ null, [ Validators.required ] ],
      description           : [ null, [ Validators.required ] ],
      eventImage            : [ null, [ Validators.required ] ],
      location              : [ null, [ Validators.required ] ],
    });
    this.eventDateForm = this.formBuilder.group({
      date                  : [ null, [ Validators.required ] ],
      time                  : [ null, [ Validators.required ] ],
    });

    this.eventForm.get('eventImage').valueChanges.subscribe((value) => {
      if (!value) {
        this.eventImageURL = '';
        return;
      }
      this.eventImageURL = value;
    });
  }

  addDate(formDirective: FormGroupDirective) {
    if (this.eventDateForm.valid) {
      const eventDateFormDate = this.eventDateForm.getRawValue();
      const eventDate: EventDate = new EventDate(this.datePipe.transform(eventDateFormDate.date, 'dd/MM/yyyy'), eventDateFormDate.time);
      this.eventDateList.push(eventDate);
      this.eventDatesTableDataSource.data = this.eventDateList;
      formDirective.resetForm();
      this.eventDateForm.reset();
    } else {
      this.validateForm(this.eventDateForm);
    }
  }

  removeEventDate(index: number) {
    this.eventDateList.splice(index, 1);
    this.eventDatesTableDataSource.data = this.eventDateList;
  }

  async saveEvent() {
    if (this.eventForm.valid) {
      if (this.eventDateList.length === 0) {
        this.showSnacbar('Please add at least one date for the event!!', 3000);
        return;
      }
      let event: Event;
      event = Object.assign({}, this.eventForm.getRawValue());
      event.dates = this.eventDateList.map((eventDate: EventDate) => {
        return `${eventDate.date} ${eventDate.time}`;
      });
      // console.log(event);
      this.showSnacbar('Done!', 2500);
      // await this._productService.createProduct(this.product);
      this.router.navigate(['/events']);
    } else {
      this.validateForm(this.eventForm);
    }
  }

  validateForm(validatedForm: FormGroup) {
    for (const i of Object.keys(validatedForm.controls)) {
      validatedForm.controls[i].markAsDirty();
      validatedForm.controls[i].updateValueAndValidity();
    }
  }

  showSnacbar(message: string, duration: number) {
    this.snackBar.open(message, '', {
      duration
    });
  }

}
