export interface IConfig {
    title: string;
    children?: React.ReactNode;
  }
  
  export const OnBoardingProductDetails = {
    title: "Product Details",
    children: [
      {
        id: 1,
        input: "Checkbox",
        name: "addNewProduct",
        label: "Add new product",
        required: "true",
        // options: ["Yes", "No"]
      },

      {
        id: 2,
        input: "Number",
        name: "facilityNumber",
        label: "Facility Number",
        // required: "true",
        // options: ["Yes", "No"]
      },

      {
        id: 3,
        input: "Dropdown",
        name: "product",
        label: "Product",
        required: "true",
        options: [
            "Asset Finance",
            "Bank Guarantee",
            "Better Business Loan",
            "Business Line of Credit",
            "Business Overdraft",
            "Charge Card",
            "Colonial Portfolio Loan",
            "Commercial Bill",
            "Contingent Liabilities",
            "Corporate Cards",
            "Credit Card",
            "EF Limit",
            "FX limits",
            "Home Loan",
            "Investment Home Loan",
            "Market Rate Loan",
            "Multi Option Facility",
            "Personal Loan",
            "Personal Overdraft",
            "Trade Facilities",
            "Trade Finance",
            "Viridian Line of Credit",
            "Other"
                    ]
      },

      {
        id: 4,
          input: "Number",
          name: "loanAmount",
        label: "Loan Amount",
        required: "true",
        // options: ["Yes", "No"],
      },

      {
        id: 5,
        input: "Number",
        name: "loanTerm",
      label: "Loan Term",
      // required: "False",
      // options: ["Yes", "No"],
    },

    {
      id: 6,
        input: "Dropdown",
        name: "repaymentType",
      label: "Repayment type",
      // required: "false",
      options: ["Principle and Interest", "Interest Only"],
    },

    {
      id: 7,
        input: "Text",
        name: "balloon",
      label: "Balloon",
      // required: "false",
      // options: ["Yes", "No"],
    },

    {
      id: 8,
        input: "Number",
        name: "totalTransAmount",
      label: "Total transaction Amount",
      // required: "false",
      // options: ["Yes", "No"],
    },

    {
      id: 9,
        input: "Number",
        name: "existingACCF",
      label: "Existing ACCF",
      required: "true",
      // options: ["Yes", "No"],
    },

    {
      id: 10,
        input: "Number",
        name: "newTotalACCF",
      label: "New Total ACCF",
      // required: "false",
      // options: ["Yes", "No"],
    },
    ]
  };
  
