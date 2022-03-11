import { BodyComponent } from '../../mjml-core';

export default class MjRaw extends BodyComponent {
  static componentName = 'mj-raw';

  static endingTag = true;

  static rawElement = true;

  static allowedAttributes = {
    position: 'enum(file-start)',
  };

  getContent: any;

  render() {
    return this.getContent();
  }
}
