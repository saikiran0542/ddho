export interface IConfig {
  title: string;
  children?: React.ReactNode;
}

export const OnBoardingDocumentSummary = {
  title: "Document Summary",
  children: [

    {
      id:1,
      input: "ChoiceGroup",
      name: "receivedTLS125/6",
      required: "true",
      label: "Have you received TLS125/6 from all parties ( borrowers and guarantors )",
      options: ["Yes", "No"]
    },

    {
      id:2,
      input: "Checkbox",
      name: "collectedDocuments",
      // required: "",
      label: "What has already been collected",
      options: [
        "Last 2 years Financial Statements for all entities * (3 Yrs for RAB)",
        "Last 2 years Personal Tax returns * (3 Yrs for RAB)",
        "Signed TLS 125 (if not already held, as per policy)",
        "AML/KYC verification documents",
        "Insurance Policies for all security items",
        "Completed Personal Balance Sheet",
        "Bank Statements prior 3 months (12 for Refinance)",
        "Most recent tax portals (NTB: Upfront 12 months)",
        "Property/Company searches",
        "Deal Qualifier has been completed ",
        "Monthly Expenses"
      ]
    },
    {
      id: 3,
      input: "Checkbox",
      name: "additionalInclusions",
      // required: "",
      label: "Aditional Inclusions",
      options: [
        "Cash Flow Forecasts",
        "Interim Management Accounts",
        "Contract Of Sale",
        "Valuations",
        "OFI Letter of Offer for existing facilities",
        "Notice of Assessment for self employed individuals",
        "Aged Debtor/Creditor Listing",
        "Lease Agreements",
        "Equipment Finance Schedule",
        "Corporate Structure: Organisation structure , history and background of business",
        "Certified & Stamped copy of trust deed",
        "Transfer Documents",
        "Water Rights Information",
        "Other"
      ]
    },
    {
      id: 4,
      input: "ComboBox",
      name: "searchesCompleted",
      // required: "",
      label: "Have any searches been completed",
      multiSelect:"true",
      options: [
        "PPSR",
        "Title Search",
        "Company Search",
        "Credit Check",
        "Fraud Check"
      ]
    },

    {
      id: 5,
      input: "Text",
      name: "documentLocation",
      required: "true",
      label: "Document location"
    }
  ]
};
        
