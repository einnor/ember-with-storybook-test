import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Button',
};

export const Default = () =>
hbs`
  <Button @label="Button" />
`;

export const flat = () =>
hbs`
  <Button @label="Button" @raised={{false}} />
`;

export const disabled = () =>
hbs`
  <Button @label="Button" @disabled={{true}} />
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

export const fab = () => // TODO Fix this
hbs`
  <Button @type="accent" @icon="star_outline" @fab={{true}} />
`;
