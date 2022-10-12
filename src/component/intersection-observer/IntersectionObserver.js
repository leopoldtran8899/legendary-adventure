import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IntersectionVisible extends Component {

  static defaultProps = {
    active: true,
    onHide: () => null,
    onShow: () => null,
    onIntersect: () => null,
  };

  handleObserverUpdate = entries => {
    const {
      onIntersect,
      onShow,
      onHide
    } = this.props;
    const {
      intersectionRect
    } = entries[0];
    const {
      top,
      left,
      bottom,
      right
    } = intersectionRect;
    if ([ top, bottom, left, right].some(e => e > 0) && onShow) {
      onShow(entries);
    } else if (onHide) {
      onHide(entries);
    }
    onIntersect(entries);
  };


  startObserving() {
    this.observer.observe(this.node);
  }

  stopObserving() {
    this.observer.unobserve(this.node);
  }


  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleObserverUpdate);

    if (this.props.active) {
      this.startObserving();
    }
  }


  componentDidUpdate(prevProps) {
    if (this.props.active && !prevProps.active) {
      this.startObserving();
    }

    if (!this.props.active && prevProps.active) {
      this.stopObserving();
    }
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  /**
   * Render component
   *
   * @returns {JSX.Element}
   */
  render() {
    const { WrappedComponent } = this.props
    return <WrappedComponent  ref={node => this.node = node} {...this.props.styles}>
      {this.props.children}
    </WrappedComponent>;
  }
}