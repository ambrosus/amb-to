import React from 'react';
import './Login.scss';

import SVG from 'react-svg';
import iconLogo from '../../../assets/svg/logo-light.svg';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Login extends React.Component<any, any> {
  private formRef: any;

  constructor(props: any) {
    super(props);

    this.login = this.login.bind(this);
  }

  private login(event: any) {
    event.preventDefault();
    console.log('Submited', this.formRef);
  }

  public render() {
    return (
      <div className='Login'>
        <Link className='logo' to='/login'>
          <SVG className='SVG' wrapper='span' src={iconLogo} />
        </Link>
        <p className='center' style={{ margin: '65px 0 25px' }}>Login using your private key</p>

        <Tabs>
          <TabList>
            <Tab>Private Key</Tab>
          </TabList>

          <TabPanel>
            <form className='form center' onSubmit={this.login} style={{ maxWidth: '624px' }} ref={node => this.formRef = node}>
              <label>
                <span>Your private key</span>
                <input name='privateKey' type='text' />
              </label>
              <button type='submit'>Log in</button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
