import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    //HOC: higher order component
    render() {
        console.log('>>> check props: ', this.props)
        return (
            <div>
                Hello world from Homepage with Eric & Hoi Dan IT
            </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);