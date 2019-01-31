import React from 'react';
import './DropDown.scss';
import { Link } from 'react-router-dom';
import SVG from 'react-svg';

export default class DropDown extends React.Component<any, any> {
  private mainRef: any;

  constructor(props: any) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  public componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  public handleClickOutside(event: any) {
    const parent = this.mainRef.parentElement;
    if (parent && !parent.contains(event.target)) {
      parent.classList.remove('menu--active');
    }
  }

  public render() {
    return <nav className='DropDown' ref={node => this.mainRef = node}>
      <ul>
        {
          this.props.items.items.map((item: any, index: number) => (
            <li key={index} className={`${item.type === 'header' ? 'header' : ''}`}>
              {
                item.type === 'separator' ?
                  <hr className='separator' /> :
                  (
                    <React.Fragment>
                      {
                        item.link ?
                          (
                            <Link to={item.link}>
                              {item.icon && <SVG className='SVG icon' src={item.icon}></SVG>}
                              <div>
                                {item.title && <span className='item__title'>{item.title}</span>}
                                {item.meta && <span className='item__meta'>{item.meta}</span>}
                              </div>
                            </Link>
                          ) :
                          (
                            <a>
                              {item.icon && <SVG className='SVG icon' src={item.icon}></SVG>}
                              <div>
                                {item.title && <span className='item__title'>{item.title}</span>}
                                {item.meta && <span className='item__meta'>{item.meta}</span>}
                              </div>
                            </a>
                          )
                      }
                    </React.Fragment>
                  )
              }
            </li>
          ))
        }
      </ul>
    </nav>;
  }
}
