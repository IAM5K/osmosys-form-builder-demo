export const configs = {
  simpleForm: {
    "title": {
      "text": "Simple Form",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Name",
                  "name": "name",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Name is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Email",
                  "name": "email",
                  "inputType": "email",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-email",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Email is required"
                    },
                    {
                      "name": "pattern",
                      "validator": "pattern",
                      "value": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                      "message": "Invalid email format"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Comments",
                  "name": "comments",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-comments",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Comments are required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-reset"
                },
                {
                  "type": "button",
                  "label": "Custom Action",
                  "action": "customAction",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-action"
                },
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-start"
            }
          ]
        }
      ]
    }
  },
  addBatches: {
    "title": {
      "text": "Add Batch",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Batch name",
                  "name": "batchname",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Batch name is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Service",
                  "name": "service",
                  "options": [
                    {
                      "label": "Flow Service",
                      "value": "Flow Service Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "Marks Calculation",
                      "value": "Marks Calculation Value"
                    },
                    {
                      "label": "Osmosys Policy",
                      "value": "Osmosys Policy Value"
                    },
                    {
                      "label": "Training Service",
                      "value": "Training Service Value"
                    },
                    {
                      "label": "Validation Missing",
                      "value": "Validation Missing Value"
                    }
                  ],
                  "overrides": {
                    "options": "getCountryOptions",
                    "placeholder": "getPlaceHolder",
                   },
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "date",
                  "label": "Start date",
                  "name": "startdate",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Start date is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "date",
                  "label": "End date",
                  "name": "enddate",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "End date is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "date",
                  "label": "Start time",
                  "name": "starttime",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Start time is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Training location",
                  "name": "traininglocation",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Training location is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Class hours (per day)",
                  "name": "classhours",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Class hours is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "10",
                      "message": "Range: 0 to 10"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 10"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Lab hours (per day)",
                  "name": "labhours",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Lab hours is required"
                    },
                    {
                      "name": "pattern",
                      "validator": "pattern",
                      "value": "^[0-9]+$",
                      "message": "Only numbers allowed"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 10,
              "elements": [
                {
                  "type": "multiselect",
                  "label": "Candidates",
                  "name": "email",
                  "inputType": "email",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-email",
                  "options": [
                    {
                      "label": "Candidate A",
                      "value": "Candidate A Value"
                    },
                    {
                      "label": "Candidate B",
                      "value": "Candidate B Value"
                    },
                    {
                      "label": "Candidate C",
                      "value": "Candidate C Value"
                    },
                    {
                      "label": "Candidate D",
                      "value": "Candidate D Value"
                    },
                    {
                      "label": "Candidate E",
                      "value": "Candidate E Value"
                    },
                    {
                      "label": "Candidate F",
                      "value": "Candidate F Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Candidates are required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "button",
                  "label": "Import",
                  "action": "import",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-subsection"
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Minimum number of students",
                  "name": "minstudents",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Minimum number of students are required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "200",
                      "message": "Range: 0 to 200"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 200"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Maximum number of students",
                  "name": "maxstudents ",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Maximum number of students are required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "200",
                      "message": "Range: 0 to 200"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 200"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Amount",
                  "name": "amount",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Amount"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "2000",
                      "message": "Range: 0 to 2000"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 2000"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Duration (in days)",
                  "name": "duration",
                  "inputType": "number",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Duration is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "30",
                      "message": "Range: 0 to 30"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 30"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "RESET",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "CANCEL",
                  "action": "this prints on console",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "SUBMIT",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        }
      ]
    }
  },
  addExamCreation: {
    "title": {
      "text": "Exam creation",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Exam name",
                  "name": "examname",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Exam name is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Service",
                  "name": "service",
                  "options": [
                    {
                      "label": "Flow Service",
                      "value": "Flow Service Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "Marks Calculation",
                      "value": "Marks Calculation Value"
                    },
                    {
                      "label": "Osmosys Policy",
                      "value": "Osmosys Policy Value"
                    },
                    {
                      "label": "Training Service",
                      "value": "Training Service Value"
                    },
                    {
                      "label": "Validation Missing",
                      "value": "Validation Missing Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Batch",
                  "name": "Batch",
                  "options": [
                    {
                      "label": "Flow Service",
                      "value": "Flow Service Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "Marks Calculation",
                      "value": "Marks Calculation Value"
                    },
                    {
                      "label": "Osmosys Policy",
                      "value": "Osmosys Policy Value"
                    },
                    {
                      "label": "Training Service",
                      "value": "Training Service Value"
                    },
                    {
                      "label": "Validation Missing",
                      "value": "Validation Missing Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Batch is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Question Paper",
                  "name": "questionpaper",
                  "options": [
                    {
                      "label": "Exam",
                      "value": "Exam Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question Paper is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "date",
                  "label": "Exam Start Time",
                  "name": "startdate",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Exam Start Time is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "date",
                  "label": "Exam End Time",
                  "name": "enddate",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Exam End Time is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Exam duration (in minutes)",
                  "name": "Exam duration (in minutes)",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Exam duration (in minutes) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "360",
                      "message": "Range 0 to 360"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range 0 to 360"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Pass percentage",
                  "name": "Pass percentage",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Pass percentage is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "100",
                      "message": "Range 10 to 100"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "10",
                      "message": "Range 10 to 100"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "checkbox",
                  "name": "shufflequestions",
                  "class": "form-control",
                  "styleClass": "new-checkbox",
                  "inline": true,
                  "options": [
                    {
                      "label": "Show hint",
                      "value": "Show hint Value"
                    },
                    {
                      "label": "Show description",
                      "value": "Show description Value"
                    },
                    {
                      "label": "Full screen mode",
                      "value": "Full screen mode Value"
                    },
                    {
                      "label": "Show result",
                      "value": "Show result Value"
                    }
                  ],
                  "validations": [
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "RESET",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "CANCEL",
                  "action": "this prints on console",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "SUBMIT",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        }
      ]
    }
  },
  addQuestionPaper: {
    "title": {
      "text": "Add question paper",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Section",
                  "name": "section",
                  "options": [
                    {
                      "label": "General English",
                      "value": "General English Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "General Knowledge",
                      "value": "General Knowledge Value"
                    },
                    {
                      "label": "Osmosys",
                      "value": "Osmosys Value"
                    },
                    {
                      "label": "Java",
                      "value": "Java Value"
                    },
                    {
                      "label": "Dotnet",
                      "value": "Dotnet Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Section is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "button",
                  "label": "Get subsections",
                  "action": "getsubsections",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-subsection"
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Question paper name",
                  "name": "questionpaper name",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question paper name is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Service",
                  "name": "service",
                  "options": [
                    {
                      "label": "Flow Service",
                      "value": "Flow Service Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "Marks Calculation",
                      "value": "Marks Calculation Value"
                    },
                    {
                      "label": "Osmosys Policy",
                      "value": "Osmosys Policy Value"
                    },
                    {
                      "label": "Training Service",
                      "value": "Training Service Value"
                    },
                    {
                      "label": "Validation Missing",
                      "value": "Validation Missing Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Exam",
                  "name": "questiontype",
                  "options": [
                    {
                      "label": "Exam",
                      "value": "Exam Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Exam is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Subsection"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Complexity"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Question Type"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Total questions available"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Number of questions *"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Marks examined *"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Negative marks (per question)"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Cut-off marks"
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 2,
              "elements": [
                {
                  "type": "input",
                  "name": "Subsection1",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-text",
                  "readonly": true,
                  "value": "Homonyms"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "select",
                  "name": "\tComplexity1",
                  "options": [
                    {
                      "label": "Simple",
                      "value": "Simple Value"
                    },
                    {
                      "label": "Medium",
                      "value": "Medium Value"
                    },
                    {
                      "label": "Complex",
                      "value": "Complex Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Complexity is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "select",
                  "name": "Question type1",
                  "options": [
                    {
                      "label": "MCQ",
                      "value": "MCQ Value"
                    },
                    {
                      "label": "Descriptive",
                      "value": "Descriptive Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question type is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "input",
                  "name": "Total questions available1",
                  "value": "19",
                  "class": "form-control",
                  "styleClass": "custom-input",
                  "readonly": true,
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Total questions available is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Number of questions *1",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Number of questions * is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "19",
                      "message": "Range: 0 to 19"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 19"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Marks examined *1",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Marks examined * is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "100",
                      "message": "Range: 0 to 100"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 100"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Negative marks (per question)1",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Negative marks (per question) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "0",
                      "message": "Range: -10 to 0"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "-10",
                      "message": "Range: -10 to 0"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Cut-off marks1",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Cut-off marks is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "100",
                      "message": "Range: 1 to 100"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "1",
                      "message": "Range: 1 to 100"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 2,
              "elements": [
                {
                  "type": "input",
                  "name": "Subsection2",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-text",
                  "readonly": true,
                  "value": "Antonyms"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "select",
                  "name": "\tComplexity2",
                  "options": [
                    {
                      "label": "Simple",
                      "value": "Simple Value"
                    },
                    {
                      "label": "Medium",
                      "value": "Medium Value"
                    },
                    {
                      "label": "Complex",
                      "value": "Complex Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Complexity is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "select",
                  "name": "Question type2",
                  "options": [
                    {
                      "label": "MCQ",
                      "value": "MCQ Value"
                    },
                    {
                      "label": "Descriptive",
                      "value": "Descriptive Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question type is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "input",
                  "name": "Total questions available2",
                  "value": "16",
                  "class": "form-control",
                  "readonly": true,
                  "styleClass": "custom-input",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Total questions available is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Number of questions *2",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Number of questions * is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "16",
                      "message": "Range: 0 to 16"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 16"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Marks examined *2",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Marks examined * is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "100",
                      "message": "Range: 0 to 100"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range: 0 to 100"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Negative marks (per question)2",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Negative marks (per question) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "0",
                      "message": "Range: -10 to 0"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "-10",
                      "message": "Range: -10 to 0"
                    }
                  ]
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "input",
                  "name": "Cut-off marks2",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Cut-off marks is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "100",
                      "message": "Range: 1 to 100"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "1",
                      "message": "Range: 1 to 100"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 11,
              "elements": [
                {
                  "type": "checkbox",
                  "name": "shufflequestions",
                  "class": "form-control",
                  "styleClass": "new-checkbox",
                  "inline": true,
                  "options": [
                    {
                      "label": "Shuffle questions",
                      "value": "Shuffle questions Value",
                      "checked": false
                    }
                  ],
                  "validations": []
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "button",
                  "label": "ADD",
                  "action": "add",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-add"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Questions added"
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Subsection"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Complexity"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Question Type"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Total questions available"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Number of questions *"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Marks examined *"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Negative marks (per question)"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Cut-off marks"
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Advanced English"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "Homonyms"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "\tSimple"
                }
              ]
            },
            {
              "span": 2,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "MCQ"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "1"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": "1"
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": ""
                }
              ]
            },
            {
              "span": 1,
              "elements": [
                {
                  "type": "paragraph",
                  "value": ""
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "RESET",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "CANCEL",
                  "action": "this prints on console",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "SUBMIT",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                },
                {
                  "type": "button",
                  "label": "SUBMIT AND PUBLISH",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        }
      ]
    }
  },
  addQuestion: {
    "title": {
      "text": "Add question",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Section",
                  "name": "section",
                  "options": [
                    {
                      "label": "General English",
                      "value": "General English Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "General Knowledge",
                      "value": "General Knowledge Value"
                    },
                    {
                      "label": "Osmosys",
                      "value": "Osmosys Value"
                    },
                    {
                      "label": "Java",
                      "value": "Java Value"
                    },
                    {
                      "label": "Dotnet",
                      "value": "Dotnet Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Section is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Sub section",
                  "name": "subsection",
                  "options": [
                    {
                      "label": "Flow Service",
                      "value": "Flow Service Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "Marks Calculation",
                      "value": "Marks Calculation Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Sub section is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "select",
                  "label": "Question type",
                  "name": "questiontype",
                  "options": [
                    {
                      "label": "MCQ",
                      "value": "MCQ Value"
                    },
                    {
                      "label": "Descriptive",
                      "value": "Descriptive Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question type is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Question",
                  "name": "Question",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "codeMirror",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Question hint",
                  "name": "questionhint",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Question hint is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "select",
                  "label": "Complexity",
                  "name": "complexity",
                  "options": [
                    {
                      "label": "Simple",
                      "value": "Simple Value"
                    },
                    {
                      "label": "Medium",
                      "value": "Medium Value"
                    },
                    {
                      "label": "Complex",
                      "value": "Complex Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Complexity is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Correct answer",
                  "name": "correct answer",
                  "rows": 5,
                  "value": "Add correct answer",
                  "class": "form-control",
                  "styleClass": "custom-comments",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Correct answer is required"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Answer description",
                  "name": "answerdescription",
                  "rows": 1,
                  "value": "Add answer description",
                  "class": "form-control",
                  "styleClass": "custom-comments",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Answer description is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "CANCEL",
                  "action": "cancel",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "SUBMIT",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        }
      ]
    }
  },
  addSection: {
    "title": {
      "text": "Add Section",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Section description",
                  "name": "Section description",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-text",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Section description is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Suggestions",
                  "name": "Suggestions",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-comments",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Suggestions are required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-start"
            }
          ]
        }
      ]
    }
  },
  addService: {
    "title": {
      "text": "Add service",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Service name",
                  "name": "servicename",
                  "inputType": "text",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service name is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Mininum number of students",
                  "name": "Mininum number of students",
                  "inputType": "number",
                  "value": 1,
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Mininum number of students is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "500",
                      "message": "Range 1 to 500"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "1",
                      "message": "Range 1 to 500"
                    }
                  ]
                }
              ]
            },
            {
              "span": 6,
              "elements": [
                {
                  "type": "input",
                  "label": "Maximum number of students",
                  "name": "Maximum number of students",
                  "inputType": "number",
                  "value": 500,
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Maximum number of students is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "500",
                      "message": "Range 1 to 500"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "1",
                      "message": "Range 1 to 500"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Lab hours (per day)",
                  "name": "Lab hours (per day)",
                  "inputType": "number",
                  "value": 5,
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Lab hours (per day) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "24",
                      "message": "Range 0 to 24"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range 0 to 24"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Class hours (per day)",
                  "name": "Class hours (per day)",
                  "inputType": "number",
                  "value": 3,
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Class hours (per day) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "24",
                      "message": "Range 0 to 24"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range 0 to 24"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Current amount (Rs)",
                  "name": "Current amount (Rs)",
                  "inputType": "number",
                  "value": 100,
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Current amount (Rs) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "10000",
                      "message": "Range 100 to 10000"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "100",
                      "message": "Range 100 to 10000"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Service description",
                  "name": "Service description",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "codeMirror",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service description is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Duration (in days)",
                  "name": "Duration (in days)",
                  "inputType": "number",
                  "class": "form-control",
                  "styleClass": "custom-number",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Duration (in days) is required"
                    },
                    {
                      "name": "max",
                      "validator": "max",
                      "value": "24",
                      "message": "Range 0 to 24"
                    },
                    {
                      "name": "min",
                      "validator": "min",
                      "value": "0",
                      "message": "Range 0 to 24"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "label": "Service type",
                  "type": "radio",
                  "name": "Service type",
                  "value": "Single Value",
                  "inline": false,
                  "options": [
                    {
                      "label": "Single",
                      "value": "Single Value"
                    },
                    {
                      "label": "Combo",
                      "value": "Combo Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Service type is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "RESET",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "CANCEL",
                  "action": "this prints on console",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-info"
                },
                {
                  "type": "button",
                  "label": "SUBMIT",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-end"
            }
          ]
        }
      ]
    }
  },
  addSubSection: {
    "title": {
      "text": "Add Sub Section",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "select",
                  "label": "Section",
                  "name": "section",
                  "options": [
                    {
                      "label": "General English",
                      "value": "General English Value"
                    },
                    {
                      "label": "General IT",
                      "value": "General IT Value"
                    },
                    {
                      "label": "General Knowledge",
                      "value": "General Knowledge Value"
                    },
                    {
                      "label": "Osmosys",
                      "value": "Osmosys Value"
                    },
                    {
                      "label": "Java",
                      "value": "Java Value"
                    },
                    {
                      "label": "Dotnet",
                      "value": "Dotnet Value"
                    }
                  ],
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Section is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Subsection description",
                  "name": "Subsection description",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-text",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Subsection description is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-red"
                },
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-start"
            }
          ]
        }
      ]
    }
  }
}