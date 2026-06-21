import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CatalogController extends Controller {
  @action
  raisedButton() {
    alert('You pressed a raised button.');
  }

  @action
  flatButton() {
    alert('You pressed a flat button.');
  }

  @action
  targetButton() {
    alert('You pressed a target button.');
  }
}
