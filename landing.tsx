import * as React from "react";
import { LinkItem } from "./controls/LinkItem";
import * as sideBarConfig from "../components/config/sidebar.json";
import styles from "./FormPage.module.scss";
import { connect } from "react-redux";
import {
  IDocumentCardStyles,
  DocumentCardLogo
} from "office-ui-fabric-react/lib/DocumentCard";
import { changeStep } from "../actions";
import { DefaultButton, IIconProps, IconButton, List,Link,  } from "office-ui-fabric-react";

/**
 * getLabelByName
 * @param item
 */
function getLabelByName(item: string) {
  return sideBarConfig.sidebar
    .filter(sb => {
      return sb.name === item;
    })
    .map(sb => {
      return sb.label;
    });
}

/**
 * SideBar
 * 1. Populate sidebar item (sections)
 * @param param0
 */

//  const sidebarlist=[]
const cardStyles: IDocumentCardStyles = {
  root: { display: "inline-block", textAlign: "right" }
};
// const addStatusIcon: IIconProps ={iconName:'Completed' } 

class SideBar extends React.Component<any, any> {
  public changeStep = step => {
    console.log("Change step to: " + step);
    this.props.changeStep(step);
  };

  public render() {
    const { form, sections } = this.props;
    const listItems = sections.map((item: any, index: number) => {
      // const path = `/form/${form}/${item.tag}`;
      const label = getLabelByName(item.tag);
      return (
        // <div  className={styles.sidebarlist}  >
        // <div >?
        <li key={item.tag} className={styles.sidebarli} >
        {/* style={{display:"flex", justifyContent:'space-between'}} */}
            <a
            
          //  className={styles.icustomStyles}
              onClick={() => {
                this.changeStep(index);
              }}
              style={{background:'none'}}
              
              // split
              
              
            >
              {label}
            </a>

            <IconButton iconProps= {{iconName:'Completed', style:{color:'', float:"right"}}} />
            {/* <IconButton iconProps= {{iconName:'Completed', style:{color:'green'}}} />
            <IconButton iconProps= {{iconName:'StatusErrorFull', style:{color:'red'}}} /> */}
            {/* <LinkItem to={path} label={label} /> */}
            {/* <DocumentCardLogo logoIcon="Completed" styles={cardStyles} /> */}
          {/* </div> */}
        </li>
        // </div>
      );
    });

    return (
      <React.Fragment>
        <ul >{listItems}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentStep: state.wizard || 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStep: (values: any) => {
      return dispatch(changeStep(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
