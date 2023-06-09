// import { Injectable } from '@angular/core';
// import {
//   NgbDateAdapter,
//   NgbDateParserFormatter, NgbDateStruct
// } from '@ng-bootstrap/ng-bootstrap';

// /**
//  * This Service handles how the date is represented in scripts i.e. ngModel.
//  */
// @Injectable()
// export class CustomAdapter extends NgbDateAdapter<string> {
//   readonly DELIMITER = '-';

//   fromModel(value: string): NgbDateStruct {
//     if (!value)
//       return null
//     let parts = value.split('/');
//     return { year: +parts[0], month: +parts[1], day: +parts[2] }
//   }

//   toModel(date: NgbDateStruct): string // from internal model -> your mode
//   {
//     return date ? date.year + "/" + ('0' + date.month).slice(-2)
//       + "/" + ('0' + date.day).slice(-2) : null
//   }
// }

// /**
//  * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
//  */
// @Injectable()
// export class CustomDateParserFormatter extends NgbDateParserFormatter {
//   readonly DELIMITER = '/';

//   parse(value: string): NgbDateStruct {
//     if (!value)
//       return null
//     let parts = value.split('/');
//     return { year: +parts[0], month: +parts[1], day: +parts[2] } as NgbDateStruct

//   }
//   format(date: NgbDateStruct): string {
//     return date ? date.year + "/" + ('0' + date.month).slice(-2) + "/" + ('0' + date.day).slice(-2) : null
//   }
// }
