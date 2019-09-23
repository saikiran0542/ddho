export interface IConfig {
  title: string;
  children?: React.ReactNode;
}

export const OnBoardingAdditionalInformation = {
  title: "Additional Information",
  children: [
    {
      id: 1,
      input: "Text",
      name: "additionalComments",
      label:
        "Please add additional comments that may be useful for this request"
    }
  ]
};
