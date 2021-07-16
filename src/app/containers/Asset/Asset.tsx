/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {Component, lazy, Suspense} from 'react';
import './Asset.scss';
import {getStyles, scrollTop} from '../../utils';
import {RouteComponentProps, withRouter} from 'react-router';
import {inject, observer} from 'mobx-react';
import {AssetStore} from '../../store/asset.store';
import {AdditionalImages, AssetDetails, AssetIdentifiers, Timeline} from './components';
import Loader from '../../components/Loader';
import {Slideshow} from '../../components/Slider';
import SVG from 'react-svg';

import xIcon from '../../../assets/landing/X.svg';

import veresLogo from '../../../assets/landing/veres/VERES_LOGO-242x136.svg';
import yaroLogo from '../../../assets/landing/yaro/logo_yaro.svg';
import gnpLogo from '../../../assets/landing/gnp/gnp-logo.svg';
import gnpLogoBlack from '../../../assets/landing/gnp/logoblack.png';
import beaLogo from '../../../assets/landing/veres/BEA-LOGO.svg';
import ambLogo from '../../../assets/landing/veres/amb_logo_wt.svg';

import background from '../../../assets/landing/background.svg';

import veres1 from '../../../assets/landing/veres/slider/0031.jpg';
import veres2 from '../../../assets/landing/veres/slider/IMG_1532.jpg';
import veres3 from '../../../assets/landing/veres/slider/IMG_1740.jpg';
import veres4 from '../../../assets/landing/veres/slider/0083.jpg';

import gnp1 from '../../../assets/landing/gnp/slider/1.jpeg';
import gnp2 from '../../../assets/landing/gnp/slider/2.jpeg';

import yaro1 from '../../../assets/landing/yaro/slider/DSCF3866-web.jpg';
import yaro2 from '../../../assets/landing/yaro/slider/IMG_2176.jpg';
import yaro3 from '../../../assets/landing/yaro/slider/IMG_2835.jpg';
import yaro4 from '../../../assets/landing/yaro/slider/IMG_8595.jpg';
import yaro5 from '../../../assets/landing/yaro/slider/IMG_5400.jpg';

const AssetImage: any = lazy(() => import('./components/AssetImage'));

interface AssetProps extends RouteComponentProps<{ assetId: string }> {
  AssetStore: AssetStore;
}

interface AssetStates {
  selectedImage: string | null;
}

@inject('AssetStore')
@observer
class Asset extends Component<AssetProps, AssetStates> {
  constructor(props: AssetProps) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  public componentDidMount() {
    scrollTop();
  }

  public onImageSelect = (selectedImage: string) => {
    this.setState({selectedImage});
  }

  public getDefaultImage = () => {
    try {
      const {asset} = this.props.AssetStore;
      return asset.info.images.default.url;
    } catch (error) {
      return '';
    }
  }

  public render() {
    const {asset, events} = this.props.AssetStore;
    console.log('asset', asset);
    console.log('events', events);
    const {selectedImage} = this.state;
    const {assetId} = this.props.match.params;
    /* Veres */
    if (assetId === '0x65f4a8bf0a6b964b9bc32d3a926b3e5edbc218c29bf71fed8fb246fc6ebba449') {
      if (asset && asset.info) {
        return (
          <div className='Info'>
            <div className='item' style={getStyles('content')}>
              <div className={'item__header'}>
                <div className='item__header--item'><SVG wrapper='span' src={veresLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item'><SVG wrapper='span' src={beaLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item '>
                  <SVG wrapper='span' src={ambLogo}/>
                </div>
                <img style={{zIndex: 1}} className={'item__header--background'} src={background} alt='wrap'/>
              </div>
              <div className='wrapper'>
                <div className='item__container'>
                  <div className={'item__container__top'}>
                    <div className={'item__container__top-heading'}>
                      Ambrosus Ecosystem has partnered with Business Engineers Asia to support the Ukraine 30@SG
                      initiative to
                      help 30 FMCG
                      Ukrainian brands enter the Singapore retail market. Ambrosus will be providing and storing proof
                      of
                      origins and supply
                      chain traceability for all brands on AMB-NET. VERES, a leading Ukrainian manufacturer of canned
                      fruit,
                      and vegetable production,
                      became our first mutual partner. All information on VERES batches that are sent to Singapore will
                      be
                      securely stored on our blockchain, for anyone to access updates on provenance, certification, and
                      more.
                    </div>
                  </div>

                  <div className={'item__container__about'}>
                    <div className={'item__container__about--info'}>
                      <div className={'first'}>
                        <h2 className={'first__heading'}>about brand</h2>
                        <p className={'first__secondary'}>
                          VERES is a well-known Ukrainian food brand with over 20 years of expertise in
                          growing vegetables and canned fruit and vegetable production. The company owns 7000ha
                          of agro-industrial land across Ukraine and has three full-cycle production sites, setting food
                          trends for maintaining health and comfort living.
                        </p>
                        <a
                          className={'first__link'}
                          target={'_blank'}
                          href='https://www.veresfood.com/en '>
                          https://www.veresfood.com/en
                        </a>
                      </div>
                      <div
                        style={{padding: 20}}
                        className={'second'}>
                        <SVG wrapper='span' src={veresLogo}/>
                      </div>
                    </div>
                    <div className={'item__container__about--slider'}>
                      <Slideshow images={[veres1,
                        veres2,
                        veres3,
                        veres4]}/>
                    </div>

                  </div>
                  <div className={'item__container__blockchain-data'}>
                    <h2 className={'item__container__blockchain-data--heading'}>BLOCKCHAIN DATA</h2>
                  </div>
                  <div className={'asset-block'}>
                    <div className={'asset-details-block'}><AdditionalImages
                      images={asset.info.images}
                      onSelect={this.onImageSelect}
                    />
                      <AssetIdentifiers info={asset.info}/>
                      <AssetDetails asset={asset}/></div>
                    <div className={'event-details-block'}>
                      {events && (
                        <div className='item__container'>
                          <Timeline events={events} assetId={assetId}/>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    /*
     YARO
    */
    if (assetId === '0x649ba9ddc96e34321131d1a829b654eabf634bbfab2eb7532ff219e3a96751ed') {
      if (asset && asset.info) {
        return (
          <div className='Info'>
            <div className='item' style={getStyles('content')}>
              <div className={'item__header'}>
                <div className='item__header--item'><SVG wrapper='span' src={yaroLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item'><SVG wrapper='span' src={beaLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item '>
                  <SVG wrapper='span' src={ambLogo}/>
                </div>
                <img style={{zIndex: 1}} className={'item__header--background'} src={background} alt='wrap'/>
              </div>
              <div className='wrapper'>
                <div className='item__container'>
                  <div className={'item__container__top'}>
                    <div className={'item__container__top-heading'}>
                      Ambrosus Ecosystem has partnered with Business Engineers Asia to support the Ukraine 30@SG
                      initiative to
                      help 30 FMCG
                      Ukrainian brands enter the Singapore retail market. Ambrosus will be providing and storing proof
                      of
                      origins and supply
                      chain traceability for all brands on AMB-NET. VERES, a leading Ukrainian manufacturer of canned
                      fruit,
                      and vegetable production,
                      became our first mutual partner. All information on VERES batches that are sent to Singapore will
                      be
                      securely stored on our blockchain, for anyone to access updates on provenance, certification, and
                      more.
                    </div>
                  </div>

                  <div className={'item__container__about'}>
                    <div className={'item__container__about--info'}>
                      <div className={'first'}>
                        <h2 className={'first__heading'}>about brand</h2>
                        <p className={'first__secondary'}>Yaro is a monobrand company producing meaningful
                          and healthy sweets, foods, and meal programs, based on products of vegetable origin.
                          YARO’s products are registered with and meet the Vegan Trademark criteria. The brand
                          is famous for its healthy food system based on the insights collected from medical
                          experts worldwide. YARO adheres to the highest global quality standards and operates
                          under the HACCP safety and risk management system. In addition, the company’s
                          packaging is environmentally friendly. </p>
                        <a
                          className={'first__link'}
                          target={'_blank'}
                          href='https://yaro.ua/ '>
                          https://yaro.ua/
                        </a>
                      </div>
                      <div
                        style={{padding: 20}}
                        className={'second'}>
                        <SVG wrapper='span' src={yaroLogo}/>
                      </div>
                    </div>
                    <div className={'item__container__about--slider'}>
                      <Slideshow images={[yaro1,
                        yaro2,
                        yaro3,
                        yaro4,
                        yaro5]}/>
                    </div>

                  </div>
                  <div className={'item__container__blockchain-data'}>
                    <h2 className={'item__container__blockchain-data--heading'}>BLOCKCHAIN DATA</h2>
                  </div>
                  <div className={'asset-block'}>
                    <div className={'asset-details-block'}><AdditionalImages
                      images={asset.info.images}
                      onSelect={this.onImageSelect}
                    />
                      <AssetIdentifiers info={asset.info}/>
                      <AssetDetails asset={asset}/></div>
                    <div className={'event-details-block'}>
                      {events && (
                        <div className='item__container'>
                          <Timeline events={events} assetId={assetId}/>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    /*
     GNP
    */
    if (assetId === '0x4efe2723f33387eede1b03cda4b410417cd3c15e88e8125047271489597711e5') {
      if (asset && asset.info) {
        return (
          <div className='Info'>
            <div className='item' style={getStyles('content')}>
              <div className={'item__header'}>
                <div className='item__header--item'><SVG wrapper='span' src={gnpLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item'><SVG wrapper='span' src={beaLogo}/></div>
                <div className='item__header--item hide-mobile'><SVG wrapper='span' src={xIcon}/></div>
                <div className='item__header--item '>
                  <SVG wrapper='span' src={ambLogo}/>
                </div>
                <img style={{zIndex: 1}} className={'item__header--background'} src={background} alt='wrap'/>
              </div>
              <div className='wrapper'>
                <div className='item__container'>
                  <div className={'item__container__top'}>
                    <div className={'item__container__top-heading'}>
                      Ambrosus Ecosystem has partnered with Business Engineers Asia to support the Ukraine 30@SG
                      initiative to
                      help 30 FMCG
                      Ukrainian brands enter the Singapore retail market. Ambrosus will be providing and storing proof
                      of
                      origins and supply
                      chain traceability for all brands on AMB-NET. VERES, a leading Ukrainian manufacturer of canned
                      fruit,
                      and vegetable production,
                      became our first mutual partner. All information on VERES batches that are sent to Singapore will
                      be
                      securely stored on our blockchain, for anyone to access updates on provenance, certification, and
                      more.
                    </div>
                  </div>

                  <div className={'item__container__about'}>
                    <div className={'item__container__about--info'}>
                      <div className={'first'}>
                        <h2 className={'first__heading'}>about brand</h2>
                        <p className={'first__secondary'}>GNP FRUITS is a Ukrainian food brand and one of the
                          biggest producers of apple chips. The company has its certified manufacturing
                          technology for premium apple chips production. The product is gluten-free,
                          undergoes quality control at every stage, and does not contain additional sugar,
                          preservatives, stabilizers, emulsifiers, or oils. Also, GNP FRUIT uses modern
                          technology to preserve nutrients.
                        </p>
                        <a
                          className={'first__link'}
                          target={'_blank'}
                          href='https://yaro.ua/ '>
                          https://yaro.ua/
                        </a>
                      </div>
                      <div
                        style={{padding: 20}}
                        className={'second'}>
                        <img width='100%' src={gnpLogoBlack} alt='GNP Logo'/>
                      </div>
                    </div>
                    <div className={'item__container__about--slider'}>
                      <Slideshow images={[gnp1, gnp2]}/>
                    </div>

                  </div>
                  <div className={'item__container__blockchain-data'}>
                    <h2 className={'item__container__blockchain-data--heading'}>BLOCKCHAIN DATA</h2>
                  </div>
                  <div className={'asset-block'}>
                    <div className={'asset-details-block'}><AdditionalImages
                      images={asset.info.images}
                      onSelect={this.onImageSelect}
                    />
                      <AssetIdentifiers info={asset.info}/>
                      <AssetDetails asset={asset}/></div>
                    <div className={'event-details-block'}>
                      {events && (
                        <div className='item__container'>
                          <Timeline events={events} assetId={assetId}/>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    if (asset && asset.info) {
      return (
        <div className='Info'>
          <div className='item' style={getStyles('content')}>
            <div className='wrapper'>
              <div className='item__container'>
                <Suspense fallback={<Loader/>}>
                  <AssetImage
                    url={selectedImage ? selectedImage : this.getDefaultImage()}
                    name={asset.info.name}
                  />
                </Suspense>
                <AdditionalImages
                  images={asset.info.images}
                  onSelect={this.onImageSelect}
                />
                <AssetIdentifiers info={asset.info}/>
                <AssetDetails asset={asset}/>
              </div>
              {events && (
                <div className='item__container'>
                  <Timeline events={events} assetId={assetId}/>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    if (asset && !asset.info) {
      return (
        <div>
          <div className='noContent'>
            <p>
              This asset has no data. <br/> Please try another one.
            </p>
          </div>
        </div>
      );
    }
    return <div/>;
  }
}

export default withRouter(Asset);
