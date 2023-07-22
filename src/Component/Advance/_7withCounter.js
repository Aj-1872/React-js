import React from "react";

const UpdatedComponent = (OriginalComoponent) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0,
                secondCount: 1,
                thirdcount: 2
            }
        }

        increamentCount = () => {
            this.setState(prevState => ({
                count: prevState.count + 1,
                secondCount: prevState.secondCount + 1,
            }))
        }

        render() {
            return <OriginalComoponent
            count={this.state.count} 
            increamentCount={this.increamentCount}
            {...this.props}
            
            />
        }
    }

    return NewComponent
}

export default UpdatedComponent

// import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     render() {
//       return <OriginalComponent name="ajay" />;
//     }
//   }

//   return NewComponent;
// };

// export default UpdatedComponent;
