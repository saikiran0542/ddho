export interface IConfig {
  title: string;
  children?: React.ReactNode;
}

export const OnBoardingTransactionDetails = {
  title: "Transaction Details",
  children: [

    // add input fields for id: 1
    {
      id: 1,
      input: "ChoiceGroup",
      name: "refinanceFromOFI",
      label: "Is this a refinance from an OFI?",
      // required: "false",
      options: ["Yes", "No"]
    },

    // add input fields for id: 2
    {
      id: 2,
      input: "ChoiceGroup",
      name:"aggregationQuestionaire",
      label: "Have you used the Aggregation Questionnaire for the aggregation assessment?",
      // required:"",
      options:["Yes", "No"]
    },

    {
      id: 3,
      input: "Text",
      name: "puposeOfLoan",
      label: "What is the purpose of the Loan?",
      required: "true",
      // options: ["Yes", "No"],?
      
    },
    {
      id: 4,
      input: "ChoiceGroup",
      name: "borrowerTypeUnderNCCP",
      label:"Does the Borrower Type & Purpose fall under NCCP?",
      options: ["Yes","No"]

    },

    {
      id: 5,
      input: "Date",
      name: "targetApprovalDate",
      label: "Target Approval Date",
      required: "true",
      options: ["Yes", "No"],
      
    },
    
    {
      id: 6,
      input: "Date",
      name: "requiredFundingDate",
      required: "true",
      label: "Expected Settlement / Required funding Date"
    },

    {
      id: 7,
      input: "Date",
      name: "annualReviewDate",
      label: "Annual Review Due/  Term Expiry Date ",
      required: "true",
      options: ["Yes", "No"],
      
    },
    {
      id: 8,
      input:"Date",
      name:"expiryDate",
      label:"Term Expiry Date",

    },
    
    // add input fields for id: 9
    {
      id: 9,
      input: "ChoiceGroup",
      name: "annualReviewRequired",
      label: "Is there a annual review required? ",
      required: "true",
      options: ["Yes", "No"],
      
    },

    // add input fields for id: 10
    {
      id: 10,
      input: "ChoiceGroup",
      name: "dynamicAnnaulRequired",
      label: "Is a dynamic annual review required? ",
      required: "true",
      options:["Yes", "No"]
    },

    {
      id: 11,
      input: "Text",
      name: "customerNeeds",
      label: "What is the customer needs?",
      required: "true",
      // options: ["Yes", "No"],
      
    },
    {
      id: 12,
      input: "Text",
      name: "loanMeetCustomerNeed",
      label: "How does the loan meet the customers need?",
      required: "true"

    },
    {
      id: 13,
      input: "Text",
      name: "rationaleRecommSol",
      label: "What is the rationale for the recommended solution?",
      required: "true"

    },
{
  id: 14,
  input: "Number",
  name: "noOfEmployees",
label: "No of employees",
},

// add input fields for id: 15
    {
      id: 15,
      input: "ChoiceGroup",
      name: "isRequestUrgent",
      label: "Is this request urgent?",
      required: "true",
      options: ["Yes", "No"]
    },

    {
      id: 16,
      input: "ChoiceGroup",
      name: "propertySettlementInvolved",
      label: "Is there a property settlement involved?",
      // required: "flase",
      options: ["Yes", "No"],
      
    },
    

    {
      id: 17,
      input: "Dropdown",
      name: "dischargeType",
      label: "Please Select Discharge Type ",
      required: "true",
      options: ["Full", "Partial", "Substution"],
      
    },

    // add input fields for id: 18
    {
      id: 18,
      input: "Dropdown",
      name: "dischargeReason",
      label: "Please Select Discharge Reason",
      required: "true",
      options: ["Sale", "Refinance", "Release"],
      
    },

    {
      id: 19,
      input: "Dropdown",
      name: "typeSecurityReleased",
      label: "What type of Security is being released?",
      required: "true",
      options: ["Account Set off", "Guarantees", "License", "PPSR - Full", "PPSR - Partial", "Property", "Second/Subsequent Mortgage", "Other"],
      
    },

    {
      id: 20,
      input: "Checkbox",
      name: "allAccountNoDetails",
      label: "List ALL account numbers related to this security and the details of change proposed",
      required: "true",
      options: ["Yes", "No"],
      
    },

    {
      id: 21,
      input: "Number",
      name: "allAccountPricingDiscount",
      label: "List ALL account numbers to be reviewed ad proposed Pricing discount",
      required: "true",
      // options: [""],
      
    },

    {
      id: 23,
      input: "Number",
      name: "desiredDiscount",
      label: "Desired Discount",
      required: "true",
      // options: [""],
      
    },

    {
      id: 24,
      input: "Dropdown",
      name: "pricingRenegotiation",
      label: "Reason for pricing renegotiation",
      required: "flase",
      options: ["Client has been talking with competitors",
                "Loyalty rate",
                "Total loan balance"
                ],
      
    },


  ]
};
