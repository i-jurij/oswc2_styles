import css from 'rollup-plugin-css-porter';

export default {
	input: 'src/app.js',
	plugins: [css({
		raw: 'oswc2_styles.css',
		minified: 'oswc2_styles.min.css',
	})],
	output: [
		{
			file: './build/app.js',
			format: 'es'
		},
	],
};