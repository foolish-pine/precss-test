module.exports = {
	extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
	rules: {
		indentation: "tab", // Editor Configの設定と整合性を取るため
		"keyframes-name-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected keyframe to be snake-case",
			},
		],
		"scss/at-function-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected function to be snake-case",
			},
		],
		"scss/at-mixin-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected mixin to be snake-case",
			},
		],
		"scss/dollar-variable-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected variable to be snake-case",
			},
		],
		"scss/percent-placeholder-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected placeholder to be snake-case",
			},
		],
		"scss/selector-no-union-class-name": true, // class名の検索性の低下を防ぐため
		"selector-class-pattern": [
			"^(cb|el|hp|ly|bl|js|is)_([a-z][a-zA-Z0-9]+)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected class to be precss-style",
			},
		],
		"selector-id-pattern": [
			"^([a-z][a-zA-Z0-9]*)(_[a-z][a-zA-Z0-9]+)*$",
			{
				message: "Expected id to be snake-case",
			},
		],
	},
	ignoreFiles: ["**/node_modules/**"],
};
