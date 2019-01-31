import dollar from 'assets/images/dollar.svg';
import tractor from 'assets/images/tractor.svg';
import pin from 'assets/images/pin.svg';
import thermometer from 'assets/images/thermometer.svg';
import barn from 'assets/images/barn.svg';
import importExport from 'assets/images/import-export.svg';
import drying from 'assets/images/drying.svg';
import teaBagging from 'assets/images/tea-bagging.svg';
import steaming from 'assets/images/steaming.svg';
import withering from 'assets/images/withering.svg';
import recall from 'assets/images/recall.svg';
import processImage from 'assets/images/process.svg';

const assetData: { [key: string]: { iconUrl: string; backgroundColor: string; fontColor: string } } = {
  'default': {
    'iconUrl': pin,
    'backgroundColor': '#b86c30',
    'fontColor': '#fff',
  },
  'harvested': {
    'iconUrl': tractor,
    'backgroundColor': '#b86c30',
    'fontColor': '#fff',
  },
  'arrived': {
    'iconUrl': pin,
    'backgroundColor': '#c99826',
    'fontColor': '#fff',
  },
  'location': {
    'iconUrl': pin,
    'backgroundColor': '#93784d',
    'fontColor': '#fff',
  },
  'shipped': {
    'iconUrl': pin,
    'backgroundColor': '#93784d',
    'fontColor': '#fff',
  },
  'displayed': {
    'iconUrl': pin,
    'backgroundColor': '#5a5b7d',
    'fontColor': '#fff',
  },
  'customs': {
    'iconUrl': pin,
    'backgroundColor': '#5a5b7d',
    'fontColor': '#fff',
  },
  'qualityControlled': {
    'iconUrl': thermometer,
    'backgroundColor': '#759abb',
    'fontColor': '#fff',
  },
  'manufactured': {
    'iconUrl': barn,
    'backgroundColor': '#414450',
    'fontColor': '#fff',
  },
  'sold': {
    'iconUrl': dollar,
    'backgroundColor': '#5fa153',
    'fontColor': '#fff',
  },
  'imported': {
    'iconUrl': importExport,
    'backgroundColor': 'forestgreen',
    'fontColor': '#fff',
  },
  'exported': {
    'iconUrl': importExport,
    'backgroundColor': 'forestgreen',
    'fontColor': '#fff',
  },
  'drying': {
    'iconUrl': drying,
    'backgroundColor': 'royalblue',
    'fontColor': '#fff',
  },
  'bagging': {
    'iconUrl': teaBagging,
    'backgroundColor': 'green',
    'fontColor': '#fff',
  },
  'steaming': {
    'iconUrl': steaming,
    'backgroundColor': 'maroon',
    'fontColor': '#fff',
  },
  'withering': {
    'iconUrl': withering,
    'backgroundColor': 'forestgreen',
    'fontColor': '#fff',
  },
  'recall': {
    'iconUrl': recall,
    'backgroundColor': 'firebrick',
    'fontColor': '#fff',
  },
  'recalled': {
    'iconUrl': recall,
    'backgroundColor': 'firebrick',
    'fontColor': '#fff',
  },
  'processed': {
    'iconUrl': processImage,
    'backgroundColor': '#b86c30',
    'fontColor': '#fff',
  },
  'process': {
    'iconUrl': processImage,
    'backgroundColor': '#b86c30',
    'fontColor': '#fff',
  },
};

export default assetData;
