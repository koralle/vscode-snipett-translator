import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./common/SnipettContainer";
import { OutputSnipett } from "../components/outputSnipett/outputSnipett";

export default connect(mapStateToProps, mapDispatchToProps)(OutputSnipett);
