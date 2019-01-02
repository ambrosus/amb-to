import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ error });
    Sentry.captureException(error);
  }

  public render() {
    if (this.state.error) {
      return (
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      );
    }
    return this.props.children;
  }
}
