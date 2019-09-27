import * as React from "react";
import { Formik, Form } from "formik";
import styles from "./ReduxForm.module.scss";
import "office-ui-fabric-core/dist/css/fabric.min.css";
import { IButtonStyles, DefaultButton, ActionButton } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { fetchBusinesses, landingPageSubmitting } from "../actions/landingpage";
import DropDownList from "./controls/DropDownList";
import DisplayFormikState from "./controls/DisplayFormikState";
import { Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import { ConvertToFieldName } from "./common/formmapping";
import { ChoiceGroup } from "./controls/ChoiceGroup";
import { IChoiceGroupStyles } from "office-ui-fabric-react/lib/ChoiceGroup";
import { IDropdownStyles } from "office-ui-fabric-react/lib/Dropdown";
import {
  IDocumentCardStyles,
  DocumentCardLogo
} from "office-ui-fabric-react/lib/DocumentCard";
import { LinkItem } from "./controls/LinkItem";

const defaultValues = {
  business: "commercial",
  form: "serviceTasks",
  subform: "onBoarding"
};

const cardStyles: IDocumentCardStyles = {
  root: { display: "inline-block", textAlign: "left" }
};
const icustomStyles: IButtonStyles = {
  root: {
    background: "#FFCC00",
    fontSize: "13px",
    fontFamily: "CBA Sans",
    borderRadius: "25px"
  }
};
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: "75%" }
};
const choiceGroupStyles: Partial<IChoiceGroupStyles> = {
  flexContainer: { display: "flex" }
  // root:{padding:"20px"}
};

function getSubFormsByForm(
  subForms: any[],
  businesses: any,
  business: any,
  form: any
) {
  subForms = businesses
    .filter(
      item =>
        ConvertToFieldName(item.DealType) === business &&
        ConvertToFieldName(item.TaskType) === form &&
        item.SubForms
    )
    .map(item => item.SubForms)
    .filter((value, index, self) => self.indexOf(value) === index);
  return subForms;
}

function getFormsByDealType(forms: any[], businesses: any, business: any) {
  forms = businesses
    .filter(item => ConvertToFieldName(item.DealType) === business)
    .map(item => item.TaskType)
    .filter((value, index, self) => self.indexOf(value) === index);
  return forms;
}

/**
 * LandingPage
 * 1. Fetch data from sponline for dropdownlist
 * 2. Submission of landingpage
 * @param
 */
class LandingPage extends React.Component<any, any> {
  public handleClick = () => {
    browserHistory.push("/dashboard");
  };


  // getInitialState = () => {
  //   return { selectValue: 'Orange' };
  // }
  // handleChange = (e) = {
  //   // this.setState({ selectValue: e.target.value });
  // }

  public componentDidMount() {
    //Fire off fetch business
    this.props.fetchBusinesses();
  }

  public render() {
    // Redirect to form if submitted
    // if (
    //   this.props.isSubmitted &&
    //   (this.props.history.location.pathname === "/form" ||
    //     this.props.history.location.pathname.includes("workbench"))
    // ) {
    if (this.props.isSubmitted) {
      return <Redirect to="/form" />;
    }

    // Read data
    const { businesses } = this.props;
    const isBusiness = businesses && businesses.length > 0;

    let dealTypes = [];
    let forms = [];
    let subForms = [];
    // let 
    let isNewCustomer = true;

    let NewAccfLessThan3Mil = false;
    let existAccfLessThan3Mil = false;
    let isNewMoney = false;
    let isCommercial = false;

    if (isBusiness) {
      //SPOnline
      //Populate deal types
      dealTypes = businesses
        .map(item => item.DealType)
        .filter((value, index, self) => self.indexOf(value) === index);
    } else {
      //Local
      //Populate data for dropdownlist
      dealTypes = ["Commercial", "Consumer"];
      forms = ["New Money", "Existing", "Service Tasks"];
      subForms = ["On Boarding", "AF Under Limit"];
    }

    return (
      <div>
        {/* {isBusiness && ( */}
        {true && (
          <Formik
            // initialStatus
            initialValues={defaultValues}
            //Handle submit
            onSubmit={this.props.handleSubmit}
          >
            {(props: any) => {
              const { values } = props;

              //Values from selection of dropdownlist
              if (values) {
                const { business, form } = values;

                if (businesses.length > 0) {
                  isCommercial = business === "commercial";
                  // Populate forms by selected deal type
                  forms = getFormsByDealType(forms, businesses, business);

                  // Populate subforms by selected forms
                  if (form.length > 0) {
                    isNewMoney = form === "newMoney";
                    NewAccfLessThan3Mil = isNewCustomer === true;
                    existAccfLessThan3Mil = isNewCustomer === false;
                    subForms = getSubFormsByForm(
                      subForms,
                      businesses,
                      business,
                      form
                    );
                  }
                }
              }

              const options = [
                "Yes\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
                "No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
              ];

              return (
                <div style={{ background: "#f2f2f2", padding: "20px" }}>
                  {/* <LandingPages /> */}
                  <Form {...props.children}>
                    <div className="ms-Grid" dir="ltr">
                      <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                          <div
                            className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                            style={{ padding: "8px 0px" }}
                          >
                            <div
                              className={styles.dashboardform}
                            // styles={{ display: "flex", fontSize:"large" }}
                            >
                              <ActionButton
                                iconProps={{ iconName: 'Completed', style: { color: 'green', fontSize: 'xx-large', padding: '0px 10px' } }}
                                style={{ fontSize: 'x-large', textAlign: 'center' }}

                              >Go to Dashboard</ActionButton>
                              {/* <DocumentCardLogo
                                logoIcon="People"
                                styles={cardStyles}
                              />
                              <p
                                style={{ color: "#78D4", fontSize: "x-large" }}
                              >
                                <LinkItem
                                  style={{
                                    float: "left",
                                    // color: "lightblue",
                                    textDecoration: "none"
                                  }}
                                  to="/dashboard"
                                  label="Go to Dashboard"
                                />
                              </p> */}
                            </div>
                          </div>

                          <br />
                          <div
                            className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                            style={{ padding: "8px 0px" }}
                          >
                            <div className={styles.dashboardform}>
                              <div className={styles.pboldguidancesection}>
                                Create Deal
                              </div>
                              <div className={styles.pboldguidancesection}>
                                <DropDownList
                                  name="business"
                                  placeholder="Select an option"
                                  label="Deal Type"
                                  styles={dropdownStyles}
                                  collection={dealTypes}
                                  {...props.children}
                                />

                                <br />
                                {forms && (
                                  <DropDownList
                                    name="form"
                                    placeholder="Select an option"
                                    label="Task Type"
                                    styles={dropdownStyles}
                                    collection={forms}
                                    {...props.children}
                                  />
                                )}
                                <br />
                                {subForms && !isNewMoney && (
                                  <DropDownList
                                    name="subform"
                                    placeholder="Select an option"
                                    label="Transaction Type"
                                    styles={dropdownStyles}
                                    collection={subForms}
                                    {...props.children}
                                  />
                                )}
                                {isNewCustomer && isNewMoney && (
                                  <ChoiceGroup
                                    name="isNewCustomer"
                                    label="Is the customer new to bank?"
                                    options={options}
                                    className="defaultChoiceGroup"
                                    required="true"
                                    styles={choiceGroupStyles}

                                  />
                                )}
                                <br />
                                {NewAccfLessThan3Mil && isNewCustomer &&
                                  isNewMoney &&
                                  isCommercial && (
                                    <ChoiceGroup
                                      name="NewAccfLessThan3Mil"
                                      label="Is the New ACCF with CBA <$3mil?"
                                      options={options}

                                      className="defaultChoiceGroup"
                                      required="true"

                                      styles={choiceGroupStyles}
                                    />
                                  )}
                                {existAccfLessThan3Mil && isNewCustomer &&
                                  isNewMoney &&
                                  isCommercial && (
                                    <ChoiceGroup
                                      name="existAccfLessThan3Mil"
                                      label="Is the Existing ACCF with CBA <$3mil?"
                                      options={options}

                                      className="defaultChoiceGroup"
                                      required="true"
                                      styles={choiceGroupStyles}
                                    />
                                  )}
                                <br />
                                <DefaultButton
                                  type="submit"
                                  styles={icustomStyles}
                                >
                                  Get Started
                                </DefaultButton>
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                          <div
                            className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                            style={{ padding: "8px 0px" }}
                          >
                            <div className={styles.dashboardform}>
                              <div className={styles.pboldguidancesection}>
                                User Guidance
                              </div>

                              <div className={styles.pguidancesection}>
                                <p>
                                  Welcome to the BPB Deal Handover for Bankers.
                                </p>

                                <p>
                                  Before using this tool, please ensure you have
                                  used the PPL Credit Standards Tool and have
                                  completed all pre-application processes.
                                </p>

                                <p>
                                  If you need help completing teh tool, please
                                  refer to the Deal Handover Processes in PPL
                                </p>
                              </div>
                            </div>
                          </div>
                          <br />

                          <div
                            className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                            style={{ padding: "8px 0px" }}
                          >
                            <div className={styles.dashboardform}>
                              <div className={styles.pboldguidancesection}>
                                What to expect when you press 'Submit'
                              </div>

                              <div className={styles.pguidancesection}>
                                <p>
                                  A task will be created on your relevant
                                  Analyst team's Workflow and the Team Manager
                                  will be notified. You will receive a
                                  notification when the task has been allocated
                                  and status updates via email until it has been
                                  completed.
                                </p>

                                <p>
                                  You may also refer to 'MyWorkflow' for
                                  visibility on in-flight tasks and status.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                  {/* <DisplayFormikState {...props} /> */}
                </div>
              );
            }}
          </Formik>
        )}
      </div>
    );
  }
}

/**
 * Get state from redux store
 * @param state
 */
const mapStateToProps = (state: any) => {
  console.log(JSON.stringify(state.businesses));
  return {
    businesses: state.businesses,
    forms: state.forms,
    isSubmitted: state.isSuccess
  };
};

/**
 * Dispatch action to redux store
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    // Fetch data from sponline for dropdownlist
    fetchBusinesses: () => {
      return dispatch(fetchBusinesses());
    },
    // Submission of landingpage
    handleSubmit: (values: any) => {
      console.log("submiting");
      console.log(JSON.stringify(values));
      return dispatch(landingPageSubmitting(values));
    }
  };
};

/**
 * Connect component to redux store
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
    
