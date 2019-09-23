export interface IConfig {
  title: string;
  children?: React.ReactNode;
}

export const CustomerDetails = {
  title: "Customer Details",
  children: [

    {
      id:1,
      input: "Text",
      name: "primaryClientName",
      label: "Primary Client Name",
      required: "true",
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },


    {
      id: 2,
      input: "Number",
      label: "Primary CID",
      name: "primaryCID",
      required: "true",
      // options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
    {
      id: 3,
      input: "Text",
      label: "Opportunity ID",
      name: "opportunityID",
      // required: ,
      // options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
    {
      id: 4,
      input: "Number",
      label: "Previous CCL",
      name: "previousCCL",
      // required: "",
      // options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
    {
      id: 5,
      input: "Number",
      label: "Relevant Account Number",
      name: "relevantACCNo",
      // required: "true",
      // options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
    {
      id: 6,
      input: "ChoiceGroup",
      label: "Is this a BizExpress Dropout?",
      name: "isBizExpDropout",
      required: "true",
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
    {
      id: 7,
      input: "ChoiceGroup" ,
      label: "Is this deal confidential?",
      name: "isDealConfidential",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
      // NOTE - Only show the field for Banker in the RAB mapping Table 
    },

    {
      id: 8,
      input: "ChoiceGroup",
      label: "Watchlist",
      name: "watchList",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
      // NOTE - Only show the field for Banker in the RAB mapping Table 
    },
    {
      id: 9,
      input: "ChoiceGroup",
      label: "TIA",
      name: "tia",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
      // NOTE - Only show the field for Banker in the RAB mapping Table 
    },
    {
      id: 10,
      input: "Dropdown",
      label: "Industry",
      name: "industry",
      required: "true",
      options:[

        "AgriBusiness ( Pre Farm Gate)",
        "Banks",
        "Childcare",
        "Clubs",
        "Commercial Property - Developer",
        "Commercial Property - Investor",
        "Community Housing",
        "Cooperative Housing Societies",
        "Dairy Farming",
        "Education ( Schools and Colleges)",
        "Financial Advisors ( Existing Facilities Only)",
        "Franchising",
        "GP ad Medical Specialists",
        "Grains and Oilseeds",
        "Hotels, Taverns and Bar Operations",
        "Local Government Authorities",
        "Pharmacy",
        "Professional Services",
        "Religious Organisations",
        "Residential Organisations",
        "Residential Aged Care",
        "Retail",
        "Retail Renewal",
        "RV and LLC",
        "Specialists Disability Accommodation"

      ]
    },


    // add input fields for id: 11
    {
      id: 11,
      input: "ChoiceGroup",
      label: "Has an individual co-borrower been identified? Y/N",
      name: "coBorrowerIdentified",
      required: "true",
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },


      // add input fields for id: 12
    {
      id: 12,
      input: "ChoiceGroup",
      label: "Are there any Brokers Involved?",
      name: "anyBrokersInvolved",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },



    {
      id: 13,
      input: "ChoiceGroup",
      label: "Do you provide authority for BBCS to liaise with your client?",
      name: "isBBCSLiaiseClient",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },

  // add input fields for id: 14
    {
      id: 14,
      input: "ChoiceGroup",
      label: "Has a business review been completed?",
      name: "isbusinessReviewCompleted",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },


    // add input fields for id: 15

    {
      id: 15,
      input: "ChoiceGroup",
      label: "Has a call report been completed?",
      name: "iscallReportCompleted",
      // required: ,
      options:["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
    },
   





// Sub-Input-Fields

    {
      input: "Component",
      tag: "guarantors"
    }
  ]
};
