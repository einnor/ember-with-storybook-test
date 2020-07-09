import { hbs } from 'ember-cli-htmlbars';

// <Button />
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

export const primary = () =>
hbs`
  <Button @label="Button" @type="primary" />
`;

export const warn = () =>
hbs`
  <Button @label="Button" @type="warn" />
`;

export const accent = () =>
hbs`
  <Button @label="Button" @type="accent" />
`;

export const icon = () => // TODO Fix this
hbs`
  <Button @label="Button" @type="accent" @icon="star_outline" />
`;
