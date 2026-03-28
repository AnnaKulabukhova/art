/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-tailwindcss'],
	rules: {
		'selector-class-pattern': null,
		'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'layer', 'theme', 'variants', 'responsive', 'screen'],
			},
		],
	},
};
