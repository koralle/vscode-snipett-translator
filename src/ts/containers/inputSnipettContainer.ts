import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./common/SnipettContainer";
import { inputSnipett } from "../components/inputSnipett/inputSnipett";

export default connect(mapStateToProps, mapDispatchToProps)(inputSnipett);
