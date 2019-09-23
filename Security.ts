export interface IConfig {
    title: string;
    children?: React.ReactNode;
  }
  
  export const OnBoardingSecurityDetails = {
    title: "Security Details",
    children: [
      // add input fields for id: 1
      {
        id: 1,
        input: "ChoiceGroup",
        name: "anyGuarantors",
        label: "Are there any guarantors/ees?",
        required: "true",
        options: ["Yes", "No"],
      },

      // add input fields for id: 2
      {
        id: 2,
        input: "ChoiceGroup",
        name: "guarantorInterviewCompleted",
        label: "Is the Guarantor interview been completed",
        required: "true",
        options: ["Yes", "No"],
      },

      {
        id: 3,
        input: "ChoiceGroup",
        name: "guarantorDeemedSuitable",
        label: "Is the Guarantor deemed suitable for guarantee purposes",
        // required: "false",
        options: ["Yes", "No"],
      },

      {
        id: 4,
        input: "ChoiceGroup",
        name: "recommGuarantorLegalAdv",
        label: "Have we recommended the guarantor seek legal advice?",
        // required: "false",
        options: ["Yes", "No"],
      },

      {
        id: 5,
        input: "Dropdown",
        name: "assetsSecureLoan",
        label: "What asset/s are been used to secure the loan?",
        // required: "false",
        options: [
            "1. Facility number",
            "2. Type",
            "3. Details",
            "4. Estimated Value",
            "5. Valuation required"
        ],
      }
    ]
  };
  
