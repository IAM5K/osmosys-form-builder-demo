export const dynamicDropdownData = {
  data: [
    {
      id: 1,
      name: 'India',
      cities: [
        {
          id: 1,
          name: 'Mumbai',
        },
        {
          id: 2,
          name: 'Delhi',
        },
        {
          id: 3,
          name: 'Bangalore',
        },
      ],
    },
    {
      id: 2,
      name: 'USA',
      cities: [
        {
          id: 1,
          name: 'New York',
        },
        {
          id: 2,
          name: 'Los Angeles',
        },
        {
          id: 3,
          name: 'Chicago',
        },
      ],
    },
    {
      id: 3,
      name: 'UK',
      cities: [
        {
          id: 1,
          name: 'London',
        },
        {
          id: 2,
          name: 'Manchester',
        },
        {
          id: 3,
          name: 'Birmingham',
        },
      ],
    },
  ],
};

export const formConfig = {
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
                events: {
                  change: 'change',
                  focus: 'focus',
                  blur: 'blur',
                },
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
                events: {
                  change: 'change',
                  focus: 'focus',
                  blur: 'blur',
                },
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
                events: {
                  change: 'change',
                  focus: 'focus',
                  blur: 'blur',
                },
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
      {
        columns: [
          {
            span: 12,
            elements: [
              {
                type: 'button',
                label: 'Reset',
                action: 'reset',
                class: 'btn btn-warning me-2',
                styleClass: 'custom-reset',
              },
              {
                type: 'button',
                label: 'Custom Action',
                action: 'customAction',
                class: 'btn btn-info me-2',
                styleClass: 'custom-action',
              },
              {
                type: 'button',
                label: 'Submit',
                action: 'submit',
                class: 'btn btn-success',
                styleClass: 'custom-submit',
              },
            ],
            styleClass: 'd-flex justify-content-start',
          },
        ],
      },
    ],
  },
};
