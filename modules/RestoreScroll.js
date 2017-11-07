import React from 'react'
import { findDOMNode } from 'react-dom'

const RestoreScroll = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  propTypes: {
    scrollKey: React.PropTypes.string.isRequired
  },

  componentDidMount() {
    const { registerScroller } = this.context.router.restoreScroll
    registerScroller(this.props.scrollKey, findDOMNode(this))
  },

  componentWillUnmount() {
    const { unregisterScroller } = this.context.router.restoreScroll
    unregisterScroller(this.props.scrollKey)
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.scrollKey !== nextProps.scrollKey) {
      const { replaceScroller } = this.context.router.restoreScroll
      replaceScroller(this.props.scrollKey, nextProps.scrollKey, findDOMNode(this));
    }
  },

  render() {
    return React.Children.only(this.props.children)
  }

})

export default RestoreScroll

