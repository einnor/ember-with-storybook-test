import { hbs } from 'ember-cli-htmlbars';

// <Button />
// @label string
// @type can be primary, warn, accent
// @icon is the name if a mui icon
// @disabled is the name if a mui icon
// @fab is floating action button
// @raised boolean

export default {
  title: 'Button',
};

export const Default = () =>
hbs`
  <Button @label="Button" />
`;

export const warn = () =>
hbs`
  <Button @label="Button" @type="warn" />
`;
