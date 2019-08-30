// @flow
import * as React from "react";
import BounceLoader from 'react-spinners/BounceLoader';

type Props = {
  [prop:string]: any
}

type iState = {
  loading: boolean
}

const Loader = () => (WrappedComponent: any) => {
  return class Loader extends React.Component<Props, iState>{

    constructor(props: Props) {
      super(props);
      this.state = {
        loading: true
      }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({ loading: false })
      }, 1000);
    }

    render(){
      const { loading } = this.state
      return(
        loading?
        (<BounceLoader sizeUnit="px" color="#334"
          loading={loading} size={40} />)
        :(<WrappedComponent {...this.props} />)
      )
    }
  }
}

export default Loader;