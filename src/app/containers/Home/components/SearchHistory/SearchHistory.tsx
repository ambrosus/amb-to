import React, { Component } from 'react';
import './SearchHistory.scss';
import { StorageService } from '../../../../services';
import HistoryItems from '../HistoryItems';
import { Button } from '@ambrosus/react';
interface HistoryStates {
  history: [{ id: string, title: string }] | null;
}

export default class SearchHistory extends Component<{}, HistoryStates> {

  constructor(props: {}) {
    super(props);
    this.state = {
      history: null,
    };
  }

  public componentDidMount() {
    const history = StorageService.get('history');
    this.setState({ history });
  }

  public clearHistory = () => {
    StorageService.clear();
    this.setState({ history: null });
  }

  public render() {
    const { history } = this.state;
    if (history) {
      return (
        <div className='SearchHistory wrapper'>
          <div className='page history_page'>
            <h3 className='title'>Previously viewed</h3>
            <div className='history'>
              {
                history.map((item, index) => {
                  return <HistoryItems key={index} history={item} />;
                })
              }
            </div>
            <div className='clear__history'>
              <Button onClick={this.clearHistory}>Clear Search History</Button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
