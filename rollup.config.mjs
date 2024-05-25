import css from 'rollup-plugin-css-porter';

export default {
	input: 'src/app.js',
  	plugins: [ css({
   	raw: 'oswc2.css',
    	minified: 'oswc2.min.css',
  	}) ],
  	output: [
		{
			file: './build/app.js',
			format: 'es'
		},
	],
};