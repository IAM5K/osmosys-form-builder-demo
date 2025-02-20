import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { OsmosysFormComponent } from 'osmosys-form';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgJsonEditorModule,
    OsmosysFormComponent,
  ],
  templateUrl: './dynamic-dropdown.component.html',
  styleUrls: ['./dynamic-dropdown.component.scss'],
})
export class DynamicDropdownComponent implements OnInit {
  formConfig = {
    title: {
      text: 'Dynamic Dropdown Form',
      class: 'text-center mb-4',
    },
    layout: {
      type: 'grid',
      rows: [
        {
          columns: [
            {
              span: 12,
              elements: [
                {
                  type: 'select',
                  label: 'Country',
                  name: 'country',
                  options: [],
                  overrides: {
                    options: 'getCountryOptions',
                  },
                  validations: [
                    {
                      name: 'required',
                      validator: 'required',
                      message: 'Country is required',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          columns: [
            {
              span: 12,
              elements: [
                {
                  type: 'select',
                  label: 'State',
                  name: 'state',
                  options: [],
                  overrides: {
                    options: 'getStateOptions',
                  },
                  validations: [
                    {
                      name: 'required',
                      validator: 'required',
                      message: 'State is required',
                    },
                  ],
                  dependentOn: 'country',
                },
              ],
            },
          ],
        },
        {
          columns: [
            {
              span: 12,
              elements: [
                {
                  type: 'select',
                  label: 'City',
                  name: 'city',
                  options: [],
                  overrides: {
                    options: 'getCityOptions',
                  },
                  validations: [
                    {
                      name: 'required',
                      validator: 'required',
                      message: 'City is required',
                    },
                  ],
                  dependentOn: 'state',
                },
              ],
            },
          ],
        },
      ],
    },
  };

  overrides: { [key: string]: any } = {
    getCountryOptions: () => {
      console.log('Override mapping: getCountryOptions called');
      return this.getCountryOptions();
    },
    getStateOptions: (parentValue: string) => {
      console.log(`Override mapping: getStateOptions called with parentValue: ${parentValue}`);
      return this.getStateOptions(parentValue);
    },
    getCityOptions: (parentValue: string) => {
      console.log(`Override mapping: getCityOptions called with parentValue: ${parentValue}`);
      return this.getCityOptions(parentValue);
    },
  };
  previewData: any;
  formData: any;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.previewData = this.formConfig;
    this.formData = {};
  }

  // Dummy function to mimic an API call for country options
  getCountryOptions() {
    console.log('Fetching country options');
    return of([
      { label: 'USA', value: 'USA' },
      { label: 'Canada', value: 'Canada' },
      { label: 'Mexico', value: 'Mexico' },
    ]).pipe(delay(1000)); // Simulate a delay of 1 second
  }

  // Dummy function to mimic an API call for state options based on the parent's selected value
  getStateOptions(parentValue: string) {
    // Validate that the parent's selected value is one of the expected country codes
    if (!['USA', 'Canada', 'Mexico'].includes(parentValue)) {
      console.warn(`Invalid parent value for state dropdown: ${parentValue}. Returning empty options.`);
      return of([]).pipe(delay(1000));
    }
    console.log(`Fetching state options for country: ${parentValue}`);
    const states: { [key: string]: { label: string; value: string }[] } = {
      USA: [
        { label: 'California', value: 'CA' },
        { label: 'Texas', value: 'TX' },
        { label: 'New York', value: 'NY' },
      ],
      Canada: [
        { label: 'Ontario', value: 'ON' },
        { label: 'Quebec', value: 'QC' },
        { label: 'British Columbia', value: 'BC' },
      ],
      Mexico: [
        { label: 'Jalisco', value: 'JA' },
        { label: 'Nuevo Leon', value: 'NL' },
        { label: 'Puebla', value: 'PU' },
      ],
    };
    return of(states[parentValue] || []).pipe(delay(1000));
  }

  // Dummy function to mimic an API call for city options based on the parent's selected value
  getCityOptions(parentValue: string) {
    // Validate that the parent's selected value is one of the expected state codes
    const validStates = ['CA', 'TX', 'NY', 'ON', 'QC', 'BC', 'JA', 'NL', 'PU'];
    if (!validStates.includes(parentValue)) {
      console.warn(`Invalid parent value for city dropdown: ${parentValue}. Returning empty options.`);
      return of([]).pipe(delay(1000));
    }
    console.log(`Fetching city options for state: ${parentValue}`);
    const cities: { [key: string]: { label: string; value: string }[] } = {
      CA: [
        { label: 'Los Angeles', value: 'LA' },
        { label: 'San Francisco', value: 'SF' },
        { label: 'San Diego', value: 'SD' },
      ],
      TX: [
        { label: 'Houston', value: 'HOU' },
        { label: 'Dallas', value: 'DAL' },
        { label: 'Austin', value: 'AUS' },
      ],
      NY: [
        { label: 'New York City', value: 'NYC' },
        { label: 'Buffalo', value: 'BUF' },
        { label: 'Rochester', value: 'ROC' },
      ],
      ON: [
        { label: 'Toronto', value: 'TOR' },
        { label: 'Ottawa', value: 'OTT' },
        { label: 'Hamilton', value: 'HAM' },
      ],
      QC: [
        { label: 'Montreal', value: 'MTL' },
        { label: 'Quebec City', value: 'QC' },
        { label: 'Laval', value: 'LAV' },
      ],
      BC: [
        { label: 'Vancouver', value: 'VAN' },
        { label: 'Victoria', value: 'VIC' },
        { label: 'Kelowna', value: 'KEL' },
      ],
      JA: [
        { label: 'Guadalajara', value: 'GDL' },
        { label: 'Zapopan', value: 'ZAP' },
        { label: 'Tlaquepaque', value: 'TLA' },
      ],
      NL: [
        { label: 'Monterrey', value: 'MTY' },
        { label: 'San Nicolas', value: 'SN' },
        { label: 'Apodaca', value: 'APO' },
      ],
      PU: [
        { label: 'Puebla City', value: 'PUE' },
        { label: 'Tehuacan', value: 'TEH' },
        { label: 'Atlixco', value: 'ATL' },
      ],
    };
    return of(cities[parentValue] || []).pipe(delay(1000));
  }

  onFormSubmit(data: any) {
    console.log('Form submitted:', data);
  }
  // Convert this to event and from event here we can extract the action and form
  onButtonAction(action: string, form: any) {
    if (action === 'customAction') {
      console.log('Custom action triggered:', form.value);
    } else if (action === 'reset') {
      form.reset();
    } else {
      console.log('Button action:', action);
    }
  }
  eventHandlers = {
    change: (event: Event) => this.handleEvent(event.type, event),
  };

  handleEvent(eventName: string, event: Event): void {
    console.log(`Event triggered: ${eventName}`);
    const target = event.target as HTMLSelectElement;
    const elementName = target.name;
    const selectedValue = target.value;
    console.log(`Element name: ${elementName}, Selected value: ${selectedValue}`);
    // Find the element with the dependent dropdown
    const dependentElement = this.findDependentElement(elementName);
    if (dependentElement) {
      console.log(`Found dependent element: ${dependentElement.name}`);
      const overrideFunction = this.overrides[dependentElement.overrides.options];
      if (overrideFunction) {
        overrideFunction(selectedValue).subscribe((data: any) => {
          console.log(`Fetched options for ${dependentElement.name}:`, data);
          dependentElement.options = data;
          this.cdr.detectChanges();
        });
      }
    }
  }
  
  findDependentElement(elementName: string): any {
    for (const row of this.formConfig.layout.rows) {
      for (const column of row.columns) {
        for (const element of column.elements) {
          if ((element as any).dependentOn === elementName) {
            return element;
          }
        }
      }
    }
    return null;
  }
}
