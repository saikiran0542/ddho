export interface IConfig {
    title: string;
    children?: React.ReactNode;
  }
  
  export const CreditDetails = {
    title: "Credit Details",
    children: [
      {
        id: 1,
        input: "ChoiceGroup",
        name: "servicingEvident",
        required: "true",
        label: "Is servicing evident?",
        options: ["Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"]
      },
      {
        id:2,
        input: "Text",
        name: "judgementRecommendations",
        required: "true",
        label: "Judgement and Recommendation - strengths, weaknesses or special notes",
        // options: ["Yes", "No"]
      },
      {
        id: 3,
        input: "ChoiceGroup",
        name: "environmentalSocialImpacts",
        required: "true",
        label: "Is Are there Environental and/or Social Impacts in supporting this lending?",
        // options: ["Yes", "No"]
      },
      {
        id: 4,
        input: "ChoiceGroup",
        name: "isPDValid",
        required: "true",
        label: "Is the PD still valid? ( 12 months )",
        // options: ["Yes", "No"]
      },
      {
        id: 5,
        input: "Checkbox",
        name: "pdModel",
        required: "true",
        label: "Select PD model",
        options: [
            "1. Commercial",
            "2. Large Corporate",
            "3. Commercial and Residential - Property Investor",
            "4. Agri",
            "5. Commercial and Residential - Property Developers",
            "6. Use Expert Judgement"
        ]
      }


    ]
  };
  
