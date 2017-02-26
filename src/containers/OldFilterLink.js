import React, { Component } from 'react';
import Link from '../components/Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter===state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);



// class FilterLink extends Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();
//
//     return (
//       <Link
//         active={props.filter===state.visibilityFilter}
//         onClick={() => {
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: props.filter
//           })
//         }}
//         children={props.children}
//       />
//     )
//   }
// }
//
// FilterLink.contextTypes = {
//   store: React.PropTypes.object
// };

// const FilterLink = ({
//   filter,
//   currentFilter,
//   children,
//   onClick
// }) => {
//   if (currentFilter === filter) {
//     return (
//       <span>{children}</span>
//     )
//   }
//   return (
//     <a href='#'
//        onClick={e => {
//          e.preventDefault();
//          onClick(filter);
//        }}
//     >
//       {children}
//     </a>
//   )
// };

// export default FilterLink;
