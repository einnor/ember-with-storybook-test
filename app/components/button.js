import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  icon: null,
  label: 'Label',
  disabled: false,
  type: null,
  fab: false,
  raised: true,
  isPrimary: computed.equal('type', 'primary'),
  isWarn: computed.equal('type', 'warn'),
  isAccent: computed.equal('type', 'accent'),
});
