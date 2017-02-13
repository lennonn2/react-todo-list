# Whats going on here:

* Reducers
** Reducers are a function that takes in state and action and returns a new state
based on that action

* stores
** Hold the entire state tree of an application
** Takes the root reducer as a param

* Actions
** Plain JS objects including type property 'type'
** Dispatched to a reducer to create a new state object

* combineReducers
** Combined multiple reducers into one reducer for reduced complexity
** Takes an object containing reducers to combine as a param eg: {todos, visibilityFilter}

* components
** Purely presentational, how things look (markup, style)
** Read data from props
** Change data by invoking callbacks from props
** Written by hand
** Not aware of Redux

* containers
** How things work (data fetching, state updating)
** Aware of redux
** To read data: Subscribe to redux state
** To change data: Dispatch redux actions
** Are written: usually generate by react-redux

* react-redux

** connect
*** Curried function that takes two self explanatory parameters: mapStateToProps(state, ownProps)
and mapDispatchToProps(dispatch, ownProps) and executes it against the component
it will wrap e.g. connect(mapStateToProps, mapDispatchToProps)(Link)

** different way of passing the store down
*** Provider - wrap top level component in <Provider store={store}> components
*** this allows your components to access the sore from their context e.g.
const { store } = this.context
*** components will need to declare contextTypes like propTypes with
React.contextTypes = { store: React.PropTypes.object }
